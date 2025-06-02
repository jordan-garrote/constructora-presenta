
import { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Centro Educacional San Patricio",
      category: "Infraestructura Educacional",
      location: "Santiago, Chile",
      year: "2023",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
      description: "Construcción de complejo educacional moderno con capacidad para 800 estudiantes, incluyendo laboratorios, biblioteca y espacios deportivos.",
      features: ["15,000 m² construidos", "Certificación sustentable", "Tecnología integrada", "Espacios deportivos"]
    },
    {
      id: 2,
      title: "Complejo Habitacional Los Aromos",
      category: "Vivienda Social",
      location: "Valparaíso, Chile",
      year: "2023",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=800&auto=format&fit=crop",
      description: "Desarrollo de 120 viviendas sociales con áreas verdes, equipamiento comunitario y espacios de recreación familiar.",
      features: ["120 viviendas", "Áreas verdes", "Equipamiento comunitario", "Eficiencia energética"]
    },
    {
      id: 3,
      title: "Hospital Regional Nuevo Milenio",
      category: "Infraestructura de Salud",
      location: "Concepción, Chile",
      year: "2022",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=800&auto=format&fit=crop",
      description: "Ampliación y modernización de centro médico regional con tecnología de última generación y estándares internacionales.",
      features: ["8,500 m² ampliación", "Quirófanos especializados", "UCI moderna", "Tecnología médica avanzada"]
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce algunos de nuestros proyectos más emblemáticos que demuestran nuestro compromiso 
              con la excelencia y la innovación.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {project.category}
              </button>
            ))}
          </div>

          {/* Selected Project */}
          <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {projects[selectedProject].category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {projects[selectedProject].year}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {projects[selectedProject].title}
              </h3>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin size={16} className="mr-2" />
                {projects[selectedProject].location}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {projects[selectedProject].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {projects[selectedProject].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Ver Detalles
                <ExternalLink size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">{projects[selectedProject].title}</h4>
                    <p className="text-sm opacity-90">{projects[selectedProject].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
              Galería de Proyectos
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => setSelectedProject(index)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm opacity-90">{project.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
