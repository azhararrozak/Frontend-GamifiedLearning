import axios from "axios";
import {useState} from "react";
import {toast} from "react-hot-toast"

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setContactData({...contactData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {name, email, message} = contactData;
      const response = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });
      toast.success(response.data.message);
      setContactData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Hubungi Kami</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleInputChange}
              className="w-full border rounded-md py-2 px-3 h-32 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Masukkan Pesan Anda"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
