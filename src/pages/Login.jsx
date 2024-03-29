import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { motion } from "framer-motion";

const Login = () => {
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLoginPage(location.pathname === "/login");
  }, [location.pathname]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.login(username, password);
      toast.success("login success");
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-secondary min-h-screen relative bg-cover bg-center bg-[url(../bg-login-regis.png)] flex lg:flex-row flex-col p-2">
      <img
        className="absolute bottom-0 w-1/2 lg:left-20 lg:transform-none  left-1/2 transform -translate-x-1/2"
        src="./person-log-regis.png"
      />
      <div className="lg:w-3/5 w-full lg:h-[500px] flex justify-center items-center text-primary z-10">
        <div className="p-3 text-center">
          <Link to={"/"}>
            <img className="m-auto" alt="logo_image" src="./Logo.png" />
          </Link>
          <p className="text-2xl my-2">Selamat Datang</p>
          <h1 className="text-4xl font-bold ">Gamified Learn</h1>
          <p className="my-4 font-secondary">
            Kami membawa pembelajaran perulangan JavaScript menjadi lebih seru
            dan efektif. Dengan kombinasi materi pembelajaran yang mendalam,
            ujian interaktif, dan sistem poin serta badges. Jelajahi beragam
            topik, peroleh poin untuk setiap pencapaian, dan raih badges sebagai
            pengakuan atas keberhasilan Anda. Segera bergabung untuk mengasah
            keterampilan pemrograman JavaScript Anda dengan cara yang inovatif
            dan menyenangkan!
          </p>
          <div className="py-2 w-fit m-auto rounded-lg mb-4">
            <Link
              to="/login"
              className={`py-2 px-4 border-y-2 border-l-2 font-bold  ${
                isLoginPage && "text-primary bg-accent rounded-l-lg"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border-2 font-bold border-fontPrimary rounded-r-lg py-2 px-4"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full flex justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-50%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="md:w-80 rounded-md p-4 bg-secondary border border-primary text-primary"
        >
          <h1 className="text-center my-4 font-bold uppercase">
            Login Akun Disini
          </h1>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md bg-primary  text-secondary focus:outline-none focus:border-primary"
                  placeholder="Masukkan Username Anda"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border rounded-md bg-primary  text-secondary focus:outline-none focus:border-primary"
                    placeholder="Masukkan Password Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye text-secondary"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash-fill text-secondary"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />{" "}
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />{" "}
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <button
                  disabled={loading}
                  className="w-full px-3 py-4 text-primary bg-accent uppercase font-bold rounded-md hover:bg-primary hover:text-accent hover:border hover:border-primary transition duration-200"
                >
                  Login Akun Sekarang
                </button>
                {loading && (
                  <div className="flex justify-center items-center">
                    <InfinitySpin width="200" color="#4fa94d" />
                  </div>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
