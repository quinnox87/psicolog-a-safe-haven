import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eeefed] border-t border-[#daded8] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
            <h2 className="text-xl font-bold tracking-tight text-text-dark">Psicología Joaquín Pabon</h2>
          </div>
          <p className="text-text-muted max-w-sm mb-6 leading-relaxed">
            Dedicados a proporcionar un entorno compasivo y basado en la investigación para la salud cognitiva y emocional.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white border border-[#daded8] flex items-center justify-center hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-[#daded8] flex items-center justify-center hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </button>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted/80">Servicios</h5>
          <ul className="space-y-4 text-sm font-medium text-text-dark">
            <li><a href="#" className="hover:text-primary transition-colors">Neuro-Evaluación</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Rehabilitación Cognitiva</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Consejería de Salud</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Talleres Grupales</a></li>
          </ul>
        </div>

        {/* Practice Links */}
        <div>
          <h5 className="font-bold mb-6 uppercase tracking-widest text-xs text-text-muted/80">Consultorio</h5>
          <ul className="space-y-4 text-sm font-medium text-text-dark">
            <li><a href="#" className="hover:text-primary transition-colors">Sobre Mí</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ubicaciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ética y Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Seguros</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-[#e0e2df] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Psicología Joaquín Pabon. Todos los derechos reservados.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-text-muted">
          <Link to="/politica-privacidad" className="hover:text-primary">Política de Privacidad</Link>
          <Link to="/terminos" className="hover:text-primary">Términos de Uso</Link>
          <a href="#" className="hover:text-primary">Accesibilidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
