
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, Briefcase, Upload } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('project');
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [jobForm, setJobForm] = useState({
    name: '',
    email: '',
    specialty: '',
    cv: null as File | null
  });

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('¡Solicitud enviada exitosamente! Nos contactaremos contigo pronto.');
    setProjectForm({ name: '', email: '', company: '', message: '' });
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('¡Postulación enviada exitosamente! Revisaremos tu CV y te contactaremos.');
    setJobForm({ name: '', email: '', specialty: '', cv: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setJobForm({ ...jobForm, cv: e.target.files[0] });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente o buscas formar parte de nuestro equipo? 
              Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1" data-aos="fade-right">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-3 rounded-lg mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-600">+56 9 1234 5678</p>
                      <p className="text-gray-600">+56 2 2345 6789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-3 rounded-lg mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@vdzconstructora.cl</p>
                      <p className="text-gray-600">proyectos@vdzconstructora.cl</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 p-3 rounded-lg mr-4">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                      <p className="text-gray-600">Av. Providencia 1234, Oficina 567</p>
                      <p className="text-gray-600">Providencia, Santiago, Chile</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Horarios de Atención</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Forms */}
            <div className="lg:col-span-2" data-aos="fade-left">
              {/* Form Tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                  onClick={() => setActiveForm('project')}
                  className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                    activeForm === 'project'
                      ? 'bg-white text-orange-500 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Briefcase size={20} className="mr-2" />
                  Solicitar Proyecto
                </button>
                <button
                  onClick={() => setActiveForm('job')}
                  className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                    activeForm === 'job'
                      ? 'bg-white text-orange-500 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <User size={20} className="mr-2" />
                  Postular Trabajo
                </button>
              </div>

              {/* Project Form */}
              {activeForm === 'project' && (
                <form onSubmit={handleProjectSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={projectForm.name}
                        onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={projectForm.email}
                        onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Empresa/Institución</label>
                    <input
                      type="text"
                      value={projectForm.company}
                      onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Nombre de tu empresa o institución"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensaje *</label>
                    <textarea
                      required
                      rows={6}
                      value={projectForm.message}
                      onChange={(e) => setProjectForm({ ...projectForm, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Send size={20} className="mr-2" />
                    Enviar Solicitud
                  </button>
                </form>
              )}

              {/* Job Form */}
              {activeForm === 'job' && (
                <form onSubmit={handleJobSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={jobForm.name}
                        onChange={(e) => setJobForm({ ...jobForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={jobForm.email}
                        onChange={(e) => setJobForm({ ...jobForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Especialidad *</label>
                    <select
                      required
                      value={jobForm.specialty}
                      onChange={(e) => setJobForm({ ...jobForm, specialty: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Selecciona tu especialidad</option>
                      <option value="ingeniero-civil">Ingeniero Civil</option>
                      <option value="arquitecto">Arquitecto</option>
                      <option value="constructor-civil">Constructor Civil</option>
                      <option value="capataz">Capataz</option>
                      <option value="operario">Operario Especializado</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subir CV *</label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="cv-upload"
                        required
                      />
                      <label
                        htmlFor="cv-upload"
                        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-orange-500 transition-colors duration-300"
                      >
                        <Upload size={32} className="mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-600">
                          {jobForm.cv ? jobForm.cv.name : 'Haz clic para subir tu CV'}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (máx. 5MB)</p>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Send size={20} className="mr-2" />
                    Enviar Postulación
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-20" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Nuestra Ubicación</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.372716153489!2d-70.61494892421478!3d-33.42462877338775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5f4b2d5c5%3A0x7b7a7b7a7b7a7b7a!2sAv.%20Providencia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1635360000000!5m2!1ses!2scl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VDZ Constructora Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
