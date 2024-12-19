import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { Check, BarChart3, Users, Bot, LayoutGrid, FileText, CheckCircle2, Twitter, MessageSquare, Mail, Database, Share2, ChevronLeft, ChevronRight, Target, Cog, BarChart, PieChart, ArrowUpRight, Search, ArrowRight } from 'lucide-react'
import MobileMenu from '@/components/mobile-menu'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const cases = [
    {
      title: "Clínica Dental Sonrisas",
      description: "Aumentamos las consultas en un 150% en 3 meses mediante campañas de Facebook Ads y Google Ads optimizadas.",
      result: "150% más consultas"
    },
    {
      title: "Centro de Fisioterapia Movimiento",
      description: "Implementamos un sistema de seguimiento automatizado que redujo las cancelaciones de citas en un 40%.",
      result: "40% menos cancelaciones"
    },
    {
      title: "Consultorio Psicológico Mente Sana",
      description: "Creamos una estrategia de contenido en redes sociales que aumentó el engagement en un 200% y las consultas en un 75%.",
      result: "75% más consultas"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white ${inter.className}`}>
      <Head>
        <title>Agencia de Marketing para Profesionales de la Salud</title>
      </Head>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold">IVADI</span>
              </div>
              <div className="hidden md:flex ml-10">
                <div className="flex space-x-4">
                  {["Blog", "Casos de Estudio", "Cómo Funciona", "Servicios"].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-white hover:text-pink-200 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-white text-pink-600 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Contacto
              </Button>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="text-sm font-medium text-pink-600 mb-4">
                SOLUCIONES DE MARKETING Y AUTOMATIZACIÓN IMPULSADAS POR IA
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
                Únete al Futuro del Marketing Médico
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformando la manera en que los profesionales de la salud atraen y retienen pacientes con soluciones inteligentes y automatizadas.
              </p>
              <Button className="bg-pink-600 text-white hover:bg-pink-700 text-base font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Leer informe
              </Button>
            </div>
            <div className="">
              <div className="relative lg:h-[500px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3479.jpg-SivGZbj9xCTyNsIJ7G19NMhxxyYnjb.jpeg"
                  alt="Profesional de la salud sonriente en su consultorio"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Case Studies Carousel */}
      <section id="casos-de-estudio" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4">
              CASOS DE ÉXITO
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Resultados que hablan por sí mismos
            </h2>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{cases[currentCase].title}</h3>
              <p className="text-gray-600 mb-4">{cases[currentCase].description}</p>
              <div className="text-pink-600 font-semibold text-lg">{cases[currentCase].result}</div>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={prevCase}
                className="bg-pink-100 text-pink-600 hover:bg-pink-200 p-2 rounded-full transition duration-300 ease-in-out"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-gray-500">
                {currentCase + 1} / {cases.length}
              </div>
              <button
                onClick={nextCase}
                className="bg-pink-100 text-pink-600 hover:bg-pink-200 p-2 rounded-full transition duration-300 ease-in-out"
                aria-label="Siguiente caso"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Improved */}
      <section id="cómo-funciona" className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Proceso
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Así es como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque sistemático garantiza resultados excepcionales para tu práctica médica
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-pink-200"></div>

            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Análisis y Estrategia",
                description: "Evaluamos tu presencia digital actual y desarrollamos una estrategia personalizada para alcanzar tus objetivos específicos.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Implementación",
                description: "Ponemos en marcha campañas optimizadas, automatizamos procesos y creamos contenido atractivo para tu audiencia.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Monitoreo y Optimización",
                description: "Seguimos de cerca el rendimiento de las campañas y realizamos ajustes continuos para maximizar los resultados.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Análisis de Resultados",
                description: "Proporcionamos informes detallados y transparentes sobre el desempeño y las conversiones generadas.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <ArrowUpRight className="w-8 h-8" />,
                title: "Escalamiento",
                description: "Basándonos en los datos y el éxito obtenido, escalamos las estrategias más efectivas para un crecimiento continuo.",
                color: "bg-pink-100 text-pink-600"
              }
            ].map((step, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`absolute left-1/2 transform -translate-x-1/2 ${step.color} rounded-full p-2 z-10`}>
                  {step.icon}
                </div>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Soluciones Integrales para tu Práctica Médica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potencia tu presencia digital y atrae más pacientes con nuestros servicios especializados para profesionales de la salud.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: <BarChart3 className="h-12 w-12" />,
                title: "Campañas de FB y Google Ads",
                description: "Estrategias de publicidad digital optimizadas para atraer pacientes potenciales y aumentar la visibilidad de tu práctica médica.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Bot className="h-12 w-12" />,
                title: "Asistente Virtual con IA",
                description: "Implementación de chatbots inteligentes para atención al cliente 24/7, programación de citas y respuesta a preguntas frecuentes.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <MessageSquare className="h-12 w-12" />,
                title: "Seguimiento Automatizado",
                description: "Sistemas automatizados para mantener el contacto con pacientes, recordatorios de citas y seguimiento post-consulta por Email y WhatsApp.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <Search className="h-12 w-12" />,
                title: "Optimización SEO",
                description: "Mejoramos el posicionamiento de tu sitio web en los motores de búsqueda para aumentar la visibilidad y atraer más pacientes potenciales.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: "CRM Personalizado",
                description: "Seguimiento detallado de leads y pacientes en un CRM personalizado para profesionales de la salud, integrado con ClickUp.",
                color: "bg-red-100 text-red-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-8">
                  <div className={`${service.color} inline-block p-3 rounded-full mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <a href="#" className="text-pink-600 font-semibold flex items-center hover:text-pink-700 transition-colors duration-300">
                    Saber más <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4">
              COMPARACIÓN
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Cómo nos comparamos?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-50">
                  <th className="py-4 px-6 font-semibold text-gray-900"></th>
                  <th className="py-4 px-6 font-semibold text-gray-900">INTERNO</th>
                  <th className="py-4 px-6 font-semibold text-gray-900">OTRAS AGENCIAS</th>
                  <th className="py-4 px-6 font-semibold text-pink-600">IVADI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Modelo de pago", inHouse: "Salario fijo", otherAgencies: "Tarifa mensual", IVADI: "% de conversiones" },
                  { metric: "Tiempo de contratación", inHouse: "Semanas/meses", otherAgencies: "Semanas/meses", IVADI: "¡Pocas horas!" },
                  { metric: "Nivel de habilidad", inHouse: "Bueno (esperemos)", otherAgencies: "Suerte variable", IVADI: "Expertos en marketing" },
                  { metric: "Primera entrega", inHouse: "Varias semanas", otherAgencies: "Varias semanas", IVADI: "¡2-3 días!" },
                  { metric: "Terminación", inHouse: "Indemnización + dolor de cabeza", otherAgencies: "Significativa", IVADI: "Sin compromiso" },
                ].map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-pink-50'} transition-colors duration-300 hover:bg-pink-100`}>
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.metric}</td>
                    <td className="py-4 px-6 text-gray-600">{row.inHouse}</td>
                    <td className="py-4 px-6 text-gray-600">{row.otherAgencies}</td>
                    <td className="py-4 px-6 font-semibold text-pink-600">{row.IVADI}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4">
              NUESTRO MODELO
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paga solo por conversiones reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro modelo de comisión se basa en resultados medibles. Solo pagas cuando generamos conversiones reales para tu negocio.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Comisión por Rendimiento</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-600 mr-3" />
                <span>Comisión basada en conversiones reales</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-600 mr-3" />
                <span>Sin costos iniciales o tarifas mensuales</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-600 mr-3" />
                <span>Solo pagas cuando generamos resultados</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-600 mr-3" />
                <span>Transparencia total en métricas y conversiones</span>
              </li>
            </ul>
            <div className="text-center">
              <Button className="bg-pink-600 text-white hover:bg-pink-700 text-lg font-semibold px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4">
              PREGUNTAS FRECUENTES
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">FAQ</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Por qué esto en lugar de contratar un COO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Contratar un COO calificado toma meses y cuesta mucho (promedio $121,000/año). También está comprometido con beneficios y liquidación, y no hay garantía de que entreguen lo que desea. Los modelos de comisión como el nuestro son simplemente cuantitativa y cualitativamente mejores para la gran mayoría de las empresas menores a $3M/año: paga menos, obtiene resultados más rápidos y puede pausar o cancelar su arreglo en cualquier momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Qué tan rentable es esto, realmente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Cuando tiene en cuenta la nómina, beneficios, liquidación y el costo de oportunidad de contratar, nuestro servicio es ~30% del precio de contratar internamente, y ~70% del precio de contratar una agencia. También obtiene acceso a expertos en marketing digital que han ayudado a escalar varias empresas de 8 cifras, así como una garantía de satisfacción del 100% + la capacidad de pausar o cancelar en cualquier momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cómo funciona el pago?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Nuestro modelo se basa en comisiones por conversiones reales. Solo pagas cuando generamos resultados medibles para tu negocio. No hay costos iniciales ni tarifas mensuales fijas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Qué significa '100% satisfecho'?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Si no está completamente satisfecho con nuestro trabajo, continuaremos revisando y ajustando hasta que lo esté. Su satisfacción está garantizada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cuál es su política de reembolso?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Dado que solo pagas por resultados, no hay necesidad de reembolsos. Si no estás satisfecho con nuestro desempeño, simplemente puedes terminar la colaboración sin ningún costo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cómo nos comunicamos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Utilizamos Slack para actualizaciones diarias y tenemos llamadas semanales opcionales de 45 minutos para discusiones más profundas y revisión de métricas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cómo funciona el modelo de comisión?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Nuestro modelo de comisión se basa en las conversiones reales que generamos para tu negocio. Solo pagas un porcentaje acordado de cada conversión exitosa, lo que significa que nuestro éxito está directamente ligado al tuyo. No hay costos iniciales ni tarifas mensuales fijas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impulsa tu negocio sin riesgo<br />pagando solo por resultados
          </h2>
          <p className="text-pink-100 text-lg mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer<br />
            con nuestro modelo basado en conversiones.
          </p>
          <Button className="bg-white hover:bg-pink-100 text-pink-600 font-semibold px-8 py-4 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Reservar llamada de introducción →
          </Button>
          <p className="text-pink-200 text-sm mt-4">
            Sin Costo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Sobre Nosotros</h3>
              <p className="text-sm">IVADI es una agencia de marketing digital especializada en profesionales de la salud. Nuestro enfoque basado en resultados garantiza el crecimiento de tu práctica.</p>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Inicio</Link></li>
                <li><Link href="#casos-de-estudio" className="hover:text-pink-400 transition duration-300">Casos de Estudio</Link></li>
                <li><Link href="#cómo-funciona" className="hover:text-pink-400 transition duration-300">Cómo Funciona</Link></li>
                <li><Link href="#servicios" className="hover:text-pink-400 transition duration-300">Servicios</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Contacto</h3>
              <p>Email: info@ivadi.com</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-pink-400">IVADI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-pink-400 hover:text-pink-300 transition duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()}. Todos los derechos reservados por IVADI
          </div>
        </div>
      </footer>
    </div>
  )
}

