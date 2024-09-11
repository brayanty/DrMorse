function Service() {
  const service = [
    {
      title: "Diagnostico y tratar enfermedades",
      description:
        "En nuestro centro podrás encontrar un servicio de calidad y experiencia.",
      img: "src/assets/ServiceImagen/virus-isolated-on-white.svg",
      alt: "Icono de virus",
    },
    {
      title: "Prescribir tratamientos",
      description:
        "Gracias a nuestra amplia experiencia, podemos ofrecerte una prescripción adecuada.",
      img: "src/assets/ServiceImagen/undraw_notebook.svg",
      alt: "Icono de prescripción",
    },
    {
      title: "Medicamentos",
      description:
        "Ofrecemos una variedad de medicamentos para diversas necesidades.",
      img: "src/assets/ServiceImagen/undraw_medical.svg",
      alt: "Icono de medicamentos",
    },
  ];

  return (
    <section className="p-1 pt-10 container mx-auto">
      <h3 className="mb-5 text-center text-black text-3xl font-primarybold">
        Que encontrarás
      </h3>
      <div className="text-base gap-2 grid grid-cols-1 sm:grid-cols-3 grid- ">
        {service.map((item, index) => {
          return (
            <article
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
              key={index}
            >
              <figure className="w-[70%] h-44">
                <img
                  className="w-full h-full object-top object-cover transform transition-all duration-300 ease-in-out hover:scale-105 rounded-md"
                  src={item.img}
                  alt={item.alt}
                />
              </figure>
              <header className="flex gap-2 flex-col text-center text-black">
                <h3 className="text-2xl font-primaryMedium text-blue-600">
                  {item.title}
                </h3>
                <p className="text-base font-primaryRegular text-gray-600">
                  {item.description}
                </p>
                <a
                  className="mt-4 text-blue-500 py-2 px-4 rounded-full hover:text-blue-700 active:text-blue-800 transition-colors duration-300"
                  href="#"
                >
                  Más Información
                </a>
              </header>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Service;