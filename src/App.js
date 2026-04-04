import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Suspense, lazy } from 'react';

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
const Testimonials = lazy(() =>
  import('./components/Testimonials').then(module => ({
    default: module.Testimonials
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
      <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#D4AF37' }}></div>
    </div>
  );
}

export default function App() {
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
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
