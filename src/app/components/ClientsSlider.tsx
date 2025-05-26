'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './ClientsSlider.css'; // importando o CSS customizado

const logos = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.jpeg',
  '/clients/client4.png',
  '/clients/Entre-Payments.png',
  '/clients/Global_Payments_logo.png',
  '/clients/logo-istoe.png',
  // Removido: '/clients/pmoyil.jpg',
];

export default function ClientsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const clone = track.innerHTML;
    track.innerHTML += clone; // duplicar logos para efeito infinito
  }, []);

  return (
    <section className="bg-white py-10 overflow-hidden w-full">
      <div className="relative w-full">
        <div className="clients-track" ref={trackRef}>
          {logos.map((logo, index) => (
            <div key={index} className="client-logo">
              <Image
                src={logo}
                alt={`Cliente ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}