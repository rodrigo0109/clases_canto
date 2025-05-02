"use client";

import Map from "./Map";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-20 overflow-hidden py-16 dark:bg-gray-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-row items-center">
          <div className="flex h-full px-4 lg:w-7/12 xl:w-1/2">
            <div className="bg-ig h-[300px] w-1/2 bg-contain bg-center bg-no-repeat"></div>
            <div className="bg-spotify h-[300px] w-1/2 bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div className="h-[400px] w-full px-4 lg:w-full xl:h-[500px] xl:w-1/2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
