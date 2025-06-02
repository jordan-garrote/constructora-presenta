
const Clients = () => {
  const clients = [
    {
      name: "Gobierno de Chile",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&h=100&auto=format&fit=crop",
      description: "Ministerios y servicios públicos"
    },
    {
      name: "CORFO",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&h=100&auto=format&fit=crop",
      description: "Corporación de Fomento de la Producción"
    },
    {
      name: "MINVU",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&h=100&auto=format&fit=crop",
      description: "Ministerio de Vivienda y Urbanismo"
    },
    {
      name: "MOP",
      logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=200&h=100&auto=format&fit=crop",
      description: "Ministerio de Obras Públicas"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Clientes
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trabajamos con las principales instituciones y organizaciones del país, 
              construyendo relaciones de confianza y excelencia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-20" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Lo que dicen nuestros clientes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-500">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "VDZ Constructora superó nuestras expectativas en la construcción del nuevo centro educacional. 
                  Su profesionalismo y atención al detalle fueron excepcionales."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MG
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">María González</h4>
                    <p className="text-sm text-gray-600">Directora de Proyectos, MINEDUC</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-500">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "La calidad de construcción y el cumplimiento de plazos de VDZ son impecables. 
                  Son nuestro socio estratégico para todos los proyectos de infraestructura."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    CR
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-600">Gerente de Obras, MOP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
