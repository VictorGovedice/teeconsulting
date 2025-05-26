'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Informações */}
        <div className="space-y-8">
          <div className="text-lg space-y-6 text-center lg:text-left leading-relaxed">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p><strong className="font-semibold">Endereço:</strong> Av. Brig. Faria Lima, 1485 - 2º andar - Pinheiros, São Paulo - SP, 01452-002</p>
            </div>

            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p><strong className="font-semibold">Telefone:</strong> (11) 2050-0244</p>
            </div>

            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>
                <strong className="font-semibold">Email:</strong> 
                <a href="mailto:atendimento@loupit.com" className="text-blue-400 hover:underline ml-1">
                  atendimento@loupit.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[320px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.430270850338!2d-46.648055!3d-23.588219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c4b3d9c3df%3A0xf7f4b2f7f8e4c73!2sAv.%20Brigadeiro%20Faria%20Lima%2C%201485%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-002!5e0!3m2!1spt-BR!2sbr!4v1716400468396!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} T&E Consulting. Todos os direitos reservados.
      </div>
    </footer>
  );
}