import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";
import { storage } from "../../utils/firebaseInit";

const SettingsContent = () => {
  const [user, setUser] = useState(undefined);
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [fulldata, setFulldata] = useState({
    urlProfile: "",
    address: "",
    phone: "",
    school: "",
  });

  const idUser = AuthService.getCurrentUser().id;

  useEffect(() => {
    UserService.getUserById(idUser).then(
      (response) => {
        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [idUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFulldata({ ...fulldata, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // Jika ada gambar yang dipilih
    if (selectedImage) {
      // Buat objek URL dari gambar yang dipilih
      const imageURL = URL.createObjectURL(selectedImage);

      // Set state untuk menampilkan gambar sementara
      setPreviewURL(imageURL);
    }

    // Set state untuk menyimpan gambar yang dipilih
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (image) {
        const storageRef = storage.ref().child(`profile_images/${idUser}`);
        const uploadTask = storageRef.put(image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress if needed
          },
          (error) => {
            console.error(error);
          },
          () => {
            // On complete, get the download URL and update user data
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log(downloadURL);

              // Update fulldata with the new URL
              setFulldata((prevData) => ({
                ...prevData,
                urlProfile: downloadURL,
              }));

              // After updating the image URL, update the user data
              const { address, phone, school } = fulldata;
              UserService.updateUser(
                idUser,
                downloadURL,
                address,
                phone,
                school
              )
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          }
        );
      } else {
        // If no new image is selected, just update user data with existing fulldata
        const { urlProfile, address, phone, school } = fulldata;
        UserService.updateUser(idUser, urlProfile, address, phone, school)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                  <div className="mb-4">
                    <label htmlFor="phone" className="block font-bold">
                      Phone
                    </label>
                    <input
                      disabled
                      value={user.phone}
                      type="text"
                      name="phone"
                      id="phone"
                      className="border rounded-xl p-2 w-full opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block font-bold">
                      Address
                    </label>
                    <input
                      disabled
                      value={user.address}
                      type="text"
                      name="address"
                      id="address"
                      className="border rounded-xl p-2 w-full opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="school" className="block font-bold">
                      School
                    </label>
                    <input
                      disabled
                      value={user.school}
                      type="text"
                      name="school"
                      id="school"
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
                  {previewURL && (
                    <div className="mb-4">
                      <img
                        src={previewURL}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <label htmlFor="urlProfile" className="block text-gray-700">
                      Foto Profil
                    </label>
                    <input
                      type="file"
                      name="urlProfile"
                      id="urlProfile"
                      onChange={handleImageChange}
                    />
                  </div>
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
                      value={fulldata.school}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                  >
                    Simpan
                  </button>
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
