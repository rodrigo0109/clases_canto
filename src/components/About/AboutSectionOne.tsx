import SectionTitle from "../Common/SectionTitle";
import Card from "./Card";
import cardsData from "./cards.json";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center px-5 sm:px-0">
            <div className="w-full px-4">
              <SectionTitle
                title="Descubrí tu voz y disfrutá el proceso"
                width="100%"
                center
                paragraph="Mis clases están pensadas para todo aquel que quiera cantar, explorar su voz y desarrollar su potencial artístico en un espacio cuidado, sin presiones ni exigencias competitivas."
                mb="5px"
              />
              <SectionTitle
                title=""
                width="100%"
                paragraph="Trabajamos técnica vocal, respiración, afinación, y sobre todo interpretación: porque cantar es mucho más que emitir notas, es una forma de expresar lo que sentimos. Acompaño cada proceso de manera personalizada, respetando tus tiempos y motivaciones."
                mb="5px"
              />
              <SectionTitle
                title=""
                width="100%"
                paragraph="No necesitás experiencia previa. Solo ganas de animarte a cantar."
                mb="5px"
              />
              <SectionTitle
                title=""
                width="100%"
                paragraph="Las clases presenciales se dictan en la localidad de Balvanera,  CABA  y tienen una duración de 1h. Aires."
                mb="5px"
              />
              <SectionTitle
                title=""
                width="100%"
                paragraph="Si estás buscando un espacio para conectarte con tu voz, animarte a expresarte y disfrutar del canto, te espero."
                mb="5px"
              />
              <span className="font-semibold text-black">Cupos limitados.</span>
            </div>

            <div className="mt-10 flex w-full flex-wrap items-center justify-center">
              {cardsData.map((card: any, i: number) => (
                <Card key={i} title={card.title} index={i} />
              ))}
            </div>

            {/* <div className="mt-4 h-[400px] w-full bg-about bg-cover bg-center bg-no-repeat px-4 sm:mt-0 lg:w-1/2"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
