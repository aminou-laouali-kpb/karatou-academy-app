#!/usr/bin/env bash
# Applique toutes les migrations sur une base Postgres JETABLE puis lance les
# tests SQL. Ne jamais pointer vers la production : la base est recréée.
#
#   PGHOST=127.0.0.1 PGUSER=postgres PGPASSWORD=postgres scripts/run-sql-tests.sh
#
# La connexion suit les variables libpq habituelles (PGHOST, PGPORT, PGUSER,
# PGPASSWORD). Le script crée la base « karatou_sql_tests » (en la supprimant
# d'abord si elle existe), la remplit, teste, puis la laisse en place pour
# inspection.
#
# La base n'est pas un vrai Supabase : supabase/tests/supabase-shim.sql crée le
# strict nécessaire (rôles anon/authenticated/service_role, auth.uid(),
# auth.jwt(), auth.users, storage.*). Avec la CLI Supabase, on peut aussi faire
# `supabase start && supabase db reset` puis lancer directement
# `psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/verify-gamification.sql`.
set -euo pipefail

: "${PGHOST:?PGHOST manquant (serveur Postgres jetable)}"
if [ -n "${DATABASE_URL:-}" ]; then
  echo "Refus : DATABASE_URL est défini ; ce script n'utilise que PGHOST/PGPORT/PGUSER." >&2
  exit 2
fi
case "$PGHOST" in
  *supabase*)
    echo "Refus : PGHOST pointe vers un projet Supabase hébergé." >&2
    exit 2
    ;;
esac

root="$(cd "$(dirname "$0")/.." && pwd)"
db="karatou_sql_tests"

# Migrations de DONNÉES qui supposent le catalogue déjà semé (seed:content) :
# elles échouent sur une base vide sans conséquence pour le schéma.
allowed_failures=(
  20260913193909_module_introduction_claude_ai.sql
  20260914132004_backfill_claude_ai_courses.sql
)

psql -d postgres -v ON_ERROR_STOP=1 -q -c "drop database if exists $db" -c "create database $db"
psql -d "$db" -v ON_ERROR_STOP=1 -q -f "$root/supabase/tests/supabase-shim.sql"

for file in "$root"/supabase/migrations/*.sql; do
  name="$(basename "$file")"
  if ! out="$(psql -d "$db" -v ON_ERROR_STOP=1 -q -f "$file" 2>&1)"; then
    if printf '%s\n' "${allowed_failures[@]}" | grep -qx "$name"; then
      echo "  (ignorée, données) $name"
      continue
    fi
    echo "$out" >&2
    echo "Échec de la migration $name" >&2
    exit 1
  fi
done
echo "Migrations appliquées."

# Les migrations doivent pouvoir être rejouées (supabase db push après un échec partiel).
for file in "$root"/supabase/migrations/2026112409*.sql; do
  psql -d "$db" -v ON_ERROR_STOP=1 -q -f "$file" > /dev/null 2>&1 \
    || { echo "Migration non rejouable : $(basename "$file")" >&2; exit 1; }
done
echo "Migrations B2 rejouables."

for test in verify-gamification.sql verify-certificate-fixes.sql verify-cross-org-rls.sql; do
  echo "== $test"
  if ! out="$(psql -d "$db" -v ON_ERROR_STOP=1 -q -f "$root/scripts/$test" 2>&1)"; then
    echo "$out" | tail -5 >&2
    exit 1
  fi
  echo "$out" | grep -E "PASS" || true
done
echo "Tests SQL : OK"
