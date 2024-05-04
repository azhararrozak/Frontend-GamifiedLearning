import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
const ProfilPengembang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleCollapse3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profil Pengembang</h1>
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-1/2 w-full">
          <div className="w-full flex justify-center lg:justify-start ">
            <img
              className="rounded-md"
              src="../AzharA.png"
              alt="foto pengembang"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full p-2">
          <div>
            <div className="flex w-full">
              <button
                className="border-b-2 py-3 text-lg w-full lg:justify-end justify-between flex flex-1 font-semibold items-center"
                onClick={toggleCollapse}
              >
                Biodata Pengembang
                <div
                  className={`border-8 border-transparent border-l-secondary ml-4 ${
                    isOpen ? "rotate-90 transition-transform origin-left" : ""
                  }`}
                ></div>
              </button>
            </div>
            {isOpen && (
              <div className="mt-2 text-lg">
                <table>
                  <tbody>
                  <tr>
                    <td className="font-bold">Nama</td>
                    <td className="font-bold">:</td>
                    <td>Azhar Arrozak</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Email</td>
                    <td className="font-bold">:</td>
                    <td>azhardrozak2001@upi.edu</td>
                  </tr>
                  <tr>
                    <td className="font-bold">No. HP</td>
                    <td className="font-bold">:</td>
                    <td>082241986504</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div>
            <div className="flex w-full">
              <button
                className="border-b-2 py-3 text-lg w-full lg:justify-end justify-between flex flex-1 font-semibold items-center"
                onClick={toggleCollapse2}
              >
                Pendidikan Pengembang
                <div
                  className={`border-8 border-transparent border-l-secondary ml-4 ${
                    isOpen2 ? "rotate-90 transition-transform origin-left" : ""
                  }`}
                ></div>
              </button>
            </div>
            {isOpen2 && (
              <div className="mt-2 text-lg">
                <table>
                  <tbody>
                  <tr>
                    <td className="font-bold">SMK</td>
                    <td className="font-bold">:</td>
                    <td>SMKN 1 Adiwerna</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Universitas</td>
                    <td className="font-bold">:</td>
                    <td>Universitas Pendidikan Indonesia</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div>
            <div className="flex w-full">
              <button
                className="border-b-2 py-3 text-lg w-full lg:justify-end justify-between flex flex-1 font-semibold items-center"
                onClick={toggleCollapse3}
              >
                List Link Pengembang
                <div
                  className={`border-8 border-transparent border-l-secondary ml-4 ${
                    isOpen3 ? "rotate-90 transition-transform origin-left" : ""
                  }`}
                ></div>
              </button>
            </div>
            {isOpen3 && (
              <div className="mt-2 text-lg">
                <table className="w-full">
                  <tbody>
                  <tr>
                    <td className="py-2">
                      <FaLinkedin />
                    </td>
                    <td className="font-bold">Linkedin</td>
                    <td className="font-bold">:</td>
                    <td>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/azharrozak/"
                        className="text-center inline-block w-full bg-secondary text-primary font-bold p-1 rounded-md"
                      >
                        Pergi ke LinkedIn
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <FaSquareGithub />
                    </td>
                    <td className="font-bold">Github</td>
                    <td className="font-bold">:</td>
                    <td>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/azhar.rzk/"
                        className="text-center inline-block w-full bg-secondary text-primary font-bold p-1 rounded-md"
                      >
                        Pergi ke Github
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <FaSquareInstagram />
                    </td>
                    <td className="font-bold">Instagram</td>
                    <td className="font-bold">:</td>
                    <td>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/azhar.rzk/"
                        className="text-center inline-block w-full bg-secondary text-primary font-bold p-1 rounded-md"
                      >
                        Pergi ke Instagram
                      </a>
                    </td>
                  </tr>
                  </tbody>
                  
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex-col lg:h-[300px] lg:flex-row flex my-6">
        <div className="lg:w-1/2 w-full lg:text-left text-center mb-4 flex justify-center flex-col">
          <h1 className="text-2xl font-bold">
            Pengembangan Website ini menggunakan
          </h1>
          <p className="text-3xl font-bold">Stack MERN</p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 text-center">
            <div className="flex flex-col justify-around items-center">
              <div className="flex lg:w-[100px] lg:h-[100px] w-[250px] h-[250px] items-center justify-center p-2 border bg-gray-200 rounded-full shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/a/a5/MongoDB_Fores-Green_logo.svg/1920px-MongoDB_Fores-Green_logo.svg.png"
                  alt="logo mongodb"
                />
              </div>

              <p className="font-bold text-2xl my-2 lg:text-lg">MongoDB</p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <div className="flex lg:w-[100px] lg:h-[100px] w-[250px] h-[250px] items-center justify-center p-2 border bg-gray-200 rounded-full shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                  alt="logo express"
                />
              </div>

              <p className="font-bold text-2xl my-2 lg:text-lg">ExpressJS</p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <div className="flex lg:w-[100px] lg:h-[100px] w-[250px] h-[250px] items-center justify-center p-2 border bg-gray-200 rounded-full shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="logo react"
                />
              </div>

              <p className="font-bold text-2xl my-2 lg:text-lg">ReactJS</p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <div className="flex lg:w-[100px] lg:h-[100px] w-[250px] h-[250px] items-center justify-center p-2 border bg-gray-200 rounded-full shadow-md">
                <img
                  className="p-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                  alt="logo node"
                />
              </div>

              <p className="font-bold text-2xl my-2 lg:text-lg">NodeJS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-justify">
        <h1 className="font-bold text-2xl">Credits</h1>
        <p className="mb-2">
          Beberapa gambar yang digunakan di ambil dari link dan website di bawah
          ini
        </p>
        <div className="p-2 bg-white text-secondary shadow rounded-md">
          <ul className="list-disc ml-5">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/cute-boy-study-with-laptop-cartoon-icon-illustration-education-technology-icon-concept-isolated-flat-cartoon-style_10718009.htm"
              >
                https://www.freepik.com/free-vector/cute-boy-study-with-laptop-cartoon-icon-illustration-education-technology-icon-concept-isolated-flat-cartoon-style_10718009.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/character-playing-videogame_7839112.htm"
              >
                https://www.freepik.com/free-vector/character-playing-videogame_7839112.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/happy-students-background_2817954.htm"
              >
                https://www.freepik.com/free-vector/happy-students-background_2817954.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/hand-drawn-facepalm-illustration_38680326.htm"
              >
                https://www.freepik.com/free-vector/hand-drawn-facepalm-illustration_38680326.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/happy-character-winning-prize-with-flat-design_2773868.htm"
              >
                https://www.freepik.com/free-vector/happy-character-winning-prize-with-flat-design_2773868.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.freepik.com/free-vector/401-error-unauthorized-concept-illustration_13315291.htm"
              >
                https://www.freepik.com/free-vector/401-error-unauthorized-concept-illustration_13315291.htm
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.pexels.com/photo/small-toy-horses-for-kids-on-windowsill-712857/"
              >
                Photo by Kristina Paukshtite from Pexels:
                https://www.pexels.com/photo/small-toy-horses-for-kids-on-windowsill-712857/
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.pexels.com/photo/group-of-people-studying-together-5676744/"
              >
                Photo by Ivan Samkov from Pexels:
                https://www.pexels.com/photo/group-of-people-studying-together-5676744/
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.pexels.com/photo/a-female-teacher-tutoring-her-male-student-6502822/"
              >
                Photo by Thirdman from Pexels:
                https://www.pexels.com/photo/a-female-teacher-tutoring-her-male-student-6502822/
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.pexels.com/photo/pile-of-books-159866/"
              >
                Photo by Pixabay from Pexels:
                https://www.pexels.com/photo/pile-of-books-159866/
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://unsplash.com/photos/gray-and-white-click-pen-on-white-printer-paper-cbEvoHbJnIE"
              >
                https://unsplash.com/photos/gray-and-white-click-pen-on-white-printer-paper-cbEvoHbJnIE
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://unsplash.com/photos/brown-and-black-jigsaw-puzzle-B-x4VaIriRc"
              >
                https://unsplash.com/photos/brown-and-black-jigsaw-puzzle-B-x4VaIriRc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilPengembang;
