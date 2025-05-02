"use client";

import { useTheme } from "next-themes";

const Map = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 h-full rounded-sm bg-white p-0 shadow-three dark:bg-[#000] sm:p-11 lg:p-8 xl:p-11">
      <div
        className="flex h-full w-full flex-row items-center justify-center"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <iframe
          className=" h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948.6541582705036!2d-58.41307158934097!3d-34.77491946875068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd39fbac949bd%3A0x17614c8977ef5cff!2sClases%20de%20canto%20Temperley%20-%20Evangelina%20P%C3%A9rez!5e0!3m2!1ses-419!2sar!4v1691201984220!5m2!1ses-419!2sar"
          //width={window?.innerWidth < 450 ? 280 : window?.innerWidth < 1300 ? 500 : 600}
          //height={window?.innerWidth < 450 ? 300 : window?.innerWidth < 1300 ? 350 : 450}
          //allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
