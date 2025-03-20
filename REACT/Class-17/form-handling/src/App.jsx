import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [profile, setProfile] = useState(null);
  const [gender, setGender] = useState("");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    profile: null,
    gender: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");

    setUserData({
      firstName,
      lastName,
      email,
      password,
      mobile,
      profile,
      gender,
    });

    console.log("User Data:", {
      firstName,
      lastName,
      email,
      password,
      mobile,
      profile,
      gender,
    });

    // Resetting fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setProfile(null); // Correct way to reset file input
    setGender("");
  };

  return (
    <div>
      <h1 className="text-[50px] font-extrabold text-center bg-slate-800 text-white py-3">
        Form Handling - state variable for every input
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 items-center justify-center mt-10"
      >
        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full rounded-lg p-3 border border-black"
          />
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <label className="font-bold text-3xl whitespace-nowrap">
            Profile Pic:
          </label>
          <input
            type="file"
            name="profile"
            accept="image/*"
            onChange={(e) => setProfile(e.target.files[0])}
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
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
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
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
              value="female"
              className="cursor-pointer"
            />
            <label htmlFor="female" className="text-2xl cursor-pointer">
              Female
            </label>
          </div>
        </div>

        <div className="w-[50%] flex items-center gap-3 py-2">
          <button className="px-2 py-3 w-full rounded-lg text-white bg-red-600 font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
