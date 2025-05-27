'use client';

import Image from 'next/image';
import { useState } from 'react';

type CertificateKey = 'TE-7001' | 'TE-7002' | 'TE-7003' | 'TE-7004' | 'TE-7005';

interface CertificateData {
  title: string;
  image: string;
  items: string[];
}

export default function CertificateSection() {
  const [activeTab, setActiveTab] = useState<CertificateKey>('TE-7001');

  const certificates: Record<CertificateKey, CertificateData> = {
    'TE-7001': {
      title: 'PROCESSOS DE PAGAMENTO',
      image: '/maquina-teeconsulting.png',
      items: [
        'Integração com os principais meios de pagamento disponíveis no mercado de viagens corporativas.',
        'Avaliar o nível de automação do processo de pagamento.',
        'Transparência no fluxo de pagamento conforme contratado pelo cliente.',
        'Garantia da utilização do meio de pagamento contratado pelo cliente.',
        'Avaliar a recorrência e o motivo de pagamentos fora do processo padrão contratado.'
      ]
    },
    'TE-7002': {
      title: 'ACORDOS COMERCIAIS',
      image: '/maquina-teeconsulting-2.png',
      items: [
        'Garantir a correta utilização dos acordos comerciais firmados entre fornecedores e clientes',
        'Possibilidade de visualização do histórico do processo de compra.',
        'Acesso aos relatórios dos fornecedores contendo informações dos acordos.',
        'Avaliar a recorrência e o motivo da não utilização dos acordos.'
      ]
    },
    'TE-7003': {
      title: 'TARIFAS DE MERCADO',
      image: '/maquina-teeconsulting-3.png',
      items: [
        'Avaliar a quantidade de opções de plataformas utilizadas para garantir as melhores oportunidades de tarifas do mercado corporativo.',
        'Realizar cotações em tempo real garantindo a visibilidade das tarifas oferecidas no mercado corporativo.',
        'Possibilidade de visualização do histórico do processo de compra.'
      ]
    },
    'TE-7004': {
      title: 'AUTOMAÇÃO PROCESSUAL',
      image: '/maquina-teeconsulting-4.png',
      items: [
        'Avaliar o nível de intervenção humana no processo de compra e sua recorrência.',
        'Avaliar o nível de automação para geração de relatórios e informações gerenciais para o cliente.',
        'Avaliar o nível de automação do backoffice.'
      ]
    },
    'TE-7005': {
      title: 'GESTÃO DE CRÉDITOS DE PASSAGENS AÉREAS',
      image: '/maquina-teeconsulting-5.png',
      items: [
        'Existência de um processo de gestão de bilhetes não voados bem definido.',
        'Garantia de atuação como facilitador na comunicação entre cliente e fornecedores.',
        'Relatórios detalhados que auxiliam a gestão e o controle dos créditos de reembolsos.',
        'Relatórios ou meios de pagamento que comprovem que os valores devolvidos estejam corretos.'
      ]
    }
  };

  return (
    <section className="bg-black w-full py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Imagens à esquerda */}
        <div className="relative w-full flex justify-center">
          {/* Imagem principal maior */}
          <div className="relative w-[360px] h-[240px] sm:w-[480px] sm:h-[320px]">
            <Image
              src={certificates[activeTab].image}
              alt={`Certificate ${activeTab}`}
              fill
              className="rounded-md object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-4 lg:mt-0">
            CERTIFICADO {activeTab}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            {certificates[activeTab].title}
          </h3>

          <ul className="space-y-5 text-base md:text-lg leading-relaxed mb-8">
            {certificates[activeTab].items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {(Object.keys(certificates) as CertificateKey[]).map((cert) => (
              <button
                key={cert}
                onClick={() => setActiveTab(cert)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === cert
                    ? 'bg-white text-black'
                    : 'bg-[#EC2224] text-white hover:bg-[#FF4D4F]'
                }`}
              >
                {cert}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}