
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Misión y Visión
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-right">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar servicios de construcción de la más alta calidad, desarrollando proyectos 
                innovadores y sostenibles que superen las expectativas de nuestros clientes. Nos 
                comprometemos a construir espacios seguros, funcionales y duraderos que contribuyan 
                al desarrollo de las comunidades chilenas.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="fade-left">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como la empresa constructora líder en Chile, destacando por nuestra 
                excelencia técnica, innovación constante y compromiso con la sostenibilidad. Aspiramos 
                a ser la primera opción para instituciones y particulares que buscan soluciones 
                constructivas de primer nivel.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Calidad</h4>
                <p className="text-sm text-gray-600">Excelencia en cada detalle</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Integridad</h4>
                <p className="text-sm text-gray-600">Transparencia y honestidad</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Innovación</h4>
                <p className="text-sm text-gray-600">Tecnología de vanguardia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Seguridad</h4>
                <p className="text-sm text-gray-600">Protección y prevención</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
