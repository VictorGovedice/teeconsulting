'use client';

import { FaSearch, FaChartLine, FaOutdent, FaFileAlt, FaClipboardList, FaBoxOpen, FaHandshake, FaHeadset, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

export default function ConsultancySection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat bg-fixed text-white py-20 px-6"
      style={{ backgroundImage: "url('/background-expense-teeconsulting.png')" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFF' }}>
            CONSULTORIA ESPECIALIZADA
          </h2>
          <div className="w-20 h-1 mx-auto bg-white mb-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Item 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaSearch className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Diagnósticos Processuais</h3>
                <p className="text-gray-200">Identificação precisa de gargalos operacionais.</p>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaChartLine className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Atualização de Mercado</h3>
                <p className="text-gray-200">Insights sobre tendências setoriais.</p>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaOutdent className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Serviços de Outsourcing</h3>
                <p className="text-gray-200">• Benchmarking</p>
                <p className="text-gray-200 ml-4">Comparativo com melhores práticas do mercado.</p>
              </div>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaFileAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Elaboração de Bids</h3>
                <p className="text-gray-200">• Prozessos de Despesas</p>
                <p className="text-gray-200 ml-4">Análise de fluxos financeiros.</p>
              </div>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaClipboardList className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Criação de Políticas</h3>
                <p className="text-gray-200">Desenvolvimento de procedimentos padronizados.</p>
              </div>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaBoxOpen className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implantação de Produtos</h3>
                <p className="text-gray-200">Integração eficiente de novas soluções.</p>
              </div>
            </div>
          </div>

          {/* Service Item 7 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaHandshake className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Negociação</h3>
                <p className="text-gray-200">Otimização de contratos com fornecedores.</p>
              </div>
            </div>
          </div>

          {/* Service Item 8 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaHeadset className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte à Gestão</h3>
                <p className="text-gray-200">Acompanhamento contínuo de resultados.</p>
              </div>
            </div>
          </div>

          {/* Service Item 9 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Auditoria Corporativa</h3>
                <p className="text-gray-200">• Fornecedores e Sistemas</p>
                <p className="text-gray-200 ml-4">Verificação de conformidade técnica.</p>
              </div>
            </div>
          </div>

          {/* Service Item 10 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: '#EC2224' }}>
                <FaCalendarAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eventos Corporativos</h3>
                <p className="text-gray-200">Controle de investimentos em ações externas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}