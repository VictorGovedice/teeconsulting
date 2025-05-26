'use client';

export default function CertificationBenefits() {
  return (
    <section className="bg-white w-full py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Título centralizado */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">
          BENEFÍCIOS DA <span className="text-[#EC2224]">CERTIFICAÇÃO</span>
        </h2>

        {/* Container principal com duas colunas */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Coluna esquerda - Lista de benefícios */}
          <div className="space-y-6">
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
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <div className="bg-[#EC2224] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna direita - Continuação da lista */}
          <div className="space-y-6">
            {[
              {
                number: 6,
                title: 'Credibilidade',
                description: 'Aumenta a confiança no serviço prestado.',
              },
              {
                number: 7,
                title: 'Eficiência',
                description: 'Processos otimizados e mais produtividade.',
              },
              {
                number: 8,
                title: 'Satisfação do Cliente',
                description: 'Qualidade percebida pelos clientes finais.',
              },
              {
                number: 9,
                title: 'Conformidade',
                description: 'Atendimento a regras e normas, evitando multas.',
              },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition">
                <div className="bg-[#EC2224] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
