---
name: Cours vs Module naming split
description: Visible label is "Cours" but route anchors and code identifiers stay "module" — do not rename them together.
---

# Cours vs Module naming split

The user-facing label for a top-level learning unit is **"Cours"** (FR) / "Course" (EN) / "Darasi/Darussa" (HA), but the underlying route anchors (`#modules`) and code identifiers (`module.id`, `LearningModule`, `useLearning().modules`, `ModuleCard`, `/modules` paths) intentionally stay **"module"**.

Sub-units inside a course remain "leçons" (FR) / "lessons" (EN) / "darussa" (HA).

**Why:** The data model and many components key off the `module` identifier; renaming identifiers to match the new label would be a large, risky refactor. Only the displayed strings were changed (via `translations.ts`).

**How to apply:** When changing copy, edit the translation values, not the keys or identifiers. When adding navigation, link to `#modules` even though the visible text says "Cours". Do not "fix" the apparent mismatch by renaming code symbols or anchors.
