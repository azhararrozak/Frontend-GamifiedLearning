import { useState, useEffect } from "react";
import GroupService from "../../services/group.service";
import AuthService from "../../services/auth.service";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const StudyGroup = () => {
  const [user, setUser] = useState(undefined);
  const [studyGroup, setStudyGroup] = useState([]);
  const [countGroup, setCountGroup] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    GroupService.getGroups()
      .then((response) => {
        setStudyGroup(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeletAllGroup = () => {
    GroupService.deleteGroup()
      .then((response) => {
        toast.success(response.data.message);
        setStudyGroup([]);
      })
      .catch((err) => console.log(err));
  };

  const handleCountGroupChange = (e) => {
    setCountGroup(e.target.value);
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await GroupService.createGroup(countGroup);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl text-center mb-2">
        Study Group
      </h1>
      
        {user && user.roles.includes("ROLE_ADMIN") && (
          <div className="flex justify-left items-center p-4 my-4">
          <div className="w-full">
            <form onSubmit={handleCreateGroup}>
              <div className="mb-3">
                <label htmlFor="countGroup" className="block">
                  Number of Groups
                </label>
                <input
                  type="number"
                  className="bg-fontPrimary border rounded-md w-full py-2 "
                  id="countGroup"
                  onChange={handleCountGroupChange}
                />
              </div>
              <button type="submit" className="border px-4 py-2 rounded-md bg-primary font-bold text-fontPrimary">
                Submit
              </button>
            </form>
            <button
              onClick={handleDeletAllGroup}
              className="border px-4 py-2 mt-2 rounded-md bg-red-500 font-bold text-fontPrimary"
            >
              Delete All
            </button>
          </div>
          </div>
        )}


      {/*Table Group */}
      <table className="border-collapse w-full text-center">
        <thead className="bg-secondary">
          <tr>
            <th className="px-4 py-2 border-secondary border-y-2 text-primary">Group Name</th>
            <th className="px-4 py-2 border-secondary border-y-2 text-primary">Group Members</th>
            <th className="px-4 py-2 border-secondary border-y-2 text-primary">Group Leader</th>
            <th className="px-4 py-2 border-secondary border-y-2 text-primary">Problem</th>
          </tr>
        </thead>
        <tbody>
          {studyGroup.map((group, index) => (
            <tr key={index} className="max-w-fit">
              <td className="px-4 py-2 border-secondary border-b-2">{group.name}</td>
              <td className="px-4 py-2 border-secondary border-b-2 text-left">
                {group.members.map((member, index) => (
                  <ul className="list-disc" key={index}>
                    <li>{member.username}</li>
                  </ul>
                ))}
              </td>
              <td className="px-4 py-2 border-secondary border-b-2">{group.lead.username}</td>
              <td className="px-4 py-2 border-secondary border-b-2">
                <div className="flex items-center justify-between">
                  <p className="w-1/2">{group.problem.title}</p>
                    {user && user.id === group.lead._id && (
                      <Link
                        to={`${group._id}`}
                        className="w-1/2 bg-accent text-primary hover:bg-primary hover:border-secondary hover:border hover:text-accent p-1 rounded-md"
                      >
                        Pilih problem
                      </Link>
                    )}
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyGroup;
