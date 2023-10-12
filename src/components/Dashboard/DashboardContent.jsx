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
      {pointData && (
        <div>
          <p>Point: {pointData.point}</p>
        </div>
      )}
      {badgeData && (
        <div>
          <h1>Badge</h1>
          {badgeData.map((badge) => {
            return (
              <div key={badge._id} className="flex border max-w-fit my-2 p-4">
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
      <div>
        <h1>Leaderboard</h1>
        {allUserPoint && (
          <table>
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
                  <tr key={userPoint._id} className="border max-w-fit my-2 p-4">
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
    </div>
  );
};

export default DashboardContent;
