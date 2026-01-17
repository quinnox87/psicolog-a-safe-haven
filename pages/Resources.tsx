import React, { useState } from 'react';
import { RESOURCES, ONLINE_QUESTIONNAIRES } from '../constants';
import ResourceCard from '../components/ResourceCard';
import { useBooking } from '../context/BookingContext';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos los Recursos');
  const [searchQuery, setSearchQuery] = useState('');
  const { openModal } = useBooking();

  // Categories match the translated categories in constants.ts
  // TODO: INTEGRACIÓN BACKEND - Cargar categorías dinámicamente desde API
  const categories = ['Todos los Recursos', 'Manejo de la Ansiedad', 'TDAH y Concentración', 'Higiene del Sueño', 'Neurodivergencia'];

  const filteredResources = RESOURCES.filter((resource) => {
    const matchesCategory = activeCategory === 'Todos los Recursos' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in min-h-screen bg-[#f6f7f7] resources-page">
      {/* Search Header */}
      <div className="bg-white border-b border-[#edefec] sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span>Recursos</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-semibold text-primary">Biblioteca</span>
          </div>
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            {/* TODO: INTEGRACIÓN BACKEND - Búsqueda en servidor (debounce) */}
            <input
              type="text"
              placeholder="Buscar manuales, guías..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-text-dark">
            Empoderando tu camino con conocimiento <span className="text-primary">basado en evidencia</span>.
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Bienvenido a nuestra biblioteca digital. Estos manuales y kits de herramientas están elaborados para ofrecer apoyo inmediato y conocimientos profesionales para tu bienestar mental.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Categorías</h3>
              <nav className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'text-text-dark hover:bg-white hover:shadow-sm'
                      }`}
                  >
                    <span>{cat}</span>
                    {cat === 'Todos los Recursos' && (
                      <span className={`text-xs ${activeCategory === cat ? 'text-white/80' : 'text-gray-400'}`}>
                        {RESOURCES.length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-primary/20 shadow-[0_8px_30px_rgba(95,122,82,0.1)]">
              <h4 className="font-bold text-primary mb-2">¿Necesitas ayuda directa?</h4>
              <p className="text-sm text-text-muted mb-4">Reserva una consulta para apoyo neuropsicológico personalizado.</p>
              {/* TODO: INTEGRACIÓN BACKEND - Enlace a flujo de reserva directa */}
              <button
                onClick={openModal}
                className="w-full py-2 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                Programar Sesión
              </button>
            </div>
          </aside>

          {/* Grid - Modularized with ResourceCard */}
          <div className="flex-1">
            {/* Questionnaires Section */}
            <div className="mb-16">
              <h2 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">quiz</span>
                Cuestionarios de Auto-Evaluación
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ONLINE_QUESTIONNAIRES.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-2xl border border-[#edefec] hover:border-primary/30 transition-all hover:shadow-lg group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined">assignment</span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.category}</span>
                      </div>
                      <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">open_in_new</span>
                    </div>

                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4 flex-grow">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>


            <div className="flex items-center justify-between mb-8">
              <p className="text-sm font-medium text-text-muted">Mostrando {filteredResources.length} recursos</p>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-text-muted">
                <span className="material-symbols-outlined text-5xl mb-4 opacity-50">search_off</span>
                <p>No se encontraron recursos que coincidan con tus criterios.</p>
              </div>
            )}

            {/* Pagination Placeholder */}
            {filteredResources.length > 0 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors disabled:opacity-50">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm shadow-md">1</button>
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 font-bold text-sm text-text-muted transition-colors">2</button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
