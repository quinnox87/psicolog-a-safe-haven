import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: INTEGRACIÓN BACKEND - Enviar datos a endpoint de contacto (ej: POST /api/contact)
    console.log("Datos del formulario enviados:", formData);
    alert("Mensaje enviado (Simulación). El backend procesaría esto.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-form-section py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-text-dark">Contáctanos</h2>
        <p className="text-text-muted mt-2">Déjanos un mensaje y te responderemos a la brevedad.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-[#edefec] shadow-sm space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-text-dark mb-2">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background-light focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="Tu nombre"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-text-dark mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background-light focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-text-dark mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-background-light focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
            placeholder="¿En qué podemos ayudarte?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-md"
        >
          Enviar Mensaje
        </button>
        <p className="text-xs text-center text-text-muted mt-4">
          * Tus datos están protegidos. No compartimos información con terceros.
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
