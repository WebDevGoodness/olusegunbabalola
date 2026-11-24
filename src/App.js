
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminWisdomNuggets from './pages/admin/AdminWisdomNuggets';
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard';
import SuperAdminAdmins from './pages/superadmin/SuperAdminAdmins';
import SuperAdminContactMessages from './pages/superadmin/SuperAdminContactMessages';

// Lazy load components below the fold
const DailyWisdom = lazy(() =>
  import('./components/DailyWisdom').then(module => ({
    default: module.DailyWisdom
  }))
);

const About = lazy(() =>
  import('./components/About').then(module => ({
    default: module.About
  }))
);

const Ministry = lazy(() =>
  import('./components/Ministry').then(module => ({
    default: module.Ministry
  }))
);

const Sermons = lazy(() =>
  import('./components/Sermons').then(module => ({
    default: module.Sermons
  }))
);

const Contact = lazy(() =>
  import('./components/Contact').then(module => ({
    default: module.Contact
  }))
);

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2"
        style={{ borderColor: '#D4AF37' }}
      ></div>
    </div>
  );
}

// Existing public homepage
function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F5F0' }}>
      <Header />

      <main>
        <Hero />

        <Suspense fallback={<LoadingFallback />}>
          <DailyWisdom />
          <About />
          <Ministry />
          <Sermons />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route path="/" element={<HomePage />} />

      {/* Admin pages */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute allowedRoles={['admin', 'superadmin']} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/wisdom-nuggets" element={<AdminWisdomNuggets />} />
      </Route>

      {/* Superadmin pages */}
      <Route element={<ProtectedRoute allowedRoles={['superadmin']} />}>
        <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
        <Route path="/superadmin/admins" element={<SuperAdminAdmins />} />
        <Route
            path="/superadmin/contact-messages"
            element={<SuperAdminContactMessages />}
        />
      </Route>
    </Routes>
  );
}
