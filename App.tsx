import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivateArea from './pages/PrivateArea';
import CookieBanner from './components/CookieBanner';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';
import FloatingContact from './components/FloatingContact';

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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <BookingProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/experiencia" element={<Experience />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/tienda" element={<Store />} />
              <Route path="/tienda/:id" element={<ProductDetail />} />
              <Route path="/area-privada" element={<PrivateArea />} />
              <Route path="/resources/cuestionario-cognitivo" element={<CognitiveQuestionnaire />} />
              <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
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
