import { useState, useEffect } from "react";
import HasilNilaiService from "../../services/hasilnilai.service";

const HasilNilaiPretest = () => {
  const [nilaiPretest, setNilaiPretest] = useState(0);

  useEffect(() => {
    HasilNilaiService.getHasilNilaiPretest()
      .then((response) => {
        setNilaiPretest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hasil Nilai Pretest Siswa</h1>

      {nilaiPretest ? (
        nilaiPretest.map((nilai, index) => (
          <table
            key={index}
            className="border-collapse border border-green-800"
          >
            <thead>
              <tr>
                <th className="border border-green-600">No</th>
                <th className="border border-green-600">Nama Siswa</th>
                {nilai.answers &&
                  nilai.answers.map((jawaban, index) => (
                    <th key={index} className="border border-green-600">
                      Soal {index + 1}
                    </th>
                  ))}
                <th className="border border-green-600">Jumlah Benar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-600">{index + 1}</td>
                <td className="border border-green-600">
                  {nilai.user.username}
                </td>
                {nilai.answers &&
                  nilai.answers.map((jawaban, index) => (
                    <td key={index} className="border border-green-600">
                      {jawaban.isCorrect ? "1" : "0"}
                    </td>
                  ))}
                {nilai.answers && (
                  <td className="border border-green-600">
                    {
                      nilai.answers.filter((jawaban) => jawaban.isCorrect)
                        .length
                    }
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <div>
          <h1>Belum Ada nilai pretest</h1>
        </div>
      )}
    </div>
  );
};

export default HasilNilaiPretest;
