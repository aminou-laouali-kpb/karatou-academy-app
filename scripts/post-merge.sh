#!/usr/bin/env bash
set -euo pipefail

# Recreate exactly the dependency tree committed with the merge. `npm ci` is
# non-interactive and fails immediately if package.json and package-lock.json
# are inconsistent, which makes a bad merge visible instead of leaving a
# partially updated workspace.
npm ci --no-audit --no-fund

# This static client has no safe database migration to run automatically.
# Type-checking catches incompatible merged frontend changes before workflows
# are reconciled and restarted.
npm run typecheck