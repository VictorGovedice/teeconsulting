'use client';

import Image from 'next/image';

export default function HotelSection() {
  return (
    <section className="bg-[#001E42] w-full py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Imagens à esquerda */}
        <div className="relative w-full flex justify-center">
          {/* Imagem principal maior */}
          <div className="relative w-[360px] h-[240px] sm:w-[480px] sm:h-[320px]">
            <Image
              src="/imagem-hotel-01.png"
              alt="Hotel 1"
              fill
              className="rounded-md object-cover shadow-lg"
            />
          </div>

          {/* Imagem sobreposta maior e mais distante */}
          <div className="absolute bottom-[-60px] left-[220px] w-[260px] h-[180px] border-4 border-white rounded-md shadow-xl hidden sm:block">
            <Image
              src="/imagem-hotel-02.png"
              alt="Hotel 2"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="relative">
          {/* Logo do lobo rosa no topo direito */}
          <div className="absolute top-[-60px] right-0">
            <Image
              src="/logo-pink-loupit.png"
              alt="Logo Loupit"
              width={60}
              height={60}
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-4 lg:mt-0">
            HOSPEDAGEM
          </h2>

          <ul className="space-y-5 text-base md:text-lg leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Comparativo de acordo corporativo com tarifa agência em
                <br />mais de 17 fornecedores regionais e globais
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Mais de 1 milhão de hotéis online com confirmação imediata
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Pesquisa de hotéis por mapa, categoria ou preço
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
