import React, { useState } from "react";
import A from "./A";

const PropDrilling = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndeo@gmail.com");

  return (
    <div>
      <h1>Grand Parent</h1>
      <hr />

      <A name={name} email={email} />
    </div>
  );
};

export default PropDrilling;
