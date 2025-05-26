import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const FloatingButtons = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511983669028`, '_blank');
  };

  useEffect(() => {
    const checkScroll = () => {
      // Mostrar o botão quando o scroll for maior que 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Adiciona o listener quando o componente monta
    window.addEventListener('scroll', checkScroll);
    
    // Remove o listener quando o componente desmonta
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <ButtonsContainer>
      <WhatsAppButton onClick={openWhatsApp}>
        <FaWhatsapp size={24} />
      </WhatsAppButton>
      
      {showScrollButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      )}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
`;

const BaseButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ScrollToTopButton = styled(BaseButton)`
  background-color: #EC2224;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background-color: #FF595B;
  }
`;

const WhatsAppButton = styled(BaseButton)`
  background-color: #25D366;

  &:hover {
    background-color: #128C7E;
  }
`;

export default FloatingButtons;