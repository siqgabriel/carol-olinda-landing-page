'use client';
import React from 'react';
import data from '@/data/portfolios/works1';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Portfolio() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: '.work-crev .swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.work-crev .swiper-button-next',
      prevEl: '.work-crev .swiper-button-prev',
      addIcons: false,
    },
  };
  return (
    <section className="work-crev sub-bg">
      <div className="container section-padding position-re">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text" style={{ fontFamily: 'Black Mango' }}>
                Meus <span className="fw-200">SERVIÇOS.</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Desenvolvendo líderes e culturas que impulsionam resultados.</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="work-swiper out-right">
          <Swiper {...swiperOptions}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item d-flex align-items-center">
                  <div className="cont" >
                    <h2>
                      {item.title}
                    </h2>
                    <p>
                      {item.text}
                    </p>
                    <a
                      href="/project-details"
                      className="butn-crev d-flex align-items-center mt-30"
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">Entre em contato</span>
                    </a>
                  </div>
                  <div className="img">
                    <img src={item.img} alt="" className="radius-15" style={{ maxWidth: '1500px' }} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
