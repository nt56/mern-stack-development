import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (users.length === 0)
    return <h1 className="text-center">No Users Found...!</h1>;

  const deleteUserHandler = async (id) => {
    //logic for showing latest cards
    const latestUsers = users.filter((user) => user.id !== id);
    setUsers(latestUsers);
    //api call
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      alert("user deleted successfully..!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center my-15 h-full">
      {users.map((user) => (
        <div
          key={user.id}
          className="card card-side bg-base-300 shadow-sm w-[30%] mt-5"
        >
          <figure>
            <img src={user.profileUrl} alt="user-photo" className="w-50" />
          </figure>
          <div className="card-body">
            <h1 className="text-3xl font-extrabold text-gray-200">
              {user.firstName} {user.lastName}
            </h1>
            <h2 className="text-gray-100 font-bold mt-2">
              ✉️ Email: {user.email}
            </h2>
            <h2 className="text-gray-100 font-bold mt-2">
              🎂 Gender: {user.gender}
            </h2>
            <h2 className="text-gray-100 font-bold mt-2">
              📞 Mobile: {user.mobile}
            </h2>
            <div className="mt-auto flex justify-between gap-4 border-t pt-4">
              <button
                className="btn btn-primary flex-1"
                onClick={() => navigate(`/edit/${user.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-error flex-1"
                onClick={() => deleteUserHandler(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
