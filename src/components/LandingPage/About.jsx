import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const AboutUs = () => {
  return (
    <div className="bg-secondary text-primary dark:bg-primary dark:text-secondary">
      <div className="bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.5),rgba(16,71,52,0.5)),url('../about.jpg')] relative">
        <div className="absloute  inset-0 flex items-center justify-center h-[300px]">
          <h1 className="text-primary text-4xl font-bold uppercase tracking-[0.8em]">
            About
          </h1>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <div className="w-full max-w-[800px] my-8">
          <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row mb-8"
              >
                <img
                  className="w-[15rem] m-auto object-cover lg:mr-4 rounded-md"
                  src="./about-1.png"
                  alt="about-1"
                />
                <div className="flex flex-col justify-center p-3 text-center lg:text-left">
                  <h1 className="font-bold dark:text-accent text-lg md:text-xl lg:text-2xl mb-2">
                    Pembelajaran Interaktif
                  </h1>
                  <p>
                    Menyajikan pengalaman belajar yang interaktif dan mendalam
                    bagi semua peserta didik dengan melalui penggunaan teknologi
                    dan metode inovatif dengan memadukan model pembelajaran
                    problem based learning
                  </p>
                </div>
              </motion.div>
            )}
          </InView>

          <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row mb-8"
              >
                <div className="flex flex-col justify-center p-3 text-center lg:text-right order-2 lg:order-none">
                  <h1 className=" font-bold dark:text-accent text-lg md:text-xl lg:text-2xl mb-2">
                    Misi Gamified Learn
                  </h1>
                  <p>
                    Memberikan pengalaman pembelajaran yang adaptif, kolaboratif, dan
                    terarah. Serta membantu setiap individu meraih
                    kesuksesan dalam belajar dan mengembangkan keterampilan yang
                    relevan untuk masa depan.
                  </p>
                </div>
                <img
                  className="w-[15rem] object-cover m-auto lg:ml-4 mt-4 lg:mt-0 rounded-md"
                  src="./about-2.png"
                  alt="about-2"
                />
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
