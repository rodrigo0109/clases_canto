const AboutSectionTwo = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="w-full border"></div>
        <div className="flex flex-col items-center pt-8 lg:flex-row">
          <div className="flex w-full flex-col px-4 leading-relaxed text-body-color lg:w-1/2">
            <h2 className="font-sequel mx-auto mb-4 text-2xl font-bold !leading-tight text-black sm:text-3xl md:text-[35px]">
              Sobre mí
            </h2>
            <div className="font-sequel flex flex-col text-center font-light tracking-wide">
              <span className="mt-2">
                Soy Evangelina Pérez, cantante y docente de canto. Hace varios
                años me dedico a acompañar a personas en su camino vocal,
                combinando mi formación en el conservatorio con una profunda
                exploración autodidacta. Canto desde que tengo memoria, y la
                música siempre ha sido un lugar de encuentro, expresión y
                transformación para mí.
              </span>
              <span className="mt-2">
                A lo largo de mi recorrido, me formé en diversos géneros —como
                el soul, el R&B, la cumbia colombiana y el pop— lo que me
                permite adaptar las clases al universo musical de cada persona.
                Creo en la técnica como herramienta al servicio de la emoción, y
                en el cuerpo como un instrumento que también aprende a afinarse.
              </span>
              <span className="mt-2">
                En mis clases vas a encontrar un espacio cálido, donde la
                confianza, la escucha y el disfrute son pilares fundamentales.
                Mi intención es que puedas conectar con tu voz, reconocer tu
                potencial y animarte a desarrollarlo sin miedo. No importa si
                cantás por hobby o si querés profundizar tu formación: lo
                importante es que tengas ganas de expresarte y de descubrir tu
                propia manera de sonar.
              </span>
              <span className="mt-2">
                Te invito a sumarte y empezar este viaje vocal conmigo.
              </span>
            </div>
          </div>
          <div className="bg-ab mt-8 h-[400px] w-full bg-cover bg-center bg-no-repeat px-4 sm:mt-0 lg:ml-2.5 lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
