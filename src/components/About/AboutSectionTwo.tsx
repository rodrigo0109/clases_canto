import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionTwo = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-row-reverse flex-wrap sm:flex-nowrap px-5 sm:px-0 items-center justify-between">
            
            <div className="w-full px-4 lg:w-1/2 flex flex-col items-end sm:ml-10 2xl:ml-0">
              <SectionTitle
                title="Información sobre las clases"
                paragraph="En el arte del canto, cada nota es una expresión única de tu identidad y emociones. 
                Es un viaje de autodescubrimiento donde las dudas y los miedos se convierten en oportunidades para crecer y superarte. "
                mb="10px"
              />
              <SectionTitle
                title=""
                paragraph="Con dedicación y trabajo constante, cuanto más conozcas tu instrumento más fácil será sortear los desafíos que se te presenten."
                mb="10px"
              />
              <SectionTitle
                title=""
                paragraph="Haremos foco en los siguientes puntos:"
                mb="10px"
              />
              <SectionTitle
                title=""
                paragraph="- Técnica vocal"
                mb="0px"
                // paragraphSize="16px"
              />
              <SectionTitle
                title=""
                paragraph="- Respiración"
                mb="0px"
                // paragraphSize="16px"
              />
              <SectionTitle
                title=""
                paragraph="- Ejercicios de relajación"
                mb="0px"
                // paragraphSize="16px"
              />
              <SectionTitle
                title=""
                paragraph="- Repertorio"
                mb="0px"
                // paragraphSize="16px"
              />
              <SectionTitle
                title=""
                paragraph="- Desenvolvimiento escénico"
                mb="0px"
                // paragraphSize="16px"
              />
              <SectionTitle
                title=""
                paragraph="Es necesario cuidar y amar la propia voz de una forma sana y equilibrada. 
                Escucharla, sentirla y conocer sus propios límites y capacidades."
                mb="0px"
              />
            </div>

            <div className="w-full mt-4 sm:mt-0 h-[500px] px-4 xl:w-1/2 bg-about2 bg-no-repeat bg-center bg-cover">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;