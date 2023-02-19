import React from "react";

const MovieCard = () => {
  return (
    <div className="min-h-[50vh] flex flex-col h-auto lg:px-8">
      <div className="flex bg-[rgba(0,0,0,0.3)] rounded-sm w-full"></div>
      <div className="bg-[rgba(0,0,0,0.3)] rounded-sm w-full flex lg:flex-row flex-col py-8">
        <div className=" lg:w-1/2 w-full h-full rounded-md justify-start items-start">
          <iframe
            width="560"
            height="100%"
            src="https://henaojara2.com/?trembed=3&amp;trid=587&amp;trtype=1"
            frameborder="0"
            allowfullscreen=""
            className="w-full lg:h-[715px] aspect-video px-2"
          ></iframe>
        </div>
        <div className="lg:w-1/2 w-full min-h-[50vh] h-full rounded-md justify-end flex-col flex  items-end">
          <div className="z-10 p-5 mb-5 w-full ">
            <span className="mr-3 align-middle inline-block w-full">
              <h2 className="leading-9 p-2 mb-0 max-h-none font-light  text-2xl text-blue-600 text-center">
                Kimi No Na Wa Español Latino HD
              </h2>
            </span>
            <div className="mb-3 text-base leading-5 pt-1 opacity-80 w-full text-center text-white">
              kimi no na wa pelicula completa español latino HD
            </div>
            <div className="flex justify-center items-start w-full h-full">
              <figure className="align-top h-full">
                <img
                  src="https://henaojara2.com/wp-content/uploads/2020/02/Kimi-No-Na-Wa-185x278.jpg"
                  alt=""
                  width="185"
                  height="278"
                  loading="lazy"
                  className="max-w-full inline-block overflow-clip"
                />
              </figure>
            </div>
            <div className="max-h-64 text-xl overflow-auto break-words font-light mt-4">
              <p className="m-0 text-white">
                Ha pasado un mes desde que un cometa que visita la Tierra cada
                mil años se avistara desde Japón. Mitsuha es una estudiante que
                se lamenta de su vida en el campo junto a su hermana pequeña, su
                abuela y su padre, un político al que nunca ve. Detesta las
                pintorescas costumbres de su familia y sueña con el maravilloso
                estilo de vida de los habitantes de Tokyo. Por su parte, Taki es
                un estudiante que vive en Tokyo, tiene un trabajo a tiempo
                parcial en un restaurante italiano y necesita alejarse de su
                familia. Una noche, Mitsuha sueña que es un chico de Tokyo y
                Taki sueña que es una chica que vive en el campo. ¿Cuál es el
                secreto que se oculta tras los sueños de dos personas que a
                pesar de que no se conocen de nada parecen buscarse
                desesperadamente?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
