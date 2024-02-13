import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Programs = () => {
  return (
    <div className="flex flex-col lg:flex-row text-secondary dark:text-primary my-4">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-4">
        <InView threshold={0.25} triggerOnce={true}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="px-8 text-center"
            >
              <h1 className="font-bold text-3xl mb-4">Programs</h1>
              <p className="font-secondary">
                Memberikan solusi inovatif untuk meningkatkan
                pengalaman belajar dengan memadukan konsep gamifikasi,
                problem-based learning, dan kolaborasi dalam bentuk studi
                kelompok.
              </p>
            </motion.div>
          )}
        </InView>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center text-primary">
        <div className="px-4 py-6 grid grid-col-1 gap-8">
          <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="shadow-lg rounded-md flex flex-col lg:flex-row bg-accent"
              >
                <div className="lg:w-2/5 w-full">
                  <img
                    className="w-full lg:rounded-l-lg lg:rounded-tr-none rounded-t-lg h-full"
                    src="./programs-1.png"
                    alt="program-1"
                  />
                </div>
                <div className="lg:w-3/5 w-full flex flex-col p-6">
                  <h1 className="font-bold text-xl mb-2">Gamifikasi</h1>
                  <p className="text-justify font-secondary">
                    Elemen game yang dipakai adalah poin dan badge, User dapat
                    memilikinya ketika menyelesaikan tugas tertentu, mencapai
                    tujuan pembelajaran, atau berkontribusi dalam aktivitas
                    pembelajaran lainnya.
                  </p>
                </div>
              </motion.div>
            )}
          </InView>

          <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="shadow-lg rounded-md flex flex-col lg:flex-row bg-accent"
              >
                <div className="lg:w-2/5 w-full">
                  <img
                    className="w-full lg:rounded-l-lg rounded-t-lg h-full"
                    src="./programs-3.png"
                    alt="program-3"
                  />
                </div>
                <div className="lg:w-3/5 w-full flex flex-col p-6">
                  <h1 className="font-bold text-lg mb-2">
                    Problem Based Learning
                  </h1>
                  <p className="text-justify font-secondary">
                    Peserta didik akan diberikan masalah atau tantangan nyata
                    yang membutuhkan pemecahan. Mereka diajak untuk memecahkan
                    masalah tersebut untuk mengembangkan keterampilan pemecahan
                    masalah yang mendalam dan berpikir logis.
                  </p>
                </div>
              </motion.div>
            )}
          </InView>

          <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="shadow-lg rounded-md flex flex-col lg:flex-row bg-accent"
              >
                <div className="lg:w-2/5 w-full">
                  <img
                    className="w-full lg:rounded-l-lg rounded-t-lg h-full"
                    src="./programs-2.png"
                    alt="program-2"
                  />
                </div>
                <div className="lg:w-3/5 w-full flex flex-col p-6">
                  <h1 className="font-bold text-lg mb-2">Studi Kelompok</h1>
                  <p className="text-justify font-secondary">
                    Program ini mendorong kolaborasi antara peserta didik
                    melalui fitur studi kelompok. Ini memungkinkan mereka untuk
                    saling mendukung, berbagi pengetahuan, dan memperluas
                    pemahaman mereka melalui diskusi dan pertukaran ide.
                  </p>
                </div>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default Programs;
