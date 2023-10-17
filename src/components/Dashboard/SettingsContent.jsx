import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";

const SettingsContent = () => {
  const [user, setUser] = useState(undefined);
  const [fulldata, setFulldata] = useState({
    address: "",
    phone: "",
    school: "",
  });

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSubmit = () => {};

  const handleInputChange = () => {};

  return (
    <div>
      {user && (
        <div>
          <h1 className="font-bold text-2xl mb-8">Settings</h1>
          <div className="lg:flex">
            <div className="lg:w-1/2 p-4">
              <div className="border bg-blue-500 rounded-xl p-4 mb-4">
                <h1 className="text-white text-2xl font-bold capitalize">
                  {user.username}
                </h1>
                <p className="text-white">
                  Username is your identity in this application
                </p>
              </div>
              <div className="border p-4 rounded-xl bg-white drop-shadow-md">
                <h1 className="text-2xl font-bold">Profile</h1>
                <p>Profile is your identity in this application</p>
                <form>
                  <div className="flex items-center justify-center my-4">
                    <div className="border p-1 w-max rounded-xl">
                      <img
                        src={user.urlProfile || "https://i.pravatar.cc/200"}
                        alt="profile"
                        className="w-32 h-32 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="username" className="block font-bold">
                      Username
                    </label>
                    <input
                      disabled
                      value={user.username}
                      type="text"
                      name="username"
                      id="username"
                      className="border rounded-xl p-2 w-full opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-bold">
                      Email
                    </label>
                    <input
                      disabled
                      value={user.email}
                      type="text"
                      name="email"
                      id="email"
                      className="border rounded-xl p-2 w-full opacity-50"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-1/2 p-4">
              <div className="border p-4 rounded-xl bg-white drop-shadow-md">
                <h1 className="text-lg font-bold mb-4">Lengkapi Data</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={fulldata.address}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={fulldata.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                  <label htmlFor="school" className="block text-gray-700">
                      School
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={fulldata.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsContent;
