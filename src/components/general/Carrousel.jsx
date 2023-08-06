import React from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Carrousel = () => {

  SwiperCore.use([Autoplay])

  const videos = [
    'https://www.youtube.com/embed/D7oshMenr4c',
    'https://www.youtube.com/embed/WmA_W4BrxVY',
    'https://www.youtube.com/embed/1PUBFkFu7NM',
  ]

  return (
    <div className='w-full xs:pt-5 xs:h-[300px] md:h-[600px] 2xl:h-[800px] flex flex-row items-center justify-center bg-main-white'>
        <div className='w-full h-full'>
          <div className='xs:m-auto w-full h-full flex flex-row items-center justify-center' data-aos="fade-up" data-aos-duration="2000">
            
              <Swiper 
                className='xs:w-[80%] xl:w-[800px] xs:h-[250px] md:h-[500px]'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                data-aos="fade-left"
                autoplay={{ delay: 2000 }}
                loop
              >
                  {
                      videos.map((v, i) => (
                          <SwiperSlide
                              key={i}
                          >
                              <iframe 
                                width={window.innerWidth < 450 ? 300: 800} 
                                height={window.innerWidth < 450 ? 200 : 450} 
                                src={v} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                              </iframe>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Carrousel