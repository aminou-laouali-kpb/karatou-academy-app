import { ComponentType, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DemoBadge } from './components/DemoBadge';
import { SkipLink } from './components/SkipLink';
import { ErrorBoundary } from './components/ErrorBoundary';
import { OfflineBanner } from './components/OfflineBanner';
// Landing and Login are the most common entry points — keep them eager for a
// fast first paint. Everything else is code-split so first-time visitors don't
// download the admin CMS, lesson player, and all lesson copy up front.
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

// Lazy with one retry: on a flaky 2G link a chunk import() can transiently fail;
// retrying once (after a brief wait) recovers without surfacing the ErrorBoundary.
function lazyWithRetry<T extends ComponentType<unknown>>(factory: () => Promise<{ default: T }>) {
  return lazy(async () => {
    try {
      return await factory();
    } catch {
      await new Promise((r) => setTimeout(r, 800));
      return factory();
    }
  });
}

const Register = lazyWithRetry(() => import('./pages/Register').then((m) => ({ default: m.Register })));
const ForgotPassword = lazyWithRetry(() => import('./pages/ForgotPassword').then((m) => ({ default: m.ForgotPassword })));
const ResetPassword = lazyWithRetry(() => import('./pages/ResetPassword').then((m) => ({ default: m.ResetPassword })));
const PrivacyPolicy = lazyWithRetry(() => import('./pages/Legal').then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazyWithRetry(() => import('./pages/Legal').then((m) => ({ default: m.TermsOfService })));
const VerifyAttestation = lazyWithRetry(() => import('./pages/VerifyAttestation').then((m) => ({ default: m.VerifyAttestation })));
const Dashboard = lazyWithRetry(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const LessonPlayer = lazyWithRetry(() => import('./pages/LessonPlayer').then((m) => ({ default: m.LessonPlayer })));
const Certificates = lazyWithRetry(() => import('./pages/Certificates').then((m) => ({ default: m.Certificates })));
const Verify = lazyWithRetry(() => import('./pages/Verify').then((m) => ({ default: m.Verify })));
const RedeemScholarship = lazyWithRetry(() => import('./pages/RedeemScholarship').then((m) => ({ default: m.RedeemScholarship })));
const EnterpriseDashboard = lazyWithRetry(() => import('./pages/EnterpriseDashboard').then((m) => ({ default: m.EnterpriseDashboard })));
const EnterpriseMembers = lazyWithRetry(() => import('./pages/EnterpriseMembers').then((m) => ({ default: m.EnterpriseMembers })));
const AdminContent = lazyWithRetry(() => import('./pages/AdminContent').then((m) => ({ default: m.AdminContent })));
const AdminTeam = lazyWithRetry(() => import('./pages/AdminTeam').then((m) => ({ default: m.AdminTeam })));
const AdminAttestations = lazyWithRetry(() => import('./pages/AdminAttestations').then((m) => ({ default: m.AdminAttestations })));
const AdminAttestationRegistry = lazyWithRetry(() => import('./pages/AdminAttestationRegistry').then((m) => ({ default: m.AdminAttestationRegistry })));
const AdminNewsletter = lazyWithRetry(() => import('./pages/AdminNewsletter').then((m) => ({ default: m.AdminNewsletter })));
const NotFound = lazyWithRetry(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-sm font-medium text-blue-700 shadow-blue-sm">
        Chargement...
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <LanguageProvider>
        <ErrorBoundary>
        <AuthProvider>
          <LearningProvider>
            <SkipLink />
            <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/redeem" element={<RedeemScholarship />} />
              <Route path="/redeem/:code" element={<RedeemScholarship />} />
              <Route
                path="/dashboard"
                element={(
                  <ProtectedRoute role="learner">
                    <Dashboard />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/learn"
                element={(
                  <ProtectedRoute role="learner">
                    <LessonPlayer />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/learn/:moduleSlug"
                element={(
                  <ProtectedRoute role="learner">
                    <LessonPlayer />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/learn/:moduleSlug/:courseId"
                element={(
                  <ProtectedRoute role="learner">
                    <LessonPlayer />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/certificates"
                element={(
                  <ProtectedRoute role="learner">
                    <Certificates />
                  </ProtectedRoute>
                )}
              />
              <Route path="/verify/:uid" element={<Verify />} />
              <Route path="/verify-attestation" element={<VerifyAttestation />} />
              <Route
                path="/enterprise"
                element={(
                  <ProtectedRoute role="enterprise_admin">
                    <EnterpriseDashboard />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/enterprise/members"
                element={(
                  <ProtectedRoute role="enterprise_admin">
                    <EnterpriseMembers />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/admin"
                element={(
                  <ProtectedRoute role="platform_admin">
                    <AdminContent />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/admin/team"
                element={(
                  <ProtectedRoute role="platform_admin">
                    <AdminTeam />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/admin/attestations"
                element={(
                  <ProtectedRoute role="platform_admin">
                    <AdminAttestations />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/admin/attestations/registry"
                element={(
                  <ProtectedRoute role="platform_admin">
                    <AdminAttestationRegistry />
                  </ProtectedRoute>
                )}
              />
              <Route
                path="/admin/newsletter"
                element={(
                  <ProtectedRoute role="platform_admin">
                    <AdminNewsletter />
                  </ProtectedRoute>
                )}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
            <OfflineBanner />
            <DemoBadge />
          </LearningProvider>
        </AuthProvider>
        </ErrorBoundary>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
