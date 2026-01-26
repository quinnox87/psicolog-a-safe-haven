import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivateArea from './pages/PrivateArea';
import CookieBanner from './components/layout/CookieBanner';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/ui/BookingModal';
import FloatingContact from './components/layout/FloatingContact';

import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CognitiveQuestionnaire from './pages/CognitiveQuestionnaire';
import NotFound from './pages/NotFound';

import { AuthProvider } from './context/AuthContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

import { motion, AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  const RoutesAny = Routes as any;
  return (
    <AnimatePresence mode="wait">
      <RoutesAny location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition key="home"><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition key="services"><Services /></PageTransition>} />
        <Route path="/resources" element={<PageTransition key="resources"><Resources /></PageTransition>} />
        <Route path="/experiencia" element={<PageTransition key="experience"><Experience /></PageTransition>} />
        <Route path="/blog" element={<PageTransition key="blog"><Blog /></PageTransition>} />
        <Route path="/blog/:id" element={<PageTransition key="blog-post"><BlogPost /></PageTransition>} />
        <Route path="/tienda" element={<PageTransition key="store"><Store /></PageTransition>} />
        <Route path="/tienda/:id" element={<PageTransition key="product"><ProductDetail /></PageTransition>} />
        <Route path="/area-privada" element={<PageTransition key="private"><PrivateArea /></PageTransition>} />
        <Route path="/resources/cuestionario-cognitivo" element={<PageTransition key="quiz"><CognitiveQuestionnaire /></PageTransition>} />
        <Route path="/politica-privacidad" element={<PageTransition key="privacy"><PrivacyPolicy /></PageTransition>} />
        <Route path="/terminos" element={<PageTransition key="terms"><Terms /></PageTransition>} />
        <Route path="*" element={<PageTransition key="not-found"><NotFound /></PageTransition>} />
      </RoutesAny>
    </AnimatePresence>
  );
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <BookingProvider>
          <Layout>
            <AnimatedRoutes />
            <CookieBanner />
            <BookingModal />
            <FloatingContact />
          </Layout>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
