'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './ClientsSlider.css'; // importando o CSS customizado

const logos = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.png',
  '/clients/client4.png',
  '/clients/client5.png',
  '/clients/client6.png',
  '/clients/client7.png',
  '/clients/client8.png',
  '/clients/client9.png',
  '/clients/client10.png',
  '/clients/client11.png',
  '/clients/client12.png',
  '/clients/client13.png',
  '/clients/client14.png',
  '/clients/client15.png',
  '/clients/client16.png',
  '/clients/client17.png',
  '/clients/client18.png',
  '/clients/client19.png',
  '/clients/client20.png',
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
              <div className="logo-container">
                <Image
                  src={logo}
                  alt={`Cliente ${index + 1}`}
                  width={160}  // Aumentei um pouco o tamanho base
                  height={80}  // Mantendo proporção 2:1
                  className="logo-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}