import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { useBooking } from '../context/BookingContext';

const Services: React.FC = () => {
  const { openModal } = useBooking();
  return (
    <div className="animate-fade-in services-page">
      <section className="intro-section px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Nuestro Enfoque</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-text-dark">
              Encuentra Tu <span className="text-primary italic">Refugio Seguro</span>
            </h1>
            <p className="text-lg leading-relaxed text-text-muted max-w-xl">
              Servicios de Neuropsicología y Psicología de la Salud compasivos y adaptados a tu bienestar cognitivo y emocional único. Creemos en la atención basada en la evidencia entregada en un espacio tranquilo y sin prejuicios.
            </p>
            <button
              onClick={openModal}
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 w-fit"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Programa tu sesión
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              <div
                className="w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
                style={{ backgroundImage: "url('/images/despacho.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Data Binding with Constants */}
      <section className="services-grid px-6 py-12 bg-white/50 border-y border-[#edefec]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detail" />
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section px-6 py-24 bg-background-light">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block p-4 rounded-full bg-terracotta/20 mb-4 animate-pulse">
            <span className="material-symbols-outlined text-terracotta text-3xl">spa</span>
          </div>
          <h3 className="text-2xl font-bold text-text-dark">Filosofía de Psicología Joaquín Pavón</h3>
          <p className="text-text-muted leading-loose italic text-xl">
            "Sanar no se trata solo de corregir déficits; se trata de nutrir tus fortalezas existentes en un espacio donde te sientas verdaderamente escuchado y seguro. Nuestra práctica se basa en la creencia de que todos merecen un ambiente tranquilo para reconectarse con su yo cognitivo y emocional."
          </p>
          <div className="pt-6">
            <div className="w-24 h-1.5 bg-terracotta/40 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
