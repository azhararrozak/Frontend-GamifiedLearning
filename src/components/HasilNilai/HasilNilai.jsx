import React from "react";
import { Link } from "react-router-dom";

const HasilNilai = () => {
  return (
    <div className="">
      <div className="p-2 w-full flex lg:flex-row flex-col gap-2">
        <div className="lg:w-1/2 w-full border-2 border-secondary rounded-md">
          <div>
            <img
              className="rounded-md"
              src="../scoreTest.jpg"
              alt="scoreImagePretest"
            />
          </div>
          <div className="p-3">
            <h1 className="text-xl font-bold mt-2">Pretest Nilai</h1>
            <p className="mb-4">
              Berisi semua nilai-nilai pretest siswa dengan setiap pertanyaan
              serta dapat melihat jumlah benar per siswa
            </p>
            <Link
              className="border bg-secondary px-4 py-2 rounded-md text-primary font-bold"
              to={"pretest"}
            >
              Klik Disini
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full border-2 border-secondary rounded-md">
          <div>
            <img
              className="rounded-md"
              src="../scoreTest.jpg"
              alt="scoreImagePostest"
            />
          </div>
          <div className="p-3">
            <h1 className="text-xl font-bold mt-2">Postest Nilai</h1>
            <p className="mb-4">
              Berisi semua nilai-nilai postest siswa dengan setiap pertanyaan
              serta dapat melihat jumlah benar per siswa
            </p>
            <Link className="border bg-secondary px-4 py-2 rounded-md text-primary font-bold" to={"postest"}>
              Klik Disini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilNilai;
