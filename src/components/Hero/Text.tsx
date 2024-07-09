import TypingAnimation from "../magicui/typing-animation";

const TextHero = () => {
  return (
        <div className="container h-fit border">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <TypingAnimation 
                  text="Evangelina Pérez"
                  textSecond="Clases de canto"
                  duration={100}
                  className='text-[#bf1dd8] text-3xl sm:text-4xl text-shadow'
                />
                {/* <p className="mb-12 text-base !leading-relaxed dark:text-white dark:text-opacity-100 sm:text-xl md:text-2xl">
                  Clases de canto
                </p> */}
              </div>
            </div>
          </div>
        </div>
  );
};

export default TextHero;
