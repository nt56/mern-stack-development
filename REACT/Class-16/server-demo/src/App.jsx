import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1").then((res) => {
      res.json().then((data) => {
        setUsers(data?.data);
      });
    });
  }, []);

  if (users.length === 0) return <h1>No Users Found...!</h1>;

  return (
    <>
      <h1 className="text-center text-white py-2 bg-secondary">
        Fetching Users by Calling the API
      </h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((user) => (
              <>
                <tr key={user.id} className="fw-bold">
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img alt="user-avatar" src={user.avatar} />
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
