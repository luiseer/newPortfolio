import React from 'react';

const Contact = () => {
  return (
    <>
      <h2 className="text-center uppercase text-green-color font-bold text-2xl mt-20">
        Contacto
      </h2>
      <form className="mt-10 flex flex-col justify-center mb-28">
        <div className="mb-5 flex justify-center items-center text-center">
          <label
            htmlFor="name"
            className="text-sm font-bold uppercase text-primary-color mr-5"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="coloca tu nombre"
            className="border-2 sm:w-1/3 w-full p-2 mt-3 uppercase text-secondary-color  border-primary-color rounded-lg"
          />
        </div>
        <div className="mb-5 flex justify-center items-center">
          <label
            htmlFor="email"
            className="text-sm font-bold uppercase mr-5 text-primary-color"
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            placeholder="coloca tu correo"
            className="border-2 sm:w-1/3 w-full p-2 mt-3 uppercase text-secondary-color  border-primary-color rounded-lg"
          />
        </div>
        <div className="mb-5 flex justify-center items-center">
          <label
            htmlFor="mensaje"
            className="text-sm mr-5 font-bold uppercase text-primary-color"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            placeholder="coloca un comentario"
            className="border-2 sm:w-1/3 w-full p-2 mt-3 uppercase text-secondary-color  border-primary-color rounded-lg justify-center"
          />
        </div>
        <input
          type="submit"
          className="hover:animate-pulse m-auto bg-primary-color w-1/4 py-3 px-5 rounded-md shadow-xl text-secondary-color font-bold uppercase hover:bg-green-color text-center"
          value="enviar"
        />
      </form>
    </>
  );
};

export default Contact;
