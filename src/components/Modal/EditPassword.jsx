import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import UserService from '../../services/user.service';

const EditPassword = ({ user, isOpen, onClose }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleUpdatePassword = async () => {
    try {
      await UserService.updatePassword(user._id, newPassword);
      toast.success('Password updated successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to update password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Update Password for {user.username}</h2>
        <input
          type="password"
          className="border p-2 mb-4 w-full"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdatePassword}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
