"use client";

import Map from "./Map";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-20 overflow-hidden py-16 dark:bg-[#000] md:py-10 lg:py-10"
    >
      <div className="container">
        <div className="-mx-4 flex flex-col items-center lg:flex-row">
          <div className="flex h-full w-full px-4 lg:w-7/12 xl:w-1/2">
            <a
              href="https://www.instagram.com/edeevangelina/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[150px] w-1/2 cursor-pointer transition-transform duration-300 hover:scale-105 lg:h-[300px]"
            >
              <div className="bg-ig h-full w-full bg-contain bg-center bg-no-repeat">
                <span className="sr-only">Ir a WhatsApp</span>
              </div>
            </a>
            <a
              href="https://open.spotify.com/intl-es/artist/4CZvNtm3l5iShetGlKbz7s" // reemplaza esto con tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="h-[150px] w-1/2 cursor-pointer transition-transform duration-300 hover:scale-105 lg:h-[300px]"
            >
              <div className="bg-spotify h-full w-full bg-contain bg-center bg-no-repeat">
                <span className="sr-only">Ir a Spotify</span>
              </div>
            </a>
          </div>
          <div className="mt-8 h-[400px] w-full px-4 lg:mt-0 lg:w-full xl:h-[500px] xl:w-1/2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
