import React, { useEffect } from 'react';

const BookingSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="booking-section py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-primary/5 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-sm border border-primary/10">
        <div className="p-12 lg:p-20 flex-1">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-text-dark">Programa tu Evaluación</h2>
          <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-md">
            Da el primer paso hacia la claridad. Elige un horario que te convenga para una consulta preliminar de 15 minutos.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <div>
                <p className="font-bold text-text-dark">Reserva Instantánea</p>
                <p className="text-sm text-text-muted">Ver disponibilidad en tiempo real</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <div>
                <p className="font-bold text-text-dark">Confidencial y Seguro</p>
                <p className="text-sm text-text-muted">Plataformas compatibles con HIPAA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Widget */}
        <div className="flex-1 bg-white border-l border-[#daded8] min-h-[600px]">
          <div
            className="calendly-inline-widget w-full h-full"
            data-url="https://calendly.com/joaquinpavonperez/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
