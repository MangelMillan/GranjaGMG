'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  MessageCircle, 
  MapPin, 
  Phone,
  Instagram,
  Facebook,
  Waves,
  Trees,
  Building2,
  Utensils,
  Cake,
  Star,
  Users,
  Calendar,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye
} from "lucide-react";

// Componente del Header con WhatsApp fijo
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "526145468286"; // Reemplazar con el número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=¡Hola! Me interesa conocer más sobre los paquetes de eventos en Granja GMG`;

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/gmglogo.png"
                  alt="GMG Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Granja GMG</h1>
                <p className="text-sm text-gray-600">Tu evento, como lo soñaste</p>
              </div>
            </motion.div>
            
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Contactar</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* WhatsApp flotante */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 15px rgba(34, 197, 94, 0)"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>
    </>
  );
};

// Componente Hero Section con layout lado a lado
const HeroSection = () => {
  const heroImages = [
    '/images/gj18.jpg',
    '/images/gj1.jpeg',
    '/images/gj2.jpeg',
    '/images/gj3.jpeg',
    '/images/gj4.jpeg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const whatsappUrl = `https://wa.me/526145551234?text=¡Hola! Quiero cotizar un evento en Granja GMG`;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Contenido de texto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tu evento,
              <span className="block text-red-600">como lo soñaste</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 font-secondary leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Granja de eventos sociales en Chihuahua con alberca, áreas verdes y techadas. 
              El lugar perfecto para hacer realidad tu celebración.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Cotiza por WhatsApp
              </a>
              
              <button
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Ver Galería
              </button>
            </motion.div>

            {/* Estadísticas */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">120</div>
                <div className="text-sm text-gray-600">Capacidad Máxima</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Carrusel de imágenes */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
        <Image
                    src={heroImages[currentImage]}
                    alt="Granja GMG"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover"
          priority
        />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navegación del carrusel */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                    type="button"
                  />
                ))}
              </div>

              {/* Botones de navegación */}
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/0 transition-all duration-300 z-20"
                type="button"
              >
                <ChevronLeft 
                  className="w-5 h-5" 
                  style={{ color: 'white', stroke: 'white', fill: 'white' }}
                />
              </button>
              
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/10 transition-all duration-300 z-20"
                type="button"
              >
                <ChevronRight 
                  className="w-5 h-5" 
                  style={{ color: 'white', stroke: 'white', fill: 'white' }}
                />
              </button>
            </div>

            {/* Decoración */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sección ¿Qué es Granja GMG?
const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="section-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient py-2">
            ¿Qué es Granja GMG?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 font-secondary leading-relaxed">
            Granja GMG es un espacio único para eventos sociales ubicado estratégicamente 
            a un costado de Romanzza en la ciudad de Chihuahua. Contamos con hermosas áreas 
            verdes, una refrescante alberca y espacios techados que se adaptan perfectamente 
            a cualquier tipo de celebración.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alberca</h3>
              <p className="text-gray-600">Espaciosa y segura para disfrutar en cualquier época del año</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Áreas Verdes</h3>
              <p className="text-gray-600">Amplios jardines naturales perfectos para fotos y recreación</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Área Techada</h3>
              <p className="text-gray-600">Espacios cubiertos para protegerte del sol y la lluvia</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Sección de Paquetes
const PackagesSection = () => {
  const packages = [
    {
      name: "Todo Incluido",
      price: "$21,500",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Renta del lugar",
        "Comida: 80 platillos de adulto (tacos de bistec), 50 platillos de niño (pizza, gelatina y papitas)",
        "Pastel (para 150 personas)",
        "Piñata (con bolo)",
        "2 meseros",
        "Bebidas (25 refrescos o garrafas de Jamaica o Limonada)",
        "Desechables",
        "Frituras (20 charolas de botana)"
      ],
      popular: true
    },
    {
      name: "Comida + Pastel",
      price: "$14,500",
      icon: <Cake className="w-8 h-8" />,
      features: [
        "Renta del lugar",
        "Comida: 80 platillos de adulto (tacos de bistec), 50 platillos de niño (pizza, gelatina y papitas)",
        "Pastel (para 150 personas)"
      ],
      popular: false
    },
    {
      name: "Comida Básica",
      price: "$12,500",
      icon: <Utensils className="w-8 h-8" />,
      features: [
        "Renta del lugar",
        "Comida: 80 platillos de adulto (tacos de bistec), 50 platillos de niño (pizza, gelatina y papitas)"
      ],
      popular: false
    }
  ];

  const whatsappUrl = (packageName: string) => 
    `https://wa.me/526145468286?text=¡Hola! Me interesa el paquete "${packageName}" de Granja GMG. ¿Podrían darme más información?`;

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nuestros Paquetes
          </h2>
          <p className="text-lg text-gray-600 font-secondary">
            Elige el paquete perfecto para tu evento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular ? 'border-red-500 scale-105' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  pkg.popular ? 'bg-red-500 text-white' : 'bg-red-100 text-red-600'
                }`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    {feature}
          </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                }`}
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de Adicionales
const AddonsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const addons = [
    { name: "Charola de frituras", price: "$50", emoji: "🍟" },
    { name: "Orden de tacos de bistec", price: "$65", emoji: "🌮" },
    { name: "Platillo de niño (pizza, gelatina, papitas)", price: "$50", emoji: "🍽️" },
    { name: "Platillo de niño con jugo", price: "$65", emoji: "🍽️" },
    { name: "Refresco", price: "$60", emoji: "🥤" },
    { name: "Garrafa 20 L de agua de sabor", price: "$230", emoji: "🫗" },
    { name: "Brinca brinca", price: "$1,000", emoji: "🚸" },
    { name: "Bolsas de dulces", price: "$35 c/u", emoji: "🍬" },
    { name: "Decoración mesa de regalos", price: "$1,900", emoji: "🎊" },
    { name: "Mesa de dulces (100 productos)", price: "$4,500", emoji: "🍭" },
    { name: "Centros de mesa", price: "$130 c/u", emoji: "🎉" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Servicios Adicionales
            </h2>
            <p className="text-lg text-gray-600 font-secondary">
              Personaliza tu evento con nuestros servicios extra
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Ver servicios adicionales</h3>
                <p className="text-gray-600">Haz clic para explorar todas nuestras opciones</p>
              </div>
              <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`} />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {addons.map((addon, index) => (
                        <motion.div
                          key={addon.name}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <span className="flex items-center gap-2 text-lg">
                            <span className="text-2xl">{addon.emoji}</span> {addon.name}
                          </span>
                          <span className="font-bold text-red-600 text-lg">{addon.price}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <a
                        href="https://wa.me/526145468286?text=¡Hola! Me interesa información sobre los servicios adicionales de Granja GMG"
            target="_blank"
            rel="noopener noreferrer"
                        className="btn-whatsapp inline-flex"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Consultar adicionales
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Galería Interactiva
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryImages = [
    '/images/gj1.jpeg',
    '/images/gj2.jpeg',
    '/images/gj3.jpeg',
    '/images/gj4.jpeg',
    '/images/gj5.jpeg',
    '/images/gj6.jpeg',
    '/images/gj7.jpeg',
    '/images/gj8.jpeg',
    '/images/gj9.jpeg',
    '/images/gj10.jpeg',
    '/images/gj11.jpeg',
    '/images/gj12.jpeg',
    '/images/gj13.jpeg',
    '/images/gj14.jpeg',
    '/images/gj15.jpeg',
    '/images/gj16.jpeg',
    '/images/gj17.jpeg',
    '/images/gj18.jpg',
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nuestra Galería
          </h2>
          <p className="text-lg text-gray-600 font-secondary">
            Conoce nuestras instalaciones y espacios únicos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Granja GMG - Imagen ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-gray-700 group-hover:text-red-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de imagen */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
          >
            <Image
                  src={galleryImages[selectedImage]}
                  alt={`Granja GMG - Imagen ${selectedImage + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Sección de Reglamento
const RulesSection = () => {
  const rules = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      description: "Horario de salida puntual. Se permite una tolerancia de 15 a 20 minutos. Después de ese tiempo, se aplicará un recargo o interrupción del evento."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Limpieza",
      description: "Mantén el lugar limpio."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Decoración",
      description: "No se permite colgar ropa o toallas en las palmas o plantas decorativas."
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Mascotas",
      description: "No se aceptan mascotas."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Supervisión de menores",
      description: "Los menores deben estar bajo supervisión de un adulto."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Alberca: Alimentos y bebidas",
      description: "Prohibido introducir alimentos o bebidas a la alberca."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Alberca: Vidrio",
      description: "No se permiten botellas o envases de vidrio en ninguna zona de la granja."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Alberca: Seguridad",
      description: "No se permite correr o empujar alrededor de la alberca."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Alberca: Basura",
      description: "No lanzar piedras, papel o cualquier tipo de basura."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Áreas comunes: Mobiliario y equipo",
      description: "Cuida el mobiliario, equipo de cocina y asador. Si se detecta daño, puede aplicarse un cargo adicional."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Áreas comunes: Respeto",
      description: "Respeta el mobiliario proporcionado."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient py-2">
            Reglamento de Uso
          </h2>
          <p className="text-lg text-gray-600 font-secondary">
            Normas importantes para el disfrute de todos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                  {rule.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{rule.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/526145468286?text=¡Hola! Me gustaría conocer más detalles sobre el reglamento y políticas de Granja GMG"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar reglamento completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/gmglogo.png"
                  alt="GMG Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Granja GMG</h3>
                <p className="text-gray-100">Tu evento, como lo soñaste</p>
              </div>
        </div>
            <p className="text-gray-300 leading-relaxed">
              El lugar perfecto para tu evento social en Chihuahua. 
              Espacios únicos que harán de tu celebración un momento inolvidable.
            </p>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/526145468286"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+52 614 546 8286</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p>A un costado de Romanzza</p>
                  <p>Chihuahua, Chihuahua</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-red-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1ErT4PGAZq/"     target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
        </a>
       
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/526145468286?text=¡Hola! Quiero cotizar un evento en Granja GMG"
          target="_blank"
          rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar Evento
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Granja GMG. Todos los derechos reservados.
          </p>
          <p className="text-red-400 font-semibold mt-2">
            "Tu evento, como lo soñaste. Granja GMG."
          </p>
        </motion.div>
      </div>
      </footer>
  );
};

// Componente principal
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <AddonsSection />
      <GallerySection />
      <RulesSection />
      <Footer />
    </main>
  );
}
