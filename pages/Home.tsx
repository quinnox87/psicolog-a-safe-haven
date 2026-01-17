import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, QA_ITEMS, RESOURCES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ResourceCard from '../components/ResourceCard';
import QACarousel from '../components/QACarousel';
import BookingSection from '../components/BookingSection';
import ContactForm from '../components/ContactForm';
import { useBooking } from '../context/BookingContext';

const Home: React.FC = () => {
  const { openModal } = useBooking();

  return (
    <div className="animate-fade-in home-page">
      {/* Hero Section */}
      <section className="hero-section px-6 py-8 md:py-12 max-w-7xl mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden min-h-[600px] flex items-center bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/retrato.png")`
          }}
        >
          <div className="relative z-10 px-8 md:px-16 max-w-3xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
              Psicología Clínica y Neuropsicología
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight drop-shadow-sm">
              Bienvenido a tu Refugio Seguro en Granada.
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-10 opacity-95 text-gray-100 max-w-xl">
              Soy neuropsicólogo con 38 años y te ayudo a recuperar tu bienestar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
              >
                Comienza tu Viaje
              </button>
              <Link to="/experiencia" className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Conoce a tu Doctor
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest text-xs">Sígueme en:</span>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'Facebook', url: 'https://facebook.com' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joaquinpavonperez/' },
                  { name: 'iVoox', url: 'https://ivoox.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold backdrop-blur-sm transition-all border border-white/10"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="specialties-section py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Experiencia</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark tracking-tight">Especialidades Clínicas</h2>
          <div className="w-12 h-1 bg-primary/30 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.filter(s => s.id !== 'reports').map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>
      </section>

      {/* Interactive Q&A Carousel Section */}
      <section className="qa-section py-20 px-6 bg-[#f4f6f4] border-y border-[#edefec]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Entendiendo el Proceso</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-dark mb-6">Preguntas Frecuentes</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Es normal tener dudas antes de comenzar terapia o una evaluación neuropsicológica. Desliza para encontrar respuestas a las inquietudes más comunes de mis pacientes.
            </p>
            <Link to="/contact" className="text-primary font-bold border-b border-primary pb-1 hover:text-primary-dark transition-colors">
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
      <section className="featured-resources py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">Recursos</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-dark">Manuales de Apoyo</h2>
          <p className="mt-4 text-text-muted">Guías descargables gratuitas para tu viaje cognitivo y emocional.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {RESOURCES.slice(0, 4).map((resource) => (
            <ResourceCard key={resource.id} resource={resource} compact={true} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-text-dark border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
            Ver Todos los Recursos <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <div className="bg-[#fcfcfb] border-t border-[#edefec]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
