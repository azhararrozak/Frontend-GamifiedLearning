import Contact from "../components/LandingPage/Contact";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/LandingPage/Navbar";
import { useRef } from "react";
import Programs from "../components/LandingPage/Programs";
import AboutUs from "../components/LandingPage/About";

const Homepage = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const homeRef = useRef(null);

  // Function to handle scrolling to the Contact component
  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      // Scroll smoothly to the Contact component using the ref
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full text-fontPrimary bg-primary">
      <Navbar
        home={scrollToHome}
        contact={scrollToContact}
        about={scrollToAbout}
        programs={scrollToPrograms}
      />
      <div
        ref={homeRef}
        className="min-h-screen mx-auto flex flex-col lg:flex-row items-center py-16 px-8"
      >
        {/* Kolom Teks */}

        <div className="lg:w-1/2 px-12 text-center lg:text-left lg:mb-0 lg:mt-0 my-8">
          <h1 className="md:text-6xl text-3xl font-semibold uppercase">
            Selamat <span className="text-fontSecondary">datang</span>
          </h1>
          <h3 className="uppercase mb-4 text-2xl font-bold">
            di platform pembelajaran
          </h3>
          <span className="md:text-4xl text-xl uppercase italic">
            Gamified Learn
          </span>
          <p className="text-lg mt-4">
            belajar kapanpun dimanapun dengan sistem gamifikasi. kumpulkan serta
            dapatkan poin untuk mencapai batas kemampuan anda.
          </p>
          {/* <a
            href="#"
            className="bg-yellow-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-full mt-4 inline-block"
          >
            Selengkapnya
          </a> */}
        </div>

        {/* Kolom Gambar */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src="./home.png"
            alt="home"
            className="h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div ref={programsRef} className="mb-8">
        <Programs />
      </div>

      <div ref={aboutRef} className="pt-8">
        <AboutUs />
      </div>

      <div ref={contactRef}>
        {/* <Contact /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
