import { useState, useEffect } from 'react';
import UserService from '../../services/user.service';
import EditPassword from '../Modal/EditPassword';
import { toast } from 'react-hot-toast';

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = async (userId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this user?');
    if (isConfirmed) {
      try {
        await UserService.deleteUser(userId);
        setUsers(users.filter(user => user._id !== userId));
        toast.success('User deleted successfully');
      } catch (error) {
        toast.error('Failed to delete user');
      }
    }
  };

  return (
    <div className="p-6">
      <table className="w-full border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary">Username</th>
            <th className="border border-secondary">Email</th>
            <th className="border border-secondary">Role</th>
            <th className="border border-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="border border-secondary">{index + 1}</td>
              <td className="border border-secondary">{user.username}</td>
              <td className="border border-secondary">{user.email}</td>
              <td className="border border-secondary">{user.roles[0].name}</td>
              <td className="border border-secondary">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => openModal(user)}
                >
                  Update Password
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <EditPassword
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UsersAdmin;
