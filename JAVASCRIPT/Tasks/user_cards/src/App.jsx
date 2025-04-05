import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    //api calling
    const res = await axios.get("https://reqres.in/api/users?page=2");
    setUsers(res.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (users.length === 0) return <h1>No user found</h1>;

  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl">Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 flex items-center space-x-6 gap-5 mt-5"
        >
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={user.avatar}
            alt="User Avatar"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user.first_name}
              <span className="font-semibold text-gray-800">
                {" "}
                {user.last_name}
              </span>
            </h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
