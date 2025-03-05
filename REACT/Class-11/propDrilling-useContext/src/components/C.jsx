import React from "react";
import D from "./D";

const C = ({ name, email }) => {
  return (
    <div>
      <h1>C component</h1>
      <hr />

      <D name={name} email={email} />
    </div>
  );
};

export default C;
