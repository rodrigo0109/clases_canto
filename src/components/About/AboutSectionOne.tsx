import Card from "./Card";
import cardsData from "./cards.json";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container w-full">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15]">
          <div className="flex w-full flex-wrap items-center sm:px-0 lg:mx-4 xl:px-5">
            <div className="flex w-full flex-col items-center px-4 text-center leading-relaxed text-body-color">
              <h2 className="font-sequel mx-auto mb-4 text-2xl font-bold !leading-tight text-black sm:text-3xl md:text-[35px]">
                Descubrí tu voz y disfrutá el proceso
              </h2>
              <div className="font-sequel flex flex-col font-light tracking-wide">
                <span className="mt-2">
                  Mis clases están pensadas para todo aquel que quiera cantar,
                  explorar su voz y desarrollar su potencial artístico en un
                  espacio cuidado, sin presiones ni exigencias competitivas.
                </span>
                <span className="mt-2">
                  Trabajamos técnica vocal, respiración, afinación, y sobre todo
                  interpretación: porque cantar es mucho más que emitir notas,
                  es una forma de expresar lo que sentimos. Acompaño cada
                  proceso de manera personalizada, respetando tus tiempos y
                  motivaciones.
                </span>
                <span className="mt-2">
                  No necesitás experiencia previa. Solo ganas de animarte a
                  cantar.
                </span>
                <span className="mt-2">
                  Las clases presenciales se dictan en la localidad de
                  Balvanera, CABA y tienen una duración de 1h.
                </span>
                <span className="mt-2">
                  Si estás buscando un espacio para conectarte con tu voz,
                  animarte a expresarte y disfrutar del canto, te espero.
                </span>
                <span className="mt-2 font-bold text-black">
                  Cupos limitados.
                </span>
              </div>
            </div>

            <div className="mt-10 flex w-full flex-col items-center justify-center lg:flex-row lg:flex-wrap">
              {cardsData.map((card: any, i: number) => (
                <Card
                  key={i}
                  title={card.title}
                  index={i}
                  message={card.message}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
