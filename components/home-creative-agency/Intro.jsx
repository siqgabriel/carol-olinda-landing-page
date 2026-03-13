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
            <div className="cont">
              <h6 className="sub-title main-color mb-15">Sobre mim</h6>
              <h2 className="mb-15 h2-clean">Ciência, experiência prática e inovação para transformar a forma como líderes e empresas aprendem.</h2>
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
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/assets/imgs/header/foto-carol2.webp" alt="foto Carol" style={{ width: '100% !important', paddingLeft: '100px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
