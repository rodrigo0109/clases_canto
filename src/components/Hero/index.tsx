import TypingAnimation from "../magicui/typing-animation";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-[800px] bg-hero bg-no-repeat bg-center bg-cover z-10 overflow-hidden  pb-4 pt-20 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <TypingAnimation 
                  text="Evangelina Pérez"
                  duration={100}
                  className='text-[#bf1dd8] text-3xl sm:text-4xl text-shadow'
                />
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Clases de canto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
