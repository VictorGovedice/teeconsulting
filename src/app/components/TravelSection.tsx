// src/app/components/TravelSection.tsx

'use client';

import Image from 'next/image';

export default function CertificationBenefits() {
  return (
    <section className="bg-white w-full py-12 px-6 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        {/* Container da Imagem - Mantém ao lado em todas as telas, mas menor no mobile */}
        <div className="flex-shrink-0 mr-4 mb-4 md:mb-0"> {/* flex-shrink-0 para evitar que a imagem encolha muito */}
          <Image
            src="/certificado-teeconsulting-travel.png"
            alt="Certificado Teeconsulting Travel"
            width={100} // Largura para mobile
            height={100} // Altura para mobile
            className="w-24 h-auto md:w-40 rounded-lg shadow-md" /* w-24 para mobile, md:w-40 para desktop */
          />
        </div>

        {/* Conteúdo à direita - Título e benefícios */}
        <div className="flex-1 flex flex-col"> {/* flex-1 para o texto ocupar o restante do espaço */}
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-left">
            BENEFÍCIOS DA <span className="text-[#EC2224]">CERTIFICAÇÃO</span>
          </h2>

          {/* Container dos benefícios com menos colunas para os detalhes */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
            {[
              {
                number: 1,
                title: 'Competitividade',
                description: 'Consolidação e destaque frente à concorrência.',
              },
              {
                number: 2,
                title: 'Imagem Fortalecida',
                description: 'Empresa mais robusta e respeitada no mercado.',
              },
              {
                number: 3,
                title: 'Melhoria Contínua',
                description: 'Identificação de erros e oportunidades de aprimoramento.',
              },
              {
                number: 4,
                title: 'Novos Negócios',
                description: 'Acesso facilitado a clientes que exigem certificação.',
              },
              {
                number: 5,
                title: 'Credibilidade',
                description: 'Aumenta a confiança no serviço prestado.',
              },
              {
                number: 6,
                title: 'Eficiência',
                description: 'Processos otimizados e mais produtividade.',
              },
              {
                number: 7,
                title: 'Satisfação do Cliente',
                description: 'Qualidade percebida pelos clientes finais.',
              },
              {
                number: 8,
                title: 'Conformidade',
                description: 'Atendimento a regras e normas, evitando multas.',
              },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="bg-[#EC2224] text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}