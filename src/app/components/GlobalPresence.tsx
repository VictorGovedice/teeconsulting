'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-white py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left side - Text content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Quem Somos
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold text-[#EC2224] mb-6">23 anos de mercado</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Atuamos desde 2002 com foco exclusivo em processos viagens e eventos corporativos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-[#EC2224] mb-4">+180 Empresas clientes</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Mais de 180 empresas atendidas com projetos de consultoria e auditoria.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-[#EC2224] mb-4">+200 Milhões economizados</h4>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nossos projetos proporcionaram economias milionárias para nossos clientes.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-3xl font-semibold text-[#EC2224] mb-6">Equipe especializada</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Consultores especializados com mais de 15 de experiência no mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2">
          <Image 
            src="/imagem-lateral-teeconsulting.png"
            alt="Equipe da TEE Consulting"
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}