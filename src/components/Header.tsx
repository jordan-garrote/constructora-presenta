
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://cdn.prod.website-files.com/602c27401e5361af1b22f02f/6057d2cf4bb1628a6025226e_Logo%20VDZ%20Cons%20Web-p-500.png" 
              alt="VDZ Constructora" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+56 9 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm">info@vdzconstructora.cl</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Contacto
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">info@vdzconstructora.cl</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
