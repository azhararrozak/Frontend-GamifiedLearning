import { useState, useEffect } from "react";
import HasilNilaiService from "../../services/hasilnilai.service";

const HasilNilaiPretest = () => {
  const [nilaiPretest, setNilaiPretest] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    HasilNilaiService.getHasilNilaiPretest()
      .then((response) => {
        setNilaiPretest(response.data);
        setAnswer(response.data[0].answers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(nilaiPretest);


  return (
    <div>
      <h1 className="text-center text-2xl my-4 font-bold">
        Hasil Nilai Pretest Siswa
      </h1>

      <div className="p-3">
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary"> Nama Siswa</th>
            {answer &&
              answer.map((soal, index) => (
                <th key={index} className="border border-secondary">
                  S{index + 1} {/*<span>({soal.indicator})</span>*/}
                </th>
              ))}
            <th className="border border-secondary">Soal Benar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {nilaiPretest &&
            nilaiPretest.map((jawaban, index) => (
              <tr key={index}>
                <td className="border border-secondary">{index + 1}</td>
                <td className="border border-secondary">R{index + 1}</td>
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

      <div className="p-3">
      <h1 className="text-center text-2xl my-4 font-bold"> Berdasarkan Indikator Penarikan Kesimpulan</h1>
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary"> Nama Siswa</th>
            {answer &&
              answer.filter(a => a.indicator === "Penarikan Kesimpulan").map((soal, index) => (
                <th key={index} className="border border-secondary">
                  S{index + 1} {/*<span>({soal.indicator})</span>*/}
                </th>
              ))}
            <th className="border border-secondary">Soal Benar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {nilaiPretest &&
            nilaiPretest.map((jawaban, index) => (
              <tr key={index}>
                <td className="border border-secondary">{index + 1}</td>
                <td className="border border-secondary">R{index + 1}</td>
                {jawaban.answers.filter(a => a.indicator === "Penarikan Kesimpulan").map((soal, index) => (
                  <td key={index} className="border border-secondary">{soal.isCorrect ? "1" : "0"}</td>
                ))}
                <td className="border border-secondary">
                  {jawaban.answers.filter(a => a.indicator === "Penarikan Kesimpulan").filter((soal) => soal.isCorrect).length}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>

      <div className="p-3">
      <h1 className="text-center text-2xl my-4 font-bold"> Berdasarkan Indikator Keruntutan Berpikir</h1>
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary"> Nama Siswa</th>
            {answer &&
              answer.filter(a => a.indicator === "Keruntutan Berpikir").map((soal, index) => (
                <th key={index} className="border border-secondary">
                  S{index + 1} {/*<span>({soal.indicator})</span>*/}
                </th>
              ))}
            <th className="border border-secondary">Soal Benar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {nilaiPretest &&
            nilaiPretest.map((jawaban, index) => (
              <tr key={index}>
                <td className="border border-secondary">{index + 1}</td>
                <td className="border border-secondary">R{index + 1}</td>
                {jawaban.answers.filter(a => a.indicator === "Keruntutan Berpikir").map((soal, index) => (
                  <td key={index} className="border border-secondary">{soal.isCorrect ? "1" : "0"}</td>
                ))}
                <td className="border border-secondary">
                  {jawaban.answers.filter(a => a.indicator === "Keruntutan Berpikir").filter((soal) => soal.isCorrect).length}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>

      <div className="p-3">
      <h1 className="text-center text-2xl my-4 font-bold"> Berdasarkan Indikator Kemampuan Berargumen</h1>
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary"> Nama Siswa</th>
            {answer &&
              answer.filter(a => a.indicator === "Kemampuan Berargumen").map((soal, index) => (
                <th key={index} className="border border-secondary">
                  S{index + 1} {/*<span>({soal.indicator})</span>*/}
                </th>
              ))}
            <th className="border border-secondary">Soal Benar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {nilaiPretest &&
            nilaiPretest.map((jawaban, index) => (
              <tr key={index}>
                <td className="border border-secondary">{index + 1}</td>
                <td className="border border-secondary">R{index + 1}</td>
                {jawaban.answers.filter(a => a.indicator === "Kemampuan Berargumen").map((soal, index) => (
                  <td key={index} className="border border-secondary">{soal.isCorrect ? "1" : "0"}</td>
                ))}
                <td className="border border-secondary">
                  {jawaban.answers.filter(a => a.indicator === "Kemampuan Berargumen").filter((soal) => soal.isCorrect).length}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default HasilNilaiPretest;
