import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, QA_ITEMS, RESOURCES, STORE_ITEMS, STORE_ACTIVE } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ResourceCard from '../components/ResourceCard';
import StoreCard from '../components/StoreCard';
import PaymentModal from '../components/PaymentModal';
import QACarousel from '../components/QACarousel';
import BookingSection from '../components/BookingSection';
import ContactForm from '../components/ContactForm';
import { useBooking } from '../context/BookingContext';
import { StoreItem } from '../types';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';

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
      {/* Hero Section - Redesigned for Premium Look */}
      <section className="hero-section px-4 md:px-6 py-6 md:py-20 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 space-y-8 z-10 px-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/10 mb-4">
                Psicología Joaquín Pabon
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-text-dark tracking-tight">
                Neuropsicólogo Clínico <br /> en <span className="text-primary italic">Granada</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-text-muted mt-4 max-w-xl">
                Rehabilitación de Daño Cerebral y <br className="hidden md:block" /> Terapia Basada en Evidencia
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-text-muted/80 leading-relaxed max-w-2xl"
            >
              Más de 9 años de experiencia en la recuperación tras Ictus o TCE, y apoyo psicológico especializado. Tu bienestar en manos profesionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button
                onClick={openModal}
                className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all shadow-[0_10px_30px_rgba(58,90,64,0.3)] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                Programa tu sesión
              </button>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted/60">Sígueme</span>
                <div className="flex gap-2">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joaquinpavonperez/', icon: 'link' },
                    { name: 'Instagram', url: '#', icon: 'share' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-text-muted hover:text-primary hover:bg-white hover:border-primary/20 transition-all group"
                      title={social.name}
                    >
                      <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Portrait Image */}
          <div className="flex-1 w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white max-w-md mx-auto aspect-[4/5]">
                <img
                  src="/assets/images/retrato.png"
                  alt="Joaquín Pabón - Neuropsicólogo Clínico"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Info Card Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 -right-4 md:-right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[200px] hidden sm:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-dark">Colegiado</span>
                </div>
                <p className="text-xs text-text-muted font-medium leading-relaxed">
                  Psicólogo General Sanitario con especialidad en Neuropsicología.
                </p>
              </motion.div>
            </motion.div>
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

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.filter(s => s.id !== 'reports').map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ServiceCard service={service} variant="preview" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Interactive Q&A Carousel Section */}
      <section className="qa-section py-12 md:py-20 px-4 md:px-6 bg-[#f4f6f4] border-y border-[#edefec]">
        <Reveal>
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
        </Reveal>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Featured Resources */}
      <section className="featured-resources py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <Reveal>
          <div className="flex flex-col items-center mb-10 md:mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Recursos</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-dark">Manuales de Apoyo</h2>
            <p className="mt-3 md:mt-4 text-text-muted text-sm md:text-base">Guías descargables gratuitas para tu viaje cognitivo y emocional.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {RESOURCES.slice(0, 4).map((resource, idx) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ResourceCard resource={resource} compact={true} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-text-dark border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
              Ver Todos los Recursos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured Store Items */}
      <section className="featured-store py-12 md:py-20 px-4 md:px-6 bg-[#f9faf9] border-y border-[#edefec]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-10 md:mb-16">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Tienda Online</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-dark">Formación y Materiales</h2>
              <p className="mt-3 md:mt-4 text-text-muted text-sm md:text-base">Recursos especializados para profesionales y pacientes.</p>
            </div>

            {STORE_ACTIVE ? (
              <>
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
              </>
            ) : (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-primary/20 text-center max-w-2xl mx-auto shadow-sm">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl">hourglass_empty</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-4 text-center mx-auto">Próximamente Disponible</h3>
                <p className="text-text-muted mb-8 text-center mx-auto">Estamos trabajando en una selección exclusiva de materiales y cursos. Muy pronto podrás adquirirlos aquí.</p>
                <Link to="/tienda" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all">
                  Saber más
                </Link>
              </div>
            )}
          </Reveal>
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
