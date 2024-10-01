import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'

const Add = () => {
    const [formData, setFormData] = useState({
        name: '',
        gitlink: '',
        linkdin: '',
      });
      const [mess, setMess] = useState('Register Your self with Us');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData); // Handle form submission
        let a = JSON.stringify(formData);
        // console.log(a)
        let fetch = await axios.post(import.meta.env.VITE_MONGODB_URL_ADD,formData, {
            headers: {
                'Content-Type': 'application/json'
              } 
            }
        );
        let d = await fetch.data;
        if (d.status === 200) {

            // console.log(d)
            // datamess = d.mess;
            // datastatus = d.status;
            // setMess(d.mess)
            // setMess(datamess)
            alert('Registration done');
            navigate('/');
        } else {
            alert(d.mess)
            
            // datamess = d.mess;
            // datastatus = d.status;
            // setMess(d.mess)
            // setMess(datamess);

        }
      };
     
  return (
    <>
      {/* <div className="bg-slate-950 flex flex-row justify-center align-middle">
        <h2 className='text-gray-200'>Register your self</h2>
         <button className='flex flex-row justify-end mr-6 bg-amber-500 text-gray-100'><Link to="/">back</Link></button>
          
          
      </div> */}
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">{mess}</h2>
        
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Github profile link
          </label>
          <input
            type="text"
            name="gitlink"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your GitHub profile Link"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Linkedin Profile Link
          </label>
          <input
            type="text"
            name="linkdin"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your LinkedIn profile Link"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full mx-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
          >
            Register
          </button>
          <Link to="/"><button className='w-full mx-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300'>Back</button></Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Add