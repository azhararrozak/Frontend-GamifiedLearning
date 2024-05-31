import { useState, useEffect } from "react";
import EvaluasiService from "../../services/evaluasi.service.js.js";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EvalDetailPage = () => {
  const { evalId } = useParams();
  const [EvaluasiAllData, setEvaluasiAllData] = useState([]);
  const [EvalData, setEvalData] = useState({
    ketua: "",
    kelompok: "",
    content: ""
  })

  useEffect(() => {
    EvaluasiService.getEvaluasiById(evalId).then((response) => {
      setEvaluasiAllData(response.data.evaluasi);
    });
  }, [evalId]);

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setEvalData({...EvalData, [name]: value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const {ketua, kelompok, content} = EvalData
        const response = await EvaluasiService.pushEvaluasi(evalId,ketua, kelompok, content)
        toast.success(response.data.message)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="p-6">
      <div>
        <h1 className="font-bold text-lg">
          Masukkan Pemecahan Masalah yang Sudah di Diskusikan
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="ketua" className="block text-gray-700">
                Ketua
              </label>
              <input
                type="text"
                id="ketua"
                name="ketua"
                value={EvalData.ketua}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="kelompok" className="block text-gray-700">
              Kelompok
              </label>
              <input
                type="text"
                id="kelompok"
                name="kelompok"
                value={EvalData.kelompok}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700">
                Pemecahan Masalah
              </label>
                <textarea
                    id="content"
                    name="content"
                    value={EvalData.content}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </form>
      </div>
      <div>
        <div className="grid grid-cols-4">
        {EvaluasiAllData.map((evalData, index) => 
            <div key={index} className="border bg-accent p-4 text-primary">
              <h1>{evalData.ketua}</h1>
              <h3>{evalData.kelompok}</h3>
              <p>{evalData.content}</p>
            </div>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default EvalDetailPage;
