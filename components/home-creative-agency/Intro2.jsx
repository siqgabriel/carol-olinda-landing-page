'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord sub-bg o-hidden ">
      <div className="container ontop chose">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/header/foto-carol3.webp" alt="Carol" className='chose-carol' />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">POR QUE ESCOLHER A CAROL?</h6>
                <h3 style={{ fontFamily: 'Black Mango' }}>
                  Experiência, ciência e impacto real nas organizações.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6 style={{ fontSize: '14px !important' }} >Como a Carol transforma aprendizagem em resultado real?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Ela conecta ciência, design comportamental e estratégia organizacional para criar programas que realmente mudam comportamentos e geram impacto no negócio.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6 style={{ fontSize: '14px !important' }}>A metodologia funciona para qualquer empresa?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Sim. As soluções são desenhadas de forma personalizada para a realidade, cultura e objetivos de cada organização.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6 style={{ fontSize: '14px !important' }}>O que diferencia o trabalho da Carol?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      A combinação de experiência prática com grandes empresas, base científica e metodologias inovadoras de aprendizagem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Intro2;
