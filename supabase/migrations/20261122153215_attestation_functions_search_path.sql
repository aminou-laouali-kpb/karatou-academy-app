-- Advisor function_search_path_mutable (audit du 22/11/2026, S9).
-- Les deux fonctions créées par 20260923133802 n'avaient pas de search_path figé.
-- Leurs corps qualifient déjà chaque objet (public.…), un search_path vide ne
-- change donc pas leur comportement.
alter function public.karatou_enforce_attestation_signing_policy() set search_path = '';
alter function public.karatou_attestation_registry_snapshot() set search_path = '';
