'use client';

import Image from 'next/image';

export default function BenefitsResultsSection() {
  return (
    <section className="w-full py-20 px-6 text-black relative">
      {/* Imagem de fundo cobrindo toda a largura */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/beneficios-resultado-teeconsulting.jpg"
          alt="Benefícios e Resultados"
          fill
          className="object-cover w-full"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Benefícios e Resultados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 - Redução de Custos */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-[#EC2224] mb-4">35%</div>
            <h3 className="text-xl font-bold mb-2">Redução de Custos</h3>
            <p className="text-gray-600">Economia média após implementação.</p>
          </div>

          {/* Item 2 - Satisfação */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-[#EC2224] mb-4">90%</div>
            <h3 className="text-xl font-bold mb-2">Satisfação</h3>
            <p className="text-gray-600">Índice de aprovação entre clientes.</p>
          </div>

          {/* Item 3 - Ganho em Eficiência */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-[#EC2224] mb-4">45%</div>
            <h3 className="text-xl font-bold mb-2">Ganho em Eficiência</h3>
            <p className="text-gray-600">Otimização de processos corporativos.</p>
          </div>

          {/* Item 4 - Tempo Economizado */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold text-[#EC2224] mb-4">20%</div>
            <h3 className="text-xl font-bold mb-2">Tempo Economizado</h3>
            <p className="text-gray-600">Redução em horas de trabalho operacional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}