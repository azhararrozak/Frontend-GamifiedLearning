/* eslint-disable no-unused-vars */
import AuthService from "../../services/auth.service";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";

const DashboardContent = () => {
  const [user, setUser] = useState(undefined);
  const [pointData, setPointData] = useState({
    point: 0,
  });
  const [badgeData, setBadgeData] = useState([]);
  const [allUserPoint, setAllUserPoint] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/api/${user.id}/point`, {
          headers: authHeader(),
        })
        .then((response) => {
          setPointData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user && user.id) {
      axios
        .get(`http://localhost:5000/api/${user.id}/badge`, {
          headers: authHeader(),
        })
        .then((response) => {
          setBadgeData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/point`, {
        headers: authHeader(),
      })
      .then((response) => {
        // Sort the data in descending order based on the 'point' property
        const sortedData = response.data.sort((a, b) =>
          sortOrder === "desc" ? b.point - a.point : a.point - b.point
        );
        setAllUserPoint(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sortOrder]);

  return (
    <div>
      {user && (
        <div>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <div className="border row-span-2 col-span-2 sm:col-span-1 p-2 rounded-lg">
              <div className="flex items-center justify-start h-full">
                <div className="p-2 mr-4 border rounded-full">
                  <img
                    className="rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="profile"
                  />
                </div>
                <div>
                  <h3>{user.username}</h3>
                  <p>Point</p>
                  <p>Sekolah</p>
                </div>
              </div>
            </div>
            <div className="border flex justify-center items-center">
              {pointData && (
                <div>
                  <p className="text-2xl font-bold">{pointData.point}<span className="text-sm font-normal"> poin</span></p>
                </div>
              )}
            </div>
            <div className="border">
              <h1>Permasalahan</h1>
            </div>
          </div>
          <div className="sm:flex-row flex-col flex gap-2 my-2">
            <div className="sm:w-3/4 w-full border">
              <h1>Tabel Point Klasemen</h1>
              {allUserPoint && (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Username</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUserPoint.map((userPoint, index) => {
                      return (
                        <tr
                          key={userPoint._id}
                          className="border max-w-fit my-2 p-4"
                        >
                          <td>{index + 1}</td>
                          <td>{userPoint.user.username}</td>
                          <td>{userPoint.point}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="sm:w-1/4 w-full border">
              {badgeData && (
                <div>
                  <h1>Badge</h1>
                  {badgeData.map((badge) => {
                    return (
                      <div key={badge._id} className="flex border my-2 p-4">
                        <img
                          src={badge.image}
                          alt="badge"
                          className="w-10 rounded-full"
                        />
                        <div>
                          <p>{badge.name}</p>
                          <p>{badge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
