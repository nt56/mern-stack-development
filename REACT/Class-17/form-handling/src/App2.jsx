import React, { useState } from "react";

const App2 = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    profile: null,
    gender: "",
  });

  //   const changeEventHandler = (e) => {
  //     setUserData({ ...userData, [e.target.name]: e.target.value });
  //   };

  const changeEventHandler = (e) => {
    const { name, value, type, files } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, // Store file object instead of string
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData); // Logs form data
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1 className="text-[50px] font-extrabold text-center bg-slate-800 text-white py-3">
        Form Handling - only one state variable for every input
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 items-center justify-center mt-10"
      >
        {/* First Name */}
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

        {/* Last Name */}
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

        {/* Email */}
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

        {/* Password */}
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

        {/* Mobile Number */}
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

        {/* Profile Pic */}
        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Profile Pic:
          </label>
          <input
            type="file"
            name="profile"
            id="profile"
            accept="image/*"
            onChange={changeEventHandler}
            className="w-full rounded-lg p-3 border border-black cursor-pointer"
          />
        </div>

        {/* Gender */}
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

        {/* Submit Button */}
        <div className="w-[50%] flex items-center gap-3 py-2">
          <button className="px-2 py-3 w-full rounded-lg text-white bg-red-600 font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App2;
