import React, { useContext } from "react";
import { name, email, phone } from "./Context";

const User = () => {
  const fullName = useContext(name);
  const emailId = useContext(email);
  const phoneNumber = useContext(phone);

  return (
    <div>
      <h1>User Info Using Context API</h1>
      <hr />

      <h2>Name : {fullName}</h2>
      <h2>Email : {emailId}</h2>
      <h2>Number : {phoneNumber}</h2>
    </div>
  );
};

export default User;
