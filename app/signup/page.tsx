    // 'use client'
    // import React, { useState } from 'react';

    // const SignUp = () => {
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //     name: '',
    //     university: '',
    //     subject: 'Mathematics'
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //     ...prevState,
    //     [name]: value
    //     }));
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     localStorage.setItem('user', JSON.stringify(formData));
    //     console.log('User data saved:', formData);
    //     window.location.href = '/login';
    // };

    // return (
    //     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    //     <h1 className='font-extrabold text-3xl'>Authentication App</h1>
    //     <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //         <label className="block text-gray-700">Name</label>
    //         <input
    //             type="text"
    //             name="name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //         />
    //         </div>
    //         <div className="mb-4">
    //         <label className="block text-gray-700">Email</label>
    //         <input
    //             type="email"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //         />
    //         </div>
    //         <div className="mb-4">
    //         <label className="block text-gray-700">Password</label>
    //         <input
    //             type="password"
    //             name="password"
    //             value={formData.password}
    //             onChange={handleChange}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //         />
    //         </div>
    //         <div className="mb-4">
    //         <label className="block text-gray-700">University</label>
    //         <input
    //             type="text"
    //             name="university"
    //             value={formData.university}
    //             onChange={handleChange}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //         />
    //         </div>
    //         <div className="mb-4">
    //         <label className="block text-gray-700">Subject</label>
    //         <select
    //             name="subject"
    //             value={formData.subject}
    //             onChange={handleChange}
    //             className="w-full p-2 border border-gray-300 rounded"
    //         >
    //             <option value="Mathematics">Mathematics</option>
    //             <option value="Physics">Physics</option>
    //             <option value="Chemistry">Chemistry</option>
    //             <option value="Biology">Biology</option>
    //             <option value="Computer Science">Computer Science</option>
    //         </select>
    //         </div>
    //         <button
    //         type="submit"
    //         className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
    //         >
    //         Sign Up
    //         </button>
    //     </form>
    //     </div>
    // );
    // };

    // export default SignUp;



    'use client'
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    university: '',
    subject: 'Mathematics'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User data saved:', formData);
    window.location.href = '/login';
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className='font-extrabold text-3xl'>Authentication App</h1>
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

