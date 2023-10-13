import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";

const SettingsContent = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  return (
    <div>
      { user && (
        <div>
           <h1 className="font-bold text-2xl mb-8">Settings</h1>
      <div className="lg:flex">
        <div className="lg:w-1/2 p-4">
          <div className="border bg-blue-500 rounded-xl p-4">
            <h1 className="text-white text-2xl font-bold capitalize">{user.username}</h1>
            <p className="text-white">Username is your identity in this application</p>
          </div>
        </div>
        <div className="lg:w-1/2 p-4">
          <div className="border p-4 rounded-xl bg-white drop-shadow-md">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p>Profile is your identity in this application</p>
            <div className="flex items-center justify-center my-4">
                <div className="border p-1 w-max rounded-xl">
                  <img src="https://i.pravatar.cc/200" alt="profile" className="w-32 h-32 rounded-xl" />
                </div>
            </div>
            <div>
              <label htmlFor="username" className="block font-bold">Username</label>
              <input disabled value={user.username} type="text" name="username" id="username" className="border rounded-xl p-2 w-full opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold">Email</label>
              <input disabled value={user.email} type="text" name="email" id="email" className="border rounded-xl p-2 w-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
     

    </div>
  )
}

export default SettingsContent