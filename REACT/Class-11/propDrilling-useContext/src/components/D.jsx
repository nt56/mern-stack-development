import React from "react";

const D = ({ name, email }) => {
  return (
    <div>
      <h1>D component</h1>

      <h2>Name : {name}</h2>
      <h2>Email : {email}</h2>
      <hr />
    </div>
  );
};

export default D;
