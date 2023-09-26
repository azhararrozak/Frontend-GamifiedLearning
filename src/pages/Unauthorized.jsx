

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="/401.png" // Ganti dengan URL gambar Anda
          alt="Unauthorized"
          className="mx-auto mb-4 w-1/6"
        />
        <h1 className="text-2xl font-semibold text-red-600">401 Unauthorized</h1>
        <p className="text-gray-600">You do not have permission to access this page. Please, Login First.</p>
      </div>
    </div>
  );
};

export default Unauthorized;