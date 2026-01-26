import React from 'react';

import { EXPERIENCE_TIMELINE, PUBLICATIONS } from '../constants';
import ResearchGrid from '../components/features/ResearchGrid';
import Timeline from '../components/features/Timeline';
import { useBooking } from '../context/BookingContext';

const Experience: React.FC = () => {
  const { openModal } = useBooking();
  return (
    <div className="animate-fade-in min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-primary/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Trayectoria y Publicaciones</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6">Joaquín Pabon</h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Neuropsicólogo Clínico | Especialista en DCA, Realidad Virtual y Neuromodulación
          </p>
          <button
            onClick={openModal}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Programa tu sesión
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-24 -mt-10">

        {/* 1. Trayectoria Cronológica */}
        <section>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#edefec] mb-12">
            <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">history</span>
              Experiencia en Rehabilitación de Daño Cerebral Adquirido (DCA)
            </h2>
            <Timeline items={EXPERIENCE_TIMELINE} />
          </div>
        </section>

        {/* 2. Investigación y Publicaciones */}
        <section className="bg-[#f8f9f8] p-8 rounded-2xl border border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">science</span>
                Investigación en tDCS y Realidad Virtual
              </h2>
              <p className="text-text-muted text-lg">Publicaciones científicas y contribuciones al campo de la neurotecnología.</p>
            </div>
          </div>

          <ResearchGrid items={PUBLICATIONS} />

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.researchgate.net/profile/Joaquin-Perez-11/research"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors px-4 py-2"
            >
              <span>Ver Perfil Completo en ResearchGate</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* 3. Competencias Técnicas */}
        <section className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
            <span className="material-symbols-outlined">psychology</span>
            Competencias Técnicas Especializadas
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">electric_bolt</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Neuromodulación</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">Aplicación de tDCS en lenguaje y funciones ejecutivas.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">vr180_create2d</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Tecnología Aplicada</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">Diseño de protocolos en Realidad Virtual (Inmersiva/Semi-inmersiva).</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Clínica Avanzada</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">Evaluación integral de DCA, afasia y negligencia espacial.</p>
            </div>
          </div>
        </section>

        {/* Download CV */}
        <div className="flex justify-center pt-8">
          <a
            href="/assets/docs/CV_Joaquin_Pabon.pdf"
            download="CV_Joaquin_Pabon.pdf"
            className="flex items-center gap-3 bg-text-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
            Descargar CV Completo en PDF
          </a>
        </div>

      </div>
    </div>
  );
};

export default Experience;
