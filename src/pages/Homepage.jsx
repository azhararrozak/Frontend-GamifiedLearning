import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import Programs from "../components/Programs";
import AboutUs from "../components/About";

const Homepage = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);

  // Function to handle scrolling to the Contact component
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
    <div className="w-full">
      <Navbar contact={scrollToContact} about={scrollToAbout} programs={scrollToPrograms}/>
      <div className="min-h-screen mx-auto flex flex-col lg:flex-row items-center py-16 px-8">
        {/* Kolom Teks */}

        <div className="lg:w-1/3 px-12 text-center lg:text-left lg:mb-0 mb-8">
          <h1 className="text-6xl font-semibold mb-4">Selamat datang</h1>
          <span className="text-4xl text-yellow-500">Gamified Learning</span>
          <p className="text-gray-700 text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vehicula, risus sit amet scelerisque ultrices.
          </p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-full mt-4 inline-block"
          >
            Selengkapnya
          </a>
        </div>

        {/* Kolom Gambar */}
        <div className="lg:w-2/3 w-full">
          <img
            src="./home.png"
            alt="home"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div ref={programsRef}>
        <Programs />
      </div>

      <div ref={aboutRef}>
        <AboutUs />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>



      <Footer />
    </div>
  );
};

export default Homepage;
