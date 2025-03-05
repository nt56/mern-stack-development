import React, { createContext } from "react";
import User from "./User";

const name = createContext();
const email = createContext();
const phone = createContext();

const Context = () => {
  return (
    <div>
      <name.Provider value="john Doe">
        <email.Provider value="johndoe@gmail.com">
          <phone.Provider value="1234567890">
            <User />
          </phone.Provider>
        </email.Provider>
      </name.Provider>
    </div>
  );
};

export default Context;
export { name, email, phone };
