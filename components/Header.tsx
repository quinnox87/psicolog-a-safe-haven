import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useBooking();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Experiencia', path: '/experiencia' },
    { name: 'Servicios', path: '/services' },
    { name: 'Recursos', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Tienda', path: '/tienda' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-[#edefec]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center transition-transform group-hover:scale-110">
            <img src="/logo.png" alt="Logo Psicología Joaquín Pabon" className="h-10 w-10 object-contain" />
          </div>
          <h2 className="text-text-dark text-xl font-bold tracking-tight">
            Psicología <span className="font-light">Joaquín Pabon</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors ${isActive(link.path)
                ? 'text-primary'
                : 'text-text-dark hover:text-primary'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Private Area */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/area-privada"
            className="flex items-center gap-1 text-sm font-bold text-text-muted hover:text-primary transition-colors px-3 py-2"
          >
            <span className="material-symbols-outlined text-lg">lock</span>
            Área Privada
          </Link>
          <button
            onClick={openModal}
            className="flex items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
          >
            Pedir Cita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-background-light/95 backdrop-blur-xl border-t border-[#edefec] py-6 px-6 flex flex-col gap-6 shadow-lg overflow-y-auto pb-32 animate-fade-in z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-text-dark hover:text-primary transition-colors py-2 border-b border-gray-100/50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/area-privada"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-text-muted hover:text-primary flex items-center gap-3 py-2 border-b border-gray-100/50"
            >
              <span className="material-symbols-outlined text-2xl">lock</span>
              Área Privada
            </Link>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openModal();
            }}
            className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg mt-auto shadow-xl hover:shadow-2xl transition-all active:scale-95"
          >
            Pedir Cita
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
