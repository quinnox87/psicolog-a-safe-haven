import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, QA_ITEMS, RESOURCES, STORE_ITEMS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ResourceCard from '../components/ResourceCard';
import StoreCard from '../components/StoreCard';
import PaymentModal from '../components/PaymentModal';
import QACarousel from '../components/QACarousel';
import BookingSection from '../components/BookingSection';
import ContactForm from '../components/ContactForm';
import { useBooking } from '../context/BookingContext';
import { StoreItem } from '../types';

const Home: React.FC = () => {
  const { openModal } = useBooking();
  // Payment Modal State
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<StoreItem | null>(null);

  const handlePurchaseClick = (item: StoreItem) => {
    setSelectedProduct(item);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="animate-fade-in home-page">
      {/* Hero Section */}
      <section className="hero-section px-4 md:px-6 py-6 md:py-12 max-w-7xl mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden min-h-[450px] md:min-h-[600px] flex items-center bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/retrato.png")`
          }}
        >
          <div className="relative z-10 px-6 md:px-16 max-w-3xl text-white py-10 md:py-0">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border border-white/30">
              Psicología Joaquín Pabon
            </span>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 tracking-tight drop-shadow-sm">
              Neuropsicólogo Clínico en Granada <br /> <span className="text-xl md:text-4xl block mt-2 font-normal text-gray-100">Rehabilitación de Daño Cerebral y Terapia Basada en Evidencia</span>
            </h1>
            <p className="text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10 opacity-95 text-gray-200 max-w-xl">
              Más de 9 años de experiencia en la recuperación tras Ictus o TCE, y apoyo psicológico especializado. Tu bienestar en manos profesionales.
            </p>


            <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest text-xs">Sígueme en:</span>
              <div className="flex gap-2 flex-wrap">
                {[
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Facebook', url: 'https://facebook.com' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joaquinpavonperez/' },
                  { name: 'TikTok', url: 'https://tiktok.com' },
                  { name: 'iVoox', url: 'https://ivoox.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-xs font-bold backdrop-blur-sm transition-all border border-white/10"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Trust Bar */}
      <section className="bg-white/50 border-y border-gray-100 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-text-muted/60 mb-8">
            Colaboraciones y Formación en Instituciones de Prestigio
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/instituciones.png" alt="Instituciones Colaboradoras" className="h-16 md:h-24 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="specialties-section py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Servicios Especializados</span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark tracking-tight">Especialista en DCA y Neuropsicología</h2>
          <div className="w-12 h-1 bg-primary/30 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.filter(s => s.id !== 'reports').map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>
      </section>

      {/* Interactive Q&A Carousel Section */}
      <section className="qa-section py-12 md:py-20 px-4 md:px-6 bg-[#f4f6f4] border-y border-[#edefec]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="lg:w-1/3">
            <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Entendiendo el Proceso</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-dark mb-4 md:mb-6">Preguntas Frecuentes</h2>
            <p className="text-text-muted leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Es normal tener dudas antes de comenzar terapia o una evaluación neuropsicológica. Desliza para encontrar respuestas a las inquietudes más comunes de mis pacientes.
            </p>
            <Link to="/contact" className="text-primary font-bold border-b border-primary pb-1 hover:text-primary-dark transition-colors inline-block mb-8 lg:mb-0">
              ¿Tienes otra pregunta? Contáctame
            </Link>
          </div>

          <div className="lg:w-2/3 w-full">
            <QACarousel items={QA_ITEMS} />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Featured Resources */}
      <section className="featured-resources py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Recursos</span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-dark">Manuales de Apoyo</h2>
          <p className="mt-3 md:mt-4 text-text-muted text-sm md:text-base">Guías descargables gratuitas para tu viaje cognitivo y emocional.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {RESOURCES.slice(0, 4).map((resource) => (
            <ResourceCard key={resource.id} resource={resource} compact={true} />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-text-dark border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
            Ver Todos los Recursos <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Featured Store Items */}
      <section className="featured-store py-12 md:py-20 px-4 md:px-6 bg-[#f9faf9] border-y border-[#edefec]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Tienda Online</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-dark">Formación y Materiales</h2>
            <p className="mt-3 md:mt-4 text-text-muted text-sm md:text-base">Recursos especializados para profesionales y pacientes.</p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-4 md:gap-8 snap-x snap-mandatory px-4 -mx-4 md:mx-0 md:px-0 scrollbar-hide">
            {STORE_ITEMS.slice(0, 4).map((item) => (
              <div key={item.id} className="min-w-[85%] md:min-w-[350px] snap-center h-full">
                <StoreCard item={item} onPurchase={handlePurchaseClick} compact={true} />
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Link to="/tienda" className="inline-flex items-center gap-2 text-sm font-bold text-text-dark border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
              Ir a la Tienda <span className="material-symbols-outlined text-sm">store</span>
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <div className="bg-[#fcfcfb] border-t border-[#edefec]">
        <ContactForm />
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Home;
