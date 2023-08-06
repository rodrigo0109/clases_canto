import React from 'react'
import { DM_Serif_Display } from 'next/font/google'

const serif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const Hero = () => {

  return (
    <div className={`w-full xs:h-[600px] 2xl:h-screen flex font-extralight`}>
       <div className='relative flex items-end justify-center w-full h-full bg-hero bg-no-repeat bg-center xs:bg-cover xs:bg-no-repeat 2xl:bg-cover shadow-2xl'>
        <div className='xl:absolute xs:w-full xl:w-[50%] h-[250px] xl:bottom-2 2xl:bottom-16 xl:right-0 text-main-white flex flex-col items-start justify-start'>
          <div className='xs:w-full xs:h-[100px] 2xl:h-[200px] xs:mt-10 flex flex-col items-center text-center justify-evenly' data-aos="fade-up" data-aos-duration="1000">
            <h1 className={`xs:text-4xl 2xl:text-8xl xs:mb-5 2xl:mb-10 tracking-wider ${serif.className}`}>Evangelina Pérez</h1>
            <h3 className={`xs:text-2xl 2xl:text-6xl`}>Clases de canto</h3>
          </div>
        </div>

        <div className='absolute bottom-5 left-5 text-main-white text-xs tracking-wider font-medium'>
          <p>Ph Matías Corbetto</p>
        </div>
       </div>
    </div>
  )
}

export default Hero
