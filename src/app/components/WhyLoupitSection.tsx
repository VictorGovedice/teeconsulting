'use client';

import {
  FaMoneyBillWave,
  FaGlobeAmericas,
  FaClock,
  FaCogs,
  FaPuzzlePiece,
  FaBolt,
} from 'react-icons/fa';

export default function WhyLoupitSection() {
  const benefits = [
    { icon: <FaMoneyBillWave className="text-2xl text-[#F20077]" />, text: 'Economia de até 40%' },
    { icon: <FaGlobeAmericas className="text-2xl text-[#F20077]" />, text: 'Presença global em +60 países' },
    { icon: <FaClock className="text-2xl text-[#F20077]" />, text: 'Atendimento bilíngue 24h' },
    { icon: <FaCogs className="text-2xl text-[#F20077]" />, text: 'Sistema multimoeda e multilíngue' },
    { icon: <FaPuzzlePiece className="text-2xl text-[#F20077]" />, text: 'Ferramenta única e integrada' },
    { icon: <FaBolt className="text-2xl text-[#F20077]" />, text: 'SLA de 60 minutos para serviços offline' },
  ];

  return (
    <section className="w-full bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12">
          <span className="text-[#F20077]">LOUPIT </span>
          SUA MELHOR ESCOLHA DE VIAGEM CORPORATIVA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-center justify-start gap-3 text-lg">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
