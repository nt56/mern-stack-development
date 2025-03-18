import React, { useEffect, useState } from "react";

const App = () => {
  // API Calling

  // 1- xml http request
  // 2 fetch method
  // 3 Axios package

  // 2 hold the data
  const [data, setData] = useState([]);

  // 1
  // API calling
  useEffect(() => {
    fetch("http://localhost:3000/Emp").then((result) => {
      result.json().then((res) => {
        // stored in res
        console.log(res);

        // Update State
        setData(res);
      });
    });
  }, []);

  console.log(data);

  return (
    <>
      <h1>API Calling in a Stateless Functional Component</h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Skill</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.skill}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
