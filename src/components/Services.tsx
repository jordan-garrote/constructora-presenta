
import { Building, Wrench, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Obras Civiles",
      description: "Desarrollo de proyectos de infraestructura, edificación y urbanización con los más altos estándares de calidad y seguridad.",
      features: ["Construcción de edificios", "Infraestructura vial", "Obras hidráulicas", "Proyectos urbanísticos"]
    },
    {
      icon: Wrench,
      title: "Remodelaciones",
      description: "Servicios integrales de renovación y mejoramiento de espacios existentes, adaptándolos a nuevas necesidades y tendencias.",
      features: ["Remodelación residencial", "Adecuación comercial", "Modernización institucional", "Eficiencia energética"]
    },
    {
      icon: FileText,
      title: "Consultoría Técnica",
      description: "Asesoría especializada en planificación, diseño y gestión de proyectos constructivos para optimizar recursos y resultados.",
      features: ["Estudios de factibilidad", "Supervisión técnica", "Gestión de permisos", "Control de calidad"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales en construcción, adaptadas a las necesidades específicas 
              de cada cliente y proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-8">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                  <button className="w-full text-white font-semibold py-2 px-4 rounded-lg border-2 border-white/20 hover:bg-white/10 transition-colors duration-300">
                    Solicitar Información
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Necesitas un servicio personalizado?
              </h3>
              <p className="text-gray-600 mb-6">
                Contáctanos para desarrollar una solución específica para tu proyecto
              </p>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
