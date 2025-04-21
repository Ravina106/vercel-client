import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import "../adduser/Add.css";

const Add = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create`, user);
      toast.success("User added successfully!", { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to add user", { position: "top-right" });
    }
  };

  return (
    <div className='addUser'>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            value={user.lname}
            onChange={inputChangeHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={user.password}
            onChange={inputChangeHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
