/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import AuthService from "../../services/auth.service";
import PointService from "../../services/point.service";
import BadgeService from "../../services/badge.service";
import ScoreService from "../../services/score.service";
import { GiAchievement } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";

const DashboardContent = () => {
  const [user, setUser] = useState(undefined);
  const [pointData, setPointData] = useState({
    point: 0,
  });
  const [badgeData, setBadgeData] = useState([]);
  const [allUserPoint, setAllUserPoint] = useState([]);
  const [allScoreUser, setAllScoreUser] = useState([]);
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

  useEffect(() => {
    ScoreService.getAllScores().then((response) => {
      setAllScoreUser(response.data);
    });
  }, []);

  const generatePdf = () => {
    const documentDefinition = {
      content: [
        {
          text: "Skor Pengguna",
          style: "header",
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "*", "*"],
            body: [
              ["No", "Username", "Pretest", "Postest"],
              ...allScoreUser.map((scoreUser, index) => [
                index + 1,
                scoreUser.user.username,
                scoreUser.pretest,
                scoreUser.posttest, 
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
    };
  
    pdfMake.createPdf(documentDefinition).download("skor_pengguna.pdf");
  };
  

  return (
    <div className="p-6">
      {user && (
        <div>
          <div className="grid grid-rows-2 grid-cols-2 gap-2 lg:gap-1 text-primary">
            <div className=" row-span-2 col-span-2 md:col-span-1 rounded-lg flex">
              <div className="flex items-center justify-start h-full w-full bg-secondary rounded-md lg:rounded-r-none lg:rounded-l-md p-4">
                <div className="p-2 mr-4 border-2 rounded-full">
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
                  <h3 className="text-2xl font-bold capitalize">{user.username}</h3>
                  {user.roles.includes("ROLE_USER") ? (
                    <p>Pelajar</p>
                  ) : (
                    <p>Admin/Pengajar</p>
                  )}
                </div>
              </div>
              <div className="w-0 border-t-[100px] border-t-transparent border-l-[30px] border-l-secondary border-b-[100px] border-b-transparent hidden lg:inline"></div>
            </div>
            <div className="flex">
              <div className="w-0 h-0 border-r-[30px]  border-r-accent border-b-[100px] border-b-transparent hidden lg:inline"></div>
              {pointData && (
                <div className="bg-accent text-white rounded-md lg:rounded-l-none rounded-r-md flex w-full justify-center items-center p-4">
                  <div className="border rounded-full p-2 mr-3">
                    <GiAchievement className="text-4xl" />
                  </div>
                  <p className="lg:text-4xl sm:text-2xl text-md font-bold text-fontSecondary">
                    {pointData.point}
                    <span className="text-sm font-normal">
                      {" "}
                      poin
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-0 h-0 border-t-[100px] border-t-transparent border-r-[30px] border-r-accent hidden lg:inline"></div>
              <div className="bg-accent rounded-md lg:rounded-l-none rounded-r-md flex w-full justify-center items-center p-4 text-center">
                <div className="border rounded-full p-2 mr-3">
                  <FaRankingStar className="text-4xl" />
                </div>
                <p className="font-bold lg:text-4xl sm:text-2xl text-md">
                  {/** Menampilkan Rank dari allUserPoint */}
                  {allUserPoint &&
                    allUserPoint.findIndex(
                      (userPoint) => userPoint.user._id === user.id
                    ) + 1}
                  <span className="font-normal text-sm">
                    {" "}
                    Global Rank
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex-col flex gap-4 my-4 ">
            <div className="lg:w-3/4 w-full shadow-lg border rounded-md p-4 bg-white text-secondary">
              <h1 className="font-bold text-xl mb-4">Tabel Point Klasemen</h1>
              {allUserPoint && (
                <table className="w-full border-collapse">
                  <thead className="border-b-2 opacity-75">
                  <tr>
                    <th className="pl-6 py-2 text-left">
                      Username
                    </th>
                    <th className="px-4 py-2 ">
                      Rank
                    </th>
                    <th className="px-4 py-2 ">
                      Point
                    </th>
                  </tr>
                </thead>
                  <tbody>
                    {allUserPoint.map((userPoint, index) => {
                      return (
                        <tr
                          key={userPoint._id}
                          className="max-w-fit my-2 p-4 text-center font-medium"
                        >
                          <td className="capitalize px-4 py-2 text-left flex items-center">
                            <img className="rounded-full w-[3rem] mr-6" src={userPoint.user.urlProfile ? userPoint.user.urlProfile : `https://ui-avatars.com/api/?name=${userPoint.user.username}`} alt="user_profile"/>
                            <p>{userPoint.user.username}</p>
                          </td>
                          <td className="px-4 py-2">{index + 1}</td>
                          <td>{userPoint.point}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="lg:w-1/4 w-full border rounded-md shadow-lg p-4 bg-white text-secondary">
              <h1 className="font-bold text-xl">Badge</h1>
              {badgeData.length === 0 ? (
                <div className="flex h-full justify-center items-center">
                  <h1 className="text-accent">Tidak Ada Badges</h1>
                </div>
              ) : (
                <div>
                  {badgeData.map((badge) => {
                    return (
                      <div
                        key={badge._id}
                        className="flex justify-center items-center my-2 p-4"
                      >
                        <div className="bg-accent border border-secondary drop-shadow-lg p-2 rounded-full">
                          <img
                            src={badge.image}
                            alt="badge"
                            className="w-10 rounded-full"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="font-bold text-accent">{badge.name}</p>
                          <p>{badge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="p-4 text-secondary bg-white rounded-md shadow-lg border">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold text-xl">Skor Seluruh Pengguna</h1>
              <button onClick={generatePdf} className="border px-4 py-2 rounded-full bg-accent text-primary font-medium">Unduh PDF</button>
            </div>
            {allScoreUser && (
              <table className="w-full border-collapse">
                <thead className="">
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2 ">
                      Username
                    </th>
                    <th className="px-4 py-2 ">
                      Pretest
                    </th>
                    <th className="px-4 py-2 ">
                      Postest
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allScoreUser.map((scoreUser, index) => {
                    return (
                      <tr
                        key={scoreUser._id}
                        className="max-w-fit my-2 p-4 text-center"
                      >
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="capitalize px-4 py-2">
                          {scoreUser.user.username}
                        </td>
                        <td>{scoreUser.pretest}</td>
                        <td>{scoreUser.posttest}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
