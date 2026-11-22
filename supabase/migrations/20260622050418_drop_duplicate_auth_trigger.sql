-- Rapatrié depuis l'historique de production (appliqué le 22/06/2026, absent du dépôt).
-- Drop the duplicate trigger that causes {} error on signup.
-- create_karatou_profile_for_new_user already handles profile creation
-- with ON CONFLICT DO NOTHING — handle_new_user is redundant and breaks.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
