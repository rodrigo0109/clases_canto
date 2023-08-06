import React from 'react'

const About = () => {
  return (
    <div className='w-full xl:h-[600px] xs:h-[700px] md:h-[500px] boder flex xs:flex-col-reverse xl:flex-row items-center bg-main-white'>
      <div  className='xs:w-[80%] xl:w-[50%] xl:h-[80%] flex items-center' data-aos="fade-right" data-aos-duration="1000">
        <div className='xl:w-[70%] xs:w-full h-full m-auto text-main-black xs:text-sm 2xl:text-lg text-justify tracking-wide flex flex-col justify-evenly'>
          <div>
            <p>
              Hola! Soy Evangelina Pérez y estudio canto hace muchos años, en forma particular y en conservatorios como la EMPA o el Julián Aguirre. 
              Ser cantante (aunque sea en la ducha) es el resultado de un trabajo constante, que lleva su tiempo de exploración y descubrimiento. Pero también es el resultado de las emociones, dudas miedos y euforias. 
              La voz es identidad, es comunicación. Descubrirla es un camino que vale la pena explorar. 
            </p>
          </div>
          <div>
            <p>
              A continuación, podés ver algo de mi recorrido por la música.
            </p>
          </div>
        </div>
      </div>
      <div className='xs:w-[80%] xl:w-[50%] xl:h-[80%] xs:h-full flex flex-col justify-center'>
        <div className='relative xs:w-full xl:w-[80%] xs:h-[80%] 2xl:h-full bg-about bg-center bg-cover bg-no-repeat shadow-2xl m-auto' data-aos="fade-left" data-aos-duration="1000">
          <div className='absolute bottom-5 left-5 text-main-white text-xs tracking-wider font-medium'>
            <p>Ph Matías Corbetto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About