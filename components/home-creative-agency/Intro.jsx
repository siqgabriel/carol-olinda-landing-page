'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont1">
              <h6 className="sub-title main-color mb-15">Sobre mim</h6>
              <h2 className="mb-15 h2-clean">Ciência, prática e experiência para desenvolver líderes de verdade.</h2>
              <p>
                Sou consultora em Educação Corporativa e especialista em Desenvolvimento Humano e Organizacional, com mais de 15 anos de experiência ajudando empresas a desenvolver líderes e fortalecer culturas de aprendizagem.
                <br />
                <br />
                Combino psicologia organizacional, neurociência e design comportamental para criar programas de liderança, trilhas de aprendizagem e estratégias educacionais que geram impacto real nas organizações.
              </p>
              <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title">+10.000 horas</h5>
                    <p className=' mb-15'>em sala de aula e programas de desenvolvimento</p>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title">+5.000 profissionais</h5>
                    <p className=' mb-15'>impactados em treinamentos e jornadas de aprendizagem</p>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <a
                    href="https://wa.me/5511980377866?text=Ol%C3%A1%20Carol!%20Vim%20pelo%20site,%20vamos%20marcar%20um%20bate-papo?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.05 0C5.44 0 .08 5.36.08 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63a11.93 11.93 0 0 0 5.83 1.49h.01c6.61 0 11.97-5.36 11.97-11.97 0-3.19-1.24-6.19-3.51-8.41zM12.06 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.69.97.98-3.6-.23-.37a9.77 9.77 0 0 1-1.5-5.25c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.88 6.93c0 5.41-4.4 9.81-9.82 9.81zm5.38-7.35c-.29-.14-1.7-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.23-.45-2.35-1.43-.87-.78-1.46-1.75-1.63-2.04-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 1-.99 2.44.01 1.43 1.02 2.82 1.16 3.02.14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
                      </svg>
                    </span>

                    <span>Entre em contato agora</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/assets/imgs/header/foto-carol2.webp" alt="foto Carol" className='foto-carol' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
