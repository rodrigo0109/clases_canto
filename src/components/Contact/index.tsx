"use client";

import { useEffect, useState } from "react";
import Map from "./Map";

const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleData = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  useEffect(() => {
    setData({
      name: '',
      email: '',
      message: ''
    })
  }, [])

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 xl:h-[600px] rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Tenés dudas?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Envíame tu consulta y me voy a contactar con vos.
              </p>
              <form action='https://getform.io/f/5ebe45c0-9173-4c41-85d6-8721825887fd' method='POST' onSubmit={() => setData({ name: '', email: '', message: '' })}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu nombre
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={data.name}
                        onChange={handleData}
                        placeholder="Escribí tu nombre"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={data.email}
                        onChange={handleData}
                        placeholder="Escribí tu email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu consulta
                      </label>
                      <textarea
                        name="message"
                        value={data.message}
                        onChange={handleData}
                        rows={5}
                        placeholder="Escribí tu mensaje"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 h-[400px] lg:w-5/12 xl:w-4/12 xl:h-[600px]">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
