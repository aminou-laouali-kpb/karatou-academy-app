#!/usr/bin/env bash
# Git post-merge hook, used on the Replit workspace after pulling `main`.
#
# `npm ci` is deliberate: it fails loudly when package.json and the lockfile
# disagree, which is exactly the state a pull introduces when new dependencies
# land (the Unicode PDF fonts, for instance). Without it the next build fails
# with an unresolved import instead.
set -euo pipefail

npm ci --no-audit --no-fund
npm run typecheck
