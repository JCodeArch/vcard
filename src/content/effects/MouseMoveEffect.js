import React, { useEffect } from 'react';

const MouseMoveEffect = () => {
  useEffect(() => {
    const movementStrength = 23;
    const height = movementStrength / document.documentElement.scrollHeight;
    const width = movementStrength / document.documentElement.scrollWidth;

    const handleMouseMove = (e) => {
      const pageX = e.pageX - (window.innerWidth / 2);
      const pageY = e.pageY - (window.innerHeight / 2);
      const newvalueX = width * pageX * -1;
      const newvalueY = height * pageY * -1;
      const elements = document.querySelectorAll('.lm-animated-bg');

      elements.forEach(element => {
        element.classList.add('transition');
        element.style.backgroundPosition = `calc(50% + ${newvalueX}px) calc(50% + ${newvalueY}px)`;

        setTimeout(() => {
          element.classList.remove('transition');
        }, 300);
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // Não renderiza nada, apenas adiciona o efeito no mount e remove no unmount
};

export default MouseMoveEffect;
