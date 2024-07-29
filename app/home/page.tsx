'use client'

import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdLogOut } from "react-icons/io";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    university: '',
    subject: ''
  });

  useEffect(() => {
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
    setUsers(users);
  }, []);

  const handleEdit = (index :any) => {
    setEditIndex(index);
    setEditFormData(users[index]);
  };

  const handleDelete = (index : any) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editFormData;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditIndex(null);
  };



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="font-extrabold text-3xl">Users</h1>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="mt-4 p-4 bg-gray-100 rounded relative">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="text"
                  name="university"
                  value={editFormData.university}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <select
                  name="subject"
                  value={editFormData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
                <button
                  onClick={handleSave}
                  className="p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>University:</strong> {user.university}</p>
                <p><strong>Subject:</strong> {user.subject}</p>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <FaEdit
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(index)}
                  />
                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}

    </div>
  );
};

export default Home;
