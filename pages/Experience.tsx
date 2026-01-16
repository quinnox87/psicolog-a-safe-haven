import React from 'react';

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
            Especialista en la integración de tecnologías como Realidad Virtual (VR) y neuromodulación (tDCS) en la práctica asistencial.
            Mi enfoque combina la intervención basada en la evidencia con soluciones digitales para la rehabilitación y accesibilidad cognitiva.
          </p>
        </section>

        {/* 2. Experiencia Clínica */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">medical_services</span>
            Experiencia Clínica
          </h2>
          <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-12">
            <div className="relative group">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary transition-transform group-hover:scale-125"></div>
              <div>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 inline-block">2014 - 2025</span>
                <h3 className="text-xl font-bold text-text-dark">Neuropsicólogo Clínico</h3>
                <h4 className="text-lg text-accent-blue font-semibold mb-4">AGREDACE (Granada)</h4>
                <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-all">
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Evaluación y rehabilitación neuropsicológica integral en casos de DCA.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Diseño de programas individualizados y trabajo en equipos interdisciplinares con logopedia, fisioterapia y psiquiatría.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Implantación de protocolos de vanguardia con tDCS y Realidad Virtual.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Entrenamiento a familias y seguimiento para el retorno a la comunidad.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Actividad Investigadora y Publicaciones */}
        <section className="bg-[#f8f9f8] p-8 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">science</span>
            Investigación y Publicaciones
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-text-dark mb-3">Áreas de Especialización</h3>
              <div className="flex flex-wrap gap-2">
                {['Afasia', 'Negligencia Espacial', 'Funciones Ejecutivas', 'Memoria', 'Apatía', 'Conciencia de Déficit'].map(tag => (
                  <span key={tag} className="bg-white px-3 py-1 rounded-lg text-sm text-text-muted border border-[#edefec] shadow-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-text-dark mb-3">Publicación Destacada</h3>
              <div className="bg-white p-4 rounded-xl border-l-4 border-primary shadow-sm">
                <p className="text-sm text-text-dark font-medium leading-relaxed">
                  Coautor de "Rehabilitación neuropsicológica y nuevas tecnologías en Neuropsicología a través de casos clínicos".
                </p>
                <p className="text-xs text-text-muted mt-2">Editorial Panamericana, 2020</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <h3 className="font-bold text-text-dark mb-2">Proyectos</h3>
              <p className="text-text-muted text-sm">Colaborador en el Plan Nacional sobre mecanismos cognitivos de la anosognosia en la Universidad de Granada (IP: M. J. Funes).</p>
            </div>
            <div>
              <h3 className="font-bold text-text-dark mb-2">Congresos</h3>
              <p className="text-text-muted text-sm">Presentación de múltiples pósteres internacionales (NR-SIG-WFNR, FANPSE) sobre el uso de VR y tDCS en afasia y memoria de trabajo.</p>
            </div>
          </div>
        </section>

        {/* 4. Innovación y Docencia */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">Docencia</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Tutor de prácticas del Máster en Neurociencia Cognitiva y del Comportamiento en la UGR desde 2016.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold text-text-dark mb-3">Innovación Tecnológica</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Desarrollo de app de accesibilidad cognitiva en monumentos de Granada (2020) y responsable del proyecto Mefacilyta con herramientas virtuales.
            </p>
          </div>
        </section>

        {/* 5. Formación Académica */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">history_edu</span>
            Formación Académica
          </h2>
          <div className="space-y-4">
            {[
              { title: "Máster en Psicología General Sanitaria", inst: "UDIMA", year: "2020" },
              { title: "Máster en Neurociencia Cognitiva y del Comportamiento", inst: "Universidad de Granada", year: "2015" },
              { title: "Licenciatura en Psicología", inst: "Universidad de Granada", year: "2014" }
            ].map((edu, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#edefec] shadow-sm">
                <div>
                  <h4 className="font-bold text-text-dark">{edu.title}</h4>
                  <p className="text-sm text-text-muted">{edu.inst}</p>
                </div>
                <span className="text-sm font-mono text-primary bg-primary/5 px-2 py-1 rounded">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Competencias Técnicas */}
        <section className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-6 relative z-10">Competencias Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {[
              "Evaluación avanzada (lenguaje, atención, funciones ejecutivas)",
              "Diseño de programas centrados en objetivos funcionales y participación social",
              "Entrenamiento metacognitivo y coordinación interinstitucional"
            ].map((skill, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="font-medium leading-snug">{skill}</p>
              </div>
            ))}
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
