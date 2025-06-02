
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="https://cdn.prod.website-files.com/602c27401e5361af1b22f02f/6057d2cf4bb1628a6025226e_Logo%20VDZ%20Cons%20Web-p-500.png" 
                alt="VDZ Constructora" 
                className="h-12 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas en construcción con más de 15 años de experiencia, 
                desarrollando proyectos de calidad para instituciones y particulares en todo Chile.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('nosotros')} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('proyectos')} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Proyectos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Servicios</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Obras Civiles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Remodelaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Consultoría Técnica
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Supervisión de Obras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                    Gestión de Proyectos
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300">+56 9 1234 5678</p>
                    <p className="text-gray-300">+56 2 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300">info@vdzconstructora.cl</p>
                    <p className="text-gray-300">proyectos@vdzconstructora.cl</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-300">Av. Providencia 1234, Oficina 567</p>
                    <p className="text-gray-300">Providencia, Santiago, Chile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 VDZ Constructora. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <button
                onClick={scrollToTop}
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-300"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
