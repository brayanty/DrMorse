function Navbar() {
  return (
    <section
      className="container mx-auto p-4 flex flex-col gap-6 items-center
     "
    >
      <h4 className="text-black text-center text-4xl font-primarybold">
        En donde nos{" "}
        <span className="font-bold text-center text-4xl"> ubicamos</span>
      </h4>
      <div className="w-full h-[40vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.637106261345!2d-76.49100885!3d3.4922826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a86fc4bb0c7f%3A0x26c3a3a3d5ad5432!2sPaso%20del%20Comercio%2C%20COMUNA%206%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1725961915911!5m2!1ses-419!2sco"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Navbar;
