import { useState } from "react";
import { toast } from "react-hot-toast";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successful, setSuccesful] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    if (username.length < 3 || username.length > 20) {
      toast.error("The username must be between 3 and 20 characters!");
      return false;
    }
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      toast.error("This is not a valid email!");
      return false;
    }
    if (password.length < 6 || password.length > 40) {
      toast.error("The password must be between 6 and 40 characters!");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await AuthService.register(username, email, password);
        toast.success(response.data.message);
        setSuccesful(true);
        navigate("/login");
      } catch (error) {
        toast.error(error.response.data.message);
        setSuccesful(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          {!successful && (
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                        className="bi bi-eye text-slate-600"
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
                        className="bi bi-eye-slash-fill text-slate-600"
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
                <button className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
