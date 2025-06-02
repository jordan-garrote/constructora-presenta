
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Proyectos Completados" },
    { icon: Award, number: "15+", label: "Años de Experiencia" },
    { icon: Clock, number: "24/7", label: "Soporte Técnico" },
    { icon: Target, number: "100%", label: "Satisfacción Cliente" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre VDZ Constructora
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una empresa chilena especializada en construcción, con más de 15 años de experiencia 
              desarrollando proyectos de obras civiles, remodelaciones y consultoría técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800&auto=format&fit=crop"
                alt="VDZ Constructora Team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comprometidos con la Excelencia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En VDZ Constructora, nos enorgullecemos de ser una empresa líder en el sector de la construcción 
                en Chile. Nuestro compromiso con la calidad, la innovación y la satisfacción del cliente nos ha 
                permitido consolidarnos como una opción confiable para instituciones, escuelas, edificios y 
                complejos habitacionales.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contamos con un equipo de profesionales altamente calificados y utilizamos las mejores prácticas 
                y tecnologías disponibles en el mercado para garantizar que cada proyecto se ejecute con los más 
                altos estándares de calidad y seguridad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Certificaciones ISO 9001:2015
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Equipo multidisciplinario especializado
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Tecnología de vanguardia en construcción
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Compromiso con la sostenibilidad
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="fade-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
