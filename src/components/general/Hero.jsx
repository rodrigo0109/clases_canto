import React from 'react'
import { DM_Serif_Display, Lato } from 'next/font/google'
import Scroller from './Scroller'

const serif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const lato = Lato({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const Hero = () => {

  return (
    <div className={`w-full xs:h-screen 2xl:h-screen flex font-extralight`}>
       <div className='relative flex items-end justify-center w-full h-full bg-hero bg-no-repeat bg-center xs:bg-cover xs:bg-no-repeat 2xl:bg-cover shadow-2xl'>
        <div className='xl:absolute xs:w-full xl:w-[50%] h-[250px] xl:bottom-2 xlhero:bottom-36 xl:right-20 text-main-white flex flex-col items-start justify-start'>
          <div className='xs:w-full xs:h-[100px] xlhero:h-[200px] xs:mt-10 flex flex-col items-center text-center justify-evenly' data-aos="fade-up" data-aos-duration="1000">
            <h1 className={`xs:text-4xl md:text-4xl xlhero:text-6xl xs:mb-5 2xl:mb-10 tracking-wider ${lato.className}`}>Evangelina Pérez</h1>
            <h3 className={`xs:text-2xl xlhero:text-4xl`}>Clases de canto</h3>
          </div>
        </div>
        <div className='absolute xl:bottom-5 w-[100px] h-[80px]'>
          <Scroller />
        </div>
        <div className='absolute bottom-5 left-5 text-main-white text-xs tracking-wider font-medium'>
          <p className='xs:text-[8px]'>Ph Matías Corbetto</p>
        </div>
       </div>
    </div>
  )
}

export default Hero
