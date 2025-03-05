import React from "react";
import B from "./B";

const A = ({ name, email }) => {
  return (
    <div>
      <h1>A component</h1>
      <hr />

      <B name={name} email={email} />
    </div>
  );
};

export default A;
