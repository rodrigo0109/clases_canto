const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="z-10 flex h-[800px] items-center justify-center overflow-hidden bg-hero bg-cover  bg-center bg-no-repeat pb-4 pt-20 opacity-80 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container m-auto">
          <div className="flex flex-col text-center text-4xl font-bold xl:text-7xl">
            <h1>Clases de canto</h1>
            <span className="text-2xl xl:text-4xl">Evangelina Pérez</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
