'use client';

import {
  FaCheckCircle,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaShieldAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CorporateAuditSection() {
  const auditFeatures = [
    { 
      icon: <FaClipboardCheck className="text-4xl text-[#EC2224]" />,
      title: "Fornecedores e Sistemas",
      description: "Verificação de conformidade técnica."
    },
    { 
      icon: <FaMoneyBillWave className="text-4xl text-[#EC2224]" />,
      title: "Eventos Corporativos",
      description: "Controle de investimentos em ações externas."
    },
    { 
      icon: <FaCheckCircle className="text-4xl text-[#EC2224]" />,
      title: "Processos de Despesas",
      description: "Análise de fluxos financeiros."
    },
    { 
      icon: <FaShieldAlt className="text-4xl text-[#EC2224]" />,
      title: "Meios de Pagamento",
      description: "Validação de segurança transacional."
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
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
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
              <span className="text-black">AUDITORIA </span>
              <span className="text-[#EC2224]">CORPORATIVA</span>
            </h2>
            <div className="w-24 h-1 bg-[#EC2224] mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {auditFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="p-8 rounded-lg bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-all"
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