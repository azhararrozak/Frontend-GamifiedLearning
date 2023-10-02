import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";

const DashboardContent = () => {
  const [user, setUser] = useState(undefined);
  const [pointData, setPointData] = useState({
    point: 0,
  }); // State untuk menyimpan data poin

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/api/${user.id}/point`, { headers: authHeader() })
        .then((response) => {
          setPointData(response.data); // Menyimpan data poin ke dalam state
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div>
      {pointData && (
        <div>
          <p>Point: {pointData.point}</p>
          {/* Anda dapat menambahkan lebih banyak elemen JSX sesuai kebutuhan */}
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
