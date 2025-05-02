const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  paragraphSize,
  italic,
  extraStyles,
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  paragraphSize?: string;
  italic?: boolean;
  extraStyles?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : "text-justify"} ${extraStyles}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black sm:text-3xl md:text-[35px]">
          {title}
        </h2>
        <p
          className={`text-justify leading-relaxed text-body-color md:text-sm 2xl:text-lg $${paragraphSize ? paragraphSize : "text-base md:text-sm"} ${italic ? "italic" : ""}`}
          style={{ fontSize: paragraphSize }}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
