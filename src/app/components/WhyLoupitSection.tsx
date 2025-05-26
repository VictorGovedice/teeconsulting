'use client';

import {
  FaMoneyBillWave,
  FaGlobeAmericas,
  FaClock,
  FaCogs,
  FaPuzzlePiece,
  FaBolt,
  FaChartLine,
  FaSyncAlt,
  FaLightbulb
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyLoupitSection() {
  const benefits = [
    { icon: <FaMoneyBillWave className="text-2xl text-[#EC2224]" />, text: 'Economia de até 40%' },
    { icon: <FaGlobeAmericas className="text-2xl text-[#EC2224]" />, text: 'Presença global em +60 países' },
    { icon: <FaClock className="text-2xl text-[#EC2224]" />, text: 'Atendimento bilíngue 24h' },
    { icon: <FaCogs className="text-2xl text-[#EC2224]" />, text: 'Sistema multimoeda e multilíngue' },
    { icon: <FaPuzzlePiece className="text-2xl text-[#EC2224]" />, text: 'Ferramenta única e integrada' },
    { icon: <FaBolt className="text-2xl text-[#EC2224]" />, text: 'SLA de 60 minutos para serviços offline' },
  ];

  const integrationFeatures = [
    { 
      icon: <FaChartLine className="text-4xl text-[#EC2224]" />,
      title: "B.I. Integrado",
      description: "Sistema completo para visualização e análise de dados de viagens corporativas."
    },
    { 
      icon: <FaSyncAlt className="text-4xl text-[#EC2224]" />,
      title: "Conciliação Financeira",
      description: "Conciliação entre informações no momento da compra versus meios de pagamento."
    },
    { 
      icon: <FaLightbulb className="text-4xl text-[#EC2224]" />,
      title: "Estudos e KPIs",
      description: "Análise de dados para tomada de decisões estratégicas e controle de gastos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Nova seção de Gestão Inteligente da Informação */}
      <section className="w-full bg-white py-24 px-6 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              <span className="text-[#EC2224]">Gestão Inteligente </span>
              da Informação
            </h2>
            <div className="w-24 h-1 bg-[#EC2224] mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {integrationFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}