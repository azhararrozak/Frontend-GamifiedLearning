import { useState, useEffect } from "react";
import GroupService from "../../services/group.service";
import AuthService from "../../services/auth.service";

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
        console.log(response.data);
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
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Study Group</h1>
      <div>
        {user && user.roles.includes("ROLE_ADMIN") && (
          <div>
            <form onSubmit={handleCreateGroup}>
              <div className="mb-3">
                <label htmlFor="countGroup" className="form-label">
                  Number of Groups
                </label>
                <input type="number" className="form-control" id="countGroup" onChange={handleCountGroupChange}/>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <button
              onClick={handleDeletAllGroup}
              className="m-3 btn btn-sm btn-danger"
            >
              Delete All
            </button>
          </div>
        )}
      </div>

      {/*Table Group */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Group Name</th>
            <th scope="col">Group Members</th>
            <th scope="col">Problem</th>
          </tr>
        </thead>
        <tbody>
          {studyGroup.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>
                {group.members.map((member, index) => (
                  <p key={index}>{member.username}</p>
                ))}
              </td>
              <td>{group.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudyGroup;
