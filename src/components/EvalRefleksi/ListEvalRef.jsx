import { useState, useEffect } from "react";
import EvaluasiService from "../../services/evaluasi.service.js";
import RefleksiService from "../../services/refleksi.service.js";
import { Link } from "react-router-dom";

const ListEvalRef = () => {
  const [Evaluasi, setEvaluasi] = useState([]);
  const [Refleksi, setRefleksi] = useState([]);

  useEffect(() => {
    EvaluasiService.getEvaluasi().then((response) => {
      setEvaluasi(response.data);
    });
  }, []);

  useEffect(() => {
    RefleksiService.getRefleksi().then((response) => {
      setRefleksi(response.data);
    });
  }, []);

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="font-bold text-xl mb-2">Evaluasi</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {Evaluasi.map((evaluasi, index) => {
            return (
              <div
                key={index}
                className="w-full px-6 py-4 lg:max-w-sm rounded-md overflow-hidden shadow-lg bg-white"
              >
                <Link to={evaluasi._id}>
                  <div className="font-bold text-xl mb-2">
                    {evaluasi.pertemuan}
                  </div>
                  <p className="text-gray-700 text-base">
                    {evaluasi.description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-2">Refleksi</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {Refleksi.map((refleksi, index) => {
            return (
              <div
                key={index}
                className="w-full lg:max-w-sm rounded-md px-6 py-4 overflow-hidden shadow-lg bg-white"
              >
                <Link to={`refleksi/${refleksi._id}`}>
                  <div className="font-bold text-xl mb-2">
                    {refleksi.pertemuan}
                  </div>
                  <p className="text-gray-700 text-base">
                    {refleksi.description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListEvalRef;
