'use client';

import Image from 'next/image';

export default function TravelSection() {
  return (
    <section className="bg-white w-full py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Texto à esquerda */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            SÓ A <span className="text-[#F20077]">LOUPIT</span> FAZ POR VOCÊ!
            <br />
            VIAGENS
          </h2>

          <ul className="space-y-5 text-base md:text-lg text-gray-800">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>
                Disponibilidade de utilização dos melhores acordos existentes no mercado, acordo comercial do cliente, acordo comercial da Loupit, marketplace global conectado às melhores tarifas do mundo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Remarcação simplificada na mesma solicitação</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Check-in automático</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Notificações e alertas sobre alterações de voos</span>
            </li>
          </ul>
        </div>

        {/* Imagens à direita */}
        <div className="relative w-full flex justify-center items-center">
          {/* Imagem horizontal (fundo) */}
          <div className="relative w-[400px] h-[280px] sm:w-[500px] sm:h-[340px] rounded-md overflow-hidden shadow-xl z-10">
            <Image
              src="/imagem-horizontal-loupit.png"
              alt="Imagem Viagem Horizontal"
              fill
              className="object-cover"
            />
          </div>

          {/* Imagem vertical (sobreposta no canto inferior direito) */}
          <div className="absolute right-[-30px] bottom-[-30px] w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] z-20 shadow-2xl rounded-md overflow-hidden">
            <Image
              src="/imagem-vertical-loupit.png"
              alt="Imagem Viagem Vertical"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
