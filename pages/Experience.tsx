import React from 'react';

import { PUBLICATIONS } from '../constants';
import ResearchGrid from '../components/ResearchGrid';

const Experience: React.FC = () => {
  return (
    <div className="animate-fade-in min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-primary/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Trayectoria Profesional</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6">Joaquín Pavón Pérez</h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Neuropsicólogo Clínico | Especialista en DCA, Realidad Virtual y Neuromodulación
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-20 -mt-10">

        {/* 1. Perfil Profesional */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-[#edefec]">
          <h2 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">person</span>
            Perfil Profesional
          </h2>
          <p className="text-text-muted leading-relaxed">
            Neuropsicólogo clínico con 9 años de experiencia en Daño Cerebral Adquirido (DCA) en adultos.
            Especialista en la integración de soluciones digitales (VR, tDCS) para la rehabilitación y transferencia a la práctica asistencial ecológica.
            Mi enfoque combina la intervención basada en la evidencia con soluciones digitales para la rehabilitación y accesibilidad cognitiva.
          </p>
        </section>

        {/* ... (Experience Section remains the same) ... */}

        {/* ... (Research Section remains the same) ... */}

        {/* 4. Innovación y Docencia */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">rocket_launch</span>
            Innovación Tecnológica
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-all">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                Ayuntamiento Granada & AGREDACE
              </span>
              <h3 className="text-xl font-bold text-text-dark mb-2">App de Accesibilidad Cognitiva</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Desarrollo de solución digital para monumentos de Granada en colaboración con el Ayuntamiento y AGREDACE (2020).
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-all">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                FEDACE & Fundación Vodafone
              </span>
              <h3 className="text-xl font-bold text-text-dark mb-2">Mefacilyta: Entornos Virtuales</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Responsable del proyecto de accesibilidad cognitiva con herramientas virtuales.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm mt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-xl font-bold text-text-dark">Docencia</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Tutor de prácticas del Máster en Neurociencia Cognitiva y del Comportamiento en la Universidad de Granada (UGR) desde 2016.
            </p>
          </div>
        </section>

        {/* 5. Formación Académica (Keep as is) */}

        {/* 6. Competencias Técnicas */}
        <section className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-6 relative z-10">Competencias Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="font-medium leading-snug">Neuromodulación no invasiva (tDCS) aplicada al lenguaje y funciones ejecutivas.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="font-medium leading-snug">Implementación de protocolos de Realidad Virtual (Inmersiva y Semi-inmersiva).</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="font-medium leading-snug">Evaluación avanzada de negligencia espacial, afasia y conciencia de déficit.</p>
            </div>
          </div>
        </section>

        {/* Download CV */}
        <div className="flex justify-center pt-8">
          <a
            href="/CV_Joaquin_Pavon.pdf"
            download="CV_Joaquin_Pavon.pdf"
            className="flex items-center gap-3 bg-text-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">download</span>
            Descargar CV Completo en PDF
          </a>
        </div>

      </div>
    </div>
  );
};

export default Experience;
