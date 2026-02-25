import React, { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";


export default function CustomScrollbar({ children }) {
  useEffect(() => {
    const customScroll = () => {
      const windowWidth = window.innerWidth;
      const elements = document.querySelectorAll(".animated-section, .single-page-content");

      elements.forEach(element => {
        if (windowWidth > 1024) {
          new PerfectScrollbar(element);
        } else {
          element.perfectScrollbar("destroy");
        }
      });
    };

    // Chama a função ao montar o componente e quando a largura da janela muda
    customScroll();
    window.addEventListener("resize", customScroll);

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", customScroll);
    };
  }, []);

  return (
    <PerfectScrollbar>
      {children}
    </PerfectScrollbar>
  );
}
