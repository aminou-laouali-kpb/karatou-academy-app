---
name: Edge function constraints
description: Known constraints for Supabase edge functions on this project
---
- deno.land/std imports FAIL at bundle time (Module not found). Use native Web Crypto API instead.
- HMAC-SHA256: use crypto.subtle.importKey + crypto.subtle.sign (available natively in Deno/edge runtime)
- Always add CORS headers: Access-Control-Allow-Origin: * and handle OPTIONS preflight
- verify_jwt: false needed for edge functions called with anon key from browser (no user JWT available at call site in attestation flow)

**Why:** The edge runtime bundles dependencies ahead of time; deno.land/std@0.177.0 was not resolvable.
**How to apply:** Prefer built-in Web APIs over external imports in edge functions.
