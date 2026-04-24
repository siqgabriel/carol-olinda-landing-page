'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  const [bgImage, setBgImage] = useState('/assets/imgs/header/foto-carol.webp');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBgImage('/assets/imgs/header/foto-carol-mobile.webp');
      } else {
        setBgImage('/assets/imgs/header/foto-carol.webp');
      }
    };

    handleResize(); // roda ao carregar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, [bgImage]);
  return (
    <div className="header crev-header bg-img">
      <div className="container ontop">
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <div className="caption">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="text-u">Líderes</h1>
                  <h1 className="text-u">para impactar</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                  <div className="circle-button md-hide">
                    <a href="https://wa.me//5511980377866?text=Ol%C3%A1%20Carol!%20Vim%20pelo%20site,%20vamos%20marcar%20um%20bate-papo?" className="vid" target='_blank'>
                      <div className="rotate-circle fz-30 text-u">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            ></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              Entre em contato - Entre em contato -
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className="icon icon-header">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row text-left align-items-center">
                <div className="col-lg-3 order-md-2">
                  <p style={{ fontSize: '12px' }}>
                    Desenvolva líderes, fortaleça cultura organizacional e acelere aprendizagem estratégica com métodos científicos e experiência prática.
                  </p>
                </div>
                <div className="col-lg-9 order-md-1 md-mb30">
                  <h1 className="text-u">equipes fortes</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="full-img bg-img"
              data-background={bgImage}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
