import React from 'react'

import { Playfair_Display, Work_Sans } from 'next/font/google'

const play = Playfair_Display({
  weight: ['400', '500'],
  style: ['italic'],
  subsets: ['latin'],
})

const sans = Work_Sans({
  weight: ['100','200','300','400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const Phrase = () => {
  return (
    <div className='xs:pt-10 w-full xs:h-[600px] flex xs:flex-col-reverse xl:flex-row items-center bg-main-white'>
        <div className='xs:w-full xl:w-[50%] xs:h-full xl:h-[80%] text-center flex flex-col items-center justify-center'  data-aos="fade-right" data-aos-duration="1000">
            <div className='xs:w-[80%] xl:w-[70%] md:h-[50%] m-auto text-main-gray xs:text-sm 2xl:text-lg text-justify tracking-wide flex flex-col justify-evenly mt-10'>
                <p className={`italic tracking-wider`}>
                   "Cuando canto, me siento como cuando te enamoras por primera vez. 
                   Es más que sexo. Es ese punto al que la gente puede llegar, lo llaman amor, cuando realmente tocas a alguien por primera vez. 
                   Pero es gigantesca, multiplicada por toda la audiencia. Siento escalofríos."
                </p>
                <p className='text-center font-semibold italic mt-5'>
                  Janis Joplin
                </p>
            </div>
        </div>
        <div className='xs:w-[80%] xl:w-[50%] xs:h-full xl:h-[80%] flex flex-col justify-center'  data-aos="fade-left" data-aos-duration="1000">
            <div className='xs:w-full xl:w-[80%] h-full bg-phrase bg-center bg-cover shadow-2xl m-auto'></div>
        </div>
    </div>
  )
}

export default Phrase