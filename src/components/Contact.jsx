
const Contact = () => {
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
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Pesan</label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded-md py-2 px-3 h-32 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Masukkan Pesan Anda"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
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
