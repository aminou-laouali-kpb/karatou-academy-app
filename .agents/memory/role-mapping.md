---
name: Role mapping
description: How Supabase DB roles map to app UserRole type
---
DB profiles.role values: 'student', 'admin', 'org_admin'
App UserRole values: 'learner', 'platform_admin', 'enterprise_admin'
Mapping is in src/lib/roles.ts > normalizeUserRole():
  student (or unknown) → learner
  admin → platform_admin  
  org_admin → enterprise_admin

**Why:** DB schema was designed independently of the frontend type system; mapping happens at the boundary in normalizeUserRole.
**How to apply:** Always use normalizeUserRole() when reading role from Supabase profiles or auth.app_metadata.
