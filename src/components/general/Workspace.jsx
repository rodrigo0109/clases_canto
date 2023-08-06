import React from 'react'
import { DM_Serif_Display, Work_Sans } from 'next/font/google'

const serif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const sans = Work_Sans({
    weight: ['100','200','300','400','500','600','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

const Workspace = () => {
  return (
    <div className='w-full xs:h-[800px] xl:h-[600px] flex xs:flex-col-reverse xl:flex-row items-center bg-main-white'>
            <div className='xs:mt-10 xs:w-[80%] xl:w-[50%] xl:h-[70%] h-[80%] xs:h-full' data-aos="fade-right" data-aos-duration="1000">
                <div className='xs:w-full xl:w-[80%] h-full bg-workspace bg-center bg-cover bg-no-repeat shadow-2xl m-auto'></div>
            </div>
            <div className='xs:w-full xl:w-[50%] xl:h-[80%]'  data-aos="fade-left" data-aos-duration="1000">
                <div className='xs:w-[80%] xl:w-[70%] h-full m-auto text-main-black xs:text-sm 2xl:text-lg text-justify tracking-wide flex flex-col justify-evenly'>
                    <h3 className={`xs:text-xl xs:mb-5 2xl:text-4xl font-semibold text-center`}>Información sobre las clases</h3>
                    <div>
                        <p>
                            En el arte del canto, cada nota es una expresión única de tu identidad y emociones. 
                            Es un viaje de autodescubrimiento donde las dudas y los miedos se convierten en oportunidades para crecer y superarte. 
                        </p>
                    </div>
                    <div>
                        <p>
                            Con dedicación y trabajo constante, cuanto más conozcas tu instrumento más fácil será sortear los desafíos que se te presenten.
                        </p>
                    </div>
                    <div>
                        <p className='font-medium mt-5'>Haremos foco en los siguientes puntos:</p>
                    </div>
                    <div>
                        <ul>
                            <li>- Técnica vocal</li>
                            <li>- Respiración</li>
                            <li>- Ejercicios de relajación</li>
                            <li>- Repertorio</li>
                            <li>- Desenvolvimiento escénico</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Es necesario cuidar y amar la propia voz de una forma sana y equilibrada. 
                            Escucharla, sentirla y conocer sus propios límites y capacidades.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Workspace