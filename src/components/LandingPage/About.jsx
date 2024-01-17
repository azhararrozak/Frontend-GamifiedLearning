const AboutUs = () => {
  return (
    <div className="bg-secondary text-primary">
      <div className="bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.5),rgba(16,71,52,0.5)),url('../about.jpg')] relative">
        <div className="absloute  inset-0 flex items-center justify-center h-[300px]">
          <h1 className="text-fontPrimary text-2xl font-bold uppercase">
            About Us
          </h1>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <div className="w-full max-w-[800px] my-8">
          <div className="flex flex-col lg:flex-row mb-8">
            <img
              className="w-[15rem] m-auto object-cover lg:mr-4"
              src="./about-1.png"
              alt="about-1"
            />
            <div className="flex flex-col justify-center p-3 text-center lg:text-left">
              <h1 className="uppercase font-bold text-lg md:text-xl lg:text-2xl">
                pembelajaran interaktif
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo enim iste perferendis nihil qui neque suscipit itaque
                ducimus exercitationem numquam cumque quas recusandae vero
                beatae, quo corrupti sed tenetur ullam.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mb-8">
            <div className="flex flex-col justify-center p-3 text-center lg:text-right order-2 lg:order-none">
              <h1 className="uppercase font-bold text-lg md:text-xl lg:text-2xl">
                MISI KAMI
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo enim iste perferendis nihil qui neque suscipit itaque
                ducimus exercitationem numquam cumque quas recusandae vero
                beatae, quo corrupti sed tenetur ullam.
              </p>
            </div>
            <img
              className="w-[15rem] object-cover m-auto lg:ml-4 mt-4 lg:mt-0"
              src="./about-2.png"
              alt="about-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
