'use client';

export default function CertificationBenefits() {
  return (
    <section className="bg-white w-full py-12 px-6 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        {/* Container da imagem - Canto superior esquerdo, menor */}
        <div className="md:w-1/3 flex justify-start items-start mb-8 md:mb-0 md:mr-8">
          <img
            src="/certificado-teeconsulting-travel.png"
            alt="Certificado Teeconsulting Travel"
            className="w-32 h-auto md:w-40 rounded-lg shadow-md" /* Tamanho menor para a imagem */
          />
        </div>

        {/* Conteúdo à direita - Título e benefícios */}
        <div className="md:w-2/3 flex flex-col">
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
                number: 5, // Adicionei o número 5, se precisar
                title: 'Credibilidade',
                description: 'Aumenta a confiança no serviço prestado.',
              },
              {
                number: 6, // Adicionei o número 6, se precisar
                title: 'Eficiência',
                description: 'Processos otimizados e mais produtividade.',
              },
              {
                number: 7, // Adicionei o número 7, se precisar
                title: 'Satisfação do Cliente',
                description: 'Qualidade percebida pelos clientes finais.',
              },
              {
                number: 8, // Adicionei o número 8, se precisar
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