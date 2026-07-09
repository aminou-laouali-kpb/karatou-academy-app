---
name: Deux projets Supabase Karatou
description: Les deux projets Supabase du compte — lequel est le bon pour l'app Karatou Academy
---

## Règle
Le vrai projet Supabase de l'app Karatou Academy est **pqcovsnomouclkdjhjig**.

**Why:** Un agent précédent a switché vers hijzqsljasbobjrjotjy (projet KPB post-bac) cassant toute la connexion. Le projet pqcovsnomouclkdjhjig contient : public.profiles, toutes les tables karatou_*, le contenu (rubriques, modules, cours), et le compte admin de la plateforme avec role "admin".

## Projets
- pqcovsnomouclkdjhjig → Karatou Academy (app Karatou, profiles, contenu, admin) CORRECT
- hijzqsljasbobjrjotjy → KPB (post-bac, schéma différent, users/diagnostics) NE PAS UTILISER

## Clé anon (publique)
La clé anon de pqcovsnomouclkdjhjig est hardcodée dans src/lib/supabaseClient.ts comme fallback. L'URL et la clé doivent toujours pointer vers pqcovsnomouclkdjhjig.

## How to apply
Si la connexion Supabase casse, vérifier que VITE_SUPABASE_URL = https://pqcovsnomouclkdjhjig.supabase.co et que la clé anon a ref=pqcovsnomouclkdjhjig dans le JWT payload.
