import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DemoBadge } from './components/DemoBadge';
import { SkipLink } from './components/SkipLink';
// Landing and Login are the most common entry points — keep them eager for a
// fast first paint. Everything else is code-split so first-time visitors don't
// download the admin CMS, lesson player, and all lesson copy up front.
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

const Register = lazy(() => import('./pages/Register').then((m) => ({ default: m.Register })));
const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const LessonPlayer = lazy(() => import('./pages/LessonPlayer').then((m) => ({ default: m.LessonPlayer })));
const Certificates = lazy(() => import('./pages/Certificates').then((m) => ({ default: m.Certificates })));
const Verify = lazy(() => import('./pages/Verify').then((m) => ({ default: m.Verify })));
const RedeemScholarship = lazy(() => import('./pages/RedeemScholarship').then((m) => ({ default: m.RedeemScholarship })));
const EnterpriseDashboard = lazy(() => import('./pages/EnterpriseDashboard').then((m) => ({ default: m.EnterpriseDashboard })));
const EnterpriseMembers = lazy(() => import('./pages/EnterpriseMembers').then((m) => ({ default: m.EnterpriseMembers })));
const AdminContent = lazy(() => import('./pages/AdminContent').then((m) => ({ default: m.AdminContent })));
const AdminTeam = lazy(() => import('./pages/AdminTeam').then((m) => ({ default: m.AdminTeam })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

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
        <AuthProvider>
          <LearningProvider>
            <SkipLink />
            <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
            <DemoBadge />
          </LearningProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
