import React from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

const Carrousel = () => {

  SwiperCore.use([Autoplay])

  const video = [
    {
      url: 'https://www.youtube.com/embed/D7oshMenr4c'
    },
    {
      url: 'https://www.youtube.com/embed/WmA_W4BrxVY'
    },
    {
      url: 'https://www.youtube.com/embed/1PUBFkFu7NM'
    }
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
                      video.map((v, i) => (
                          <SwiperSlide
                              key={i}
                          >
                              <Link href={v.url} target='_blank' passHref >
                                <div className={`relative xs:w-full xs:h-[85%] 2xl:w-[800px] 2xl:h-[450px]`}>
                                  <img className='w-full h-full object-cover' src={`/video0${i+1}.png`} />
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='absolute xs:top-[40%] xs:left-[45%] md:top-[40%] md:left-[45%] xl:top-[35%] xl:left-[40%]' 
                                    height={window?.innerWidth < 450 ? "50px" : window?.innerWidth < 1100 ? "80px" : "150px" }
                                    width={window?.innerWidth < 450 ? "50px" :  window?.innerWidth < 1100 ? "80px" : "150px" } 
                                    viewBox="-35.20005 -41.33325 305.0671 247.9995"
                                  >
                                    <path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" 
                                    fill="red"/>
                                    <path d="M93.333 117.559l61.333-34.89-61.333-34.894z" 
                                    fill="#fff"/>
                                  </svg>
                                </div>
                              </Link>
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