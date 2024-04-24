import { useState, useEffect } from "react";
import HasilNilaiService from "../../services/hasilnilai.service";

const HasilNilaiPostest = () => {
  const [nilaiPostest, setNilaiPostest] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    HasilNilaiService.getHasilNilaiPostest()
      .then((response) => {
        setNilaiPostest(response.data);
        setAnswer(response.data[0].answers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Hasil Nilai Postest Siswa</h1>

      <div className="p-3">
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary"> Nama Siswa</th>
            {answer &&
              answer.map((soal, index) => (
                <th key={index} className="border border-secondary">
                  Soal {index + 1} <span>({soal.indicator})</span>
                </th>
              ))}
            <th className="border border-secondary">Soal Benar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {nilaiPostest &&
            nilaiPostest.map((jawaban, index) => (
              <tr key={index}>
                <td className="border border-secondary">{index + 1}</td>
                <td className="border border-secondary">{jawaban.user.username}</td>
                {jawaban.answers.map((soal, index) => (
                  <td key={index} className="border border-secondary">{soal.isCorrect ? "1" : "0"}</td>
                ))}
                <td className="border border-secondary">
                  {jawaban.answers.filter((soal) => soal.isCorrect).length}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default HasilNilaiPostest;
