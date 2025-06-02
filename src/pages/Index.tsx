
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize AOS animations
    const initAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <About />
      <MissionVision />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
