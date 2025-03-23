import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    profileUrl: "",
    gender: "",
  });

  const changeEventHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //getting data
  const fetchUserById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  //editing data
  const editUserHandler = async (e) => {
    e.preventDefault();

    //API calling
    try {
      await axios.put(`http://localhost:3000/users/${id}`, userData);
      alert("User Updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-[50px] font-extrabold text-center bg-slate-800 text-white py-3">
        Edit User
      </h1>

      <form
        onSubmit={editUserHandler}
        className="flex flex-col gap-5 items-center justify-center mt-10"
      >
        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userData.lastName}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Email ID:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Mobile Number:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={userData.mobile}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Profile Url:
          </label>
          <input
            type="text"
            name="profileUrl"
            id="profileUrl"
            value={userData.profileUrl}
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black cursor-pointer"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Gender:
          </label>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="gender"
              id="male"
              checked={userData.gender === "male"}
              onChange={changeEventHandler}
              value="male"
              className="cursor-pointer"
            />
            <label htmlFor="male" className="text-2xl cursor-pointer">
              Male
            </label>

            <input
              type="radio"
              name="gender"
              id="female"
              checked={userData.gender === "female"}
              onChange={changeEventHandler}
              value="female"
              className="cursor-pointer"
            />
            <label htmlFor="female" className="text-2xl cursor-pointer">
              Female
            </label>
          </div>
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <button className="cursor-pointer px-2 py-3 w-full rounded-lg text-white bg-red-600 font-bold">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
