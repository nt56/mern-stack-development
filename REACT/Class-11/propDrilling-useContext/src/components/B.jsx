import React from "react";
import C from "./C";

const B = ({ name, email }) => {
  return (
    <div>
      <h1>B component</h1>
      <hr />

      <C name={name} email={email} />
    </div>
  );
};

export default B;
