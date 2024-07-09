const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  paragraphSize,
  italic
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  paragraphSize?: string;
  italic?: boolean
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
          {title}
        </h2>
        <p className={`leading-relaxed text-body-color md:text-sm 2xl:text-lg $${paragraphSize ? paragraphSize : "text-base md:text-sm"} ${italic ? "italic" : ""}`} style={{ fontSize: paragraphSize }}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
