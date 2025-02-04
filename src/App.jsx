import React, { useState, useEffect, useRef } from "react";
import MyImage from './images/img1.png';

// Componente de animación de texto
const AnimatedText = () => {
  const [text, setText] = useState("Hello");
  const textArray = ["Hello World", "Hello User"];
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      index = (index + 1) % textArray.length;
      setText(textArray[index]);
    }, 2000); // Cambia de texto cada 2 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="text-start mb-8">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white animate-fadeIn drop-shadow-2xl">
        {text}
      </h1>
    </div>
  );
};


// Componente Navbar
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-gray-900">
        <div className="flex items-center space-x-2">
          {/* Imagen */}
          <img src="logooo.webp" alt="Logo" className="h-16 w-auto" />
          {/* Texto */}
          <div className="text-xl font-bold text-blue-600">Programalo Ya</div>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors">Inicio</a></li>
          <li><a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors">Servicios</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">Sobre Nosotros</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Componente de Contacto
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí, deberías integrar con una API de correo, como EmailJS o un servidor backend.
    console.log("Formulario enviado con los siguientes datos:", formData);

    // Para simular el envío, puedes resetear el formulario y mostrar un mensaje.
    alert("¡Tu mensaje ha sido enviado con éxito!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje o cotización"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition"
          >
            Enviar Cotización
          </button>
        </form>
      </div>
    </div>
  );
};


// Componente "Nuestros Servicios" con animación
// Componente "Nuestros Servicios" con animación
const ServicesSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Aumentamos el threshold a 0.5 (50% visible)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`py-20 bg-white text-gray-900 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-semibold text-gray-600 mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[350px]">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-left">Desarrollo de Proyectos Académicos</h3>
            <p className="text-lg mb-4 text-left">
              Si necesitas ayuda con proyectos de programación, desarrollo de sistemas o diseño web para tus estudios, te brindamos asesoría y ejecución para llevar tus trabajos al nivel que tu universidad exige.
            </p>
            {/* Imagen centrada y más grande */}
            <img src="academico.png" alt="Logo" className="mx-auto h-32 w-auto" />
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[350px]">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-left">Desarrollo de Sitios Web Profesionales</h3>
            <p className="text-lg mb-10 text-left">
              Creamos sitios web responsivos, intuitivos y visualmente atractivos, diseñados para aumentar la presencia online de tu negocio y atraer a más clientes.
            </p>
            {/* Imagen centrada y más grande */}
            <img src="computador.png" alt="Logo" className="mx-auto h-32 w-auto" />
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[350px]">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-left">Mantenimiento y Soporte Continuo</h3>
            <p className="text-lg mb-15 text-left">
              Ofrecemos soporte y mantenimiento para que tu sitio web esté siempre actualizado, seguro y funcionando sin problemas.
            </p>
            {/* Imagen centrada y más grande */}
            <img src="automatizacion.png" alt="Logo" className="mx-auto h-32 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
  
};

// Componente "Sobre Nosotros" con animación
const AboutSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white text-gray-900 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-blue-600 mb-8 text-center">Sobre Nosotros</h2>
        <p className="text-lg mb-6 text-left">
          Somos un equipo de profesionales apasionados por la tecnología y la educación. Nuestra misión es ayudarte a alcanzar tus metas académicas y profesionales a través de soluciones innovadoras y personalizadas. Trabajamos de la mano contigo para crear proyectos que se ajusten a tus necesidades específicas, brindándote el apoyo necesario en cada etapa del proceso.
        </p>
        <p className="text-lg mb-6 text-left">
          Con años de experiencia en el campo de la programación y la educación, estamos comprometidos a brindarte el mejor servicio posible. Nuestro enfoque está en proporcionar soluciones eficaces y creativas, ya sea para tu negocio, tus estudios o proyectos personales. Cada trabajo que realizamos es único, y nos aseguramos de que sea completamente adaptado a ti.
        </p>
       
      </div>
    </div>
  );
  
};

// Componente del Pie de Página
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ProgramaloYa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// Componente principal con el banner
const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-10 lg:px-32 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <AnimatedText />
          <h1 className="text-4xl lg:text-4xl font-bold mb-4">
            ¿Necesitas ayuda con tus proyectos de programación?
          </h1>
          <p className="text-lg lg:text-2xl mb-6">
          En ProgramaloYa, nos especializamos en desarrollo web a medida para empresas y proyectos universitarios. Ya sea que necesites un sitio web profesional, un sistema personalizado o ayuda con un trabajo académico, tenemos la experiencia y las herramientas para llevar tu idea al siguiente nivel.

</p>
          
          
          <button
      className="bg-green-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-green-600 transition hover:scale-105"
      onClick={() => window.open('https://wa.me/573118940610?text=Hola%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios.', '_blank')}
    >
       Contáctanos por WhatsApp
       </button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
          <img
            src={MyImage}
            alt="Estudiantes colaborando"
            className="relative max-w-md w-full rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <ServicesSection />
      <div className="py-20 bg-gray-50 text-gray-900" id="how-it-works">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-semibold text-blue-600 mb-12 text-center">¿Cómo Contratar Nuestros Servicios?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Paso 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">1</div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Valoración Inicial</h3>
        <p className="text-lg">
          Verificamos si podemos realizar tu trabajo de acuerdo a tus requisitos y plazo. Nuestro equipo analiza cuidadosamente tu solicitud.
        </p>
      </div>
      {/* Paso 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">2</div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Presupuesto</h3>
        <p className="text-lg">
          Te enviamos un presupuesto gratuito y detallado. Nuestro personal de atención al cliente te explicará todos los aspectos importantes.
        </p>
      </div>
      {/* Paso 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">3</div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Muestra del Trabajo</h3>
        <p className="text-lg">
          Iniciamos tu proyecto y te enviamos una parte del trabajo o una vista preliminar para que evalúes la calidad antes de continuar con el pago completo.
        </p>
      </div>
      {/* Paso 4 */}
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
        <div className="bg-blue-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">4</div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Recibe tu Trabajo</h3>
        <p className="text-lg">
          Descarga tu trabajo final en la fecha pactada desde nuestra plataforma y contacta con el docente encargado si necesitas resolver alguna duda.
        </p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default App;
