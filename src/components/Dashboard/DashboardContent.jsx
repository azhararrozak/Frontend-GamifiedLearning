/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import PointService from "../../services/point.service";
import BadgeService from "../../services/badge.service";
import { GiAchievement } from "react-icons/gi";
import { MdFindInPage } from "react-icons/md";

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
      PointService.getPoint(user.id).then((response) => {
        setPointData(response.data);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user && user.id) {
      BadgeService.getBadges(user.id).then((response) => {
        setBadgeData(response.data);
      });
    }
  }, [user]);

  useEffect(() => {
    PointService.getALlPoint().then((response) => {
      // Sort the data in descending order based on the 'point' property
      const sortedData = response.data.sort((a, b) =>
        sortOrder === "desc" ? b.point - a.point : a.point - b.point
      );
      setAllUserPoint(sortedData);
    });
  }, [sortOrder]);

  return (
    <div>
      {user && (
        <div>
          <div className="grid grid-rows-2 grid-cols-2 gap-2 lg:gap-1 text-secondary">
            <div className=" row-span-2 col-span-2 md:col-span-1 rounded-lg flex">
              <div className="flex items-center justify-start h-full w-full bg-[#4055D4] rounded-md lg:rounded-r-none lg:rounded-l-md p-4">
                <div className="p-2 mr-4 border rounded-full">
                  <img
                    className="rounded-full w-[150px]"
                    src={
                      user.profile
                        ? user.profile
                        : `https://ui-avatars.com/api/?name=${user.username}`
                    }
                    alt="profile"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold">{user.username}</h3>
                  <p>{user.roles === "ROLE_USER" ? "Admin" : "Pelajar"}</p>
                  <p>Sekolah</p>
                </div>
              </div>
              <div className="w-0 border-t-[100px] border-t-transparent border-l-[30px] border-l-[#4055D4] border-b-[100px] border-b-transparent hidden lg:inline"></div>
            </div>
            <div className="flex">
              <div className="w-0 h-0 border-r-[30px] border-r-[#130F40] border-b-[100px] border-b-transparent hidden lg:inline"></div>
              {pointData && (
                <div className="bg-[#130F40] rounded-md lg:rounded-l-none rounded-r-md flex w-full justify-center items-center p-4">
                  <div className="border rounded-full p-2 mr-3">
                    <GiAchievement className="text-4xl" />
                  </div>
                  <p className="lg:text-4xl sm:text-2xl text-md font-bold text-fontSecondary">
                    {pointData.point}
                    <span className="text-sm font-normal text-secondary">
                      {" "}
                      poin
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-0 h-0 border-t-[100px] border-t-transparent border-r-[30px] border-r-[#2B3890] hidden lg:inline"></div>
              <div className="bg-[#2B3890] rounded-md lg:rounded-l-none rounded-r-md flex w-full justify-center items-center p-4 text-center">
                <div className="border rounded-full p-2 mr-3">
                  <MdFindInPage className="text-4xl" />
                </div>
                <p className="font-bold lg:text-4xl sm:text-2xl text-md">
                  {/** Menampilkan Rank dari allUserPoint */}
                  {allUserPoint &&
                    allUserPoint.findIndex(
                      (userPoint) => userPoint.user._id === user.id
                    ) + 1}
                  <span className="font-normal text-sm text-secondary">
                    {" "}
                    Global Rank
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex-col flex gap-2 my-2">
            <div className="lg:w-3/4 w-full bg-[#C1F6BF] rounded-md p-4 text-primary">
              <h1 className="font-bold text-xl mb-4">Tabel Point Klasemen</h1>
              {allUserPoint && (
                <table className="w-full border-collapse">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-2 border-secondary border">
                        Rank
                      </th>
                      <th className="px-4 py-2 border-secondary border">
                        Username
                      </th>
                      <th className="px-4 py-2 border-secondary border">
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUserPoint.map((userPoint, index) => {
                      return (
                        <tr
                          key={userPoint._id}
                          className="max-w-fit my-2 p-4 text-center"
                        >
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="capitalize px-4 py-2">
                            {userPoint.user.username}
                          </td>
                          <td>{userPoint.point}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="lg:w-1/4 w-full rounded-md bg-[#FF7537] p-4 text-fontPrimary">
              <h1 className="font-bold text-xl">Badge</h1>
              {badgeData.length === 0 ? (
                <div>
                  <h1>Tidak Ada Badges</h1>
                </div>
              ) : (
                <div>
                  {badgeData.map((badge) => {
                    return (
                      <div
                        key={badge._id}
                        className="flex justify-center items-center my-2 p-4"
                      >
                        <div className="bg-fontPrimary p-2 rounded-full">
                          <img
                            src={badge.image}
                            alt="badge"
                            className="w-10 rounded-full"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-bold">{badge.name}</p>
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
