import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // import CSS

// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

var a = 20;
var b = 30;
console.log(a + b);

var name = "Pratik";
var skill = "HTMl";

root.render(
  <React.StrictMode>
    <h1 className="head">Welcome To JSX Code</h1>

    <hr />
    <br />
    <input type="text" placeholder="enter your name" />

    <h1>CSS and ClassNamerty and external CSS Integration</h1>
    <hr />

    {/* CSS  -  style={{key:value}}*/}
    <h1
      style={{ color: "orange", backgroundColor: "black" }}
      className="heading"
    >
      CSS Styling In React JSX
    </h1>

    <hr />

    <h1>JS Code Integration</h1>
    <hr />

    {/* JS code  - {}*/}

    <h1>Your Name Is {name} </h1>
    <h1>
      Your name Is {name} and Your Skill Is {skill}
    </h1>
    <h1>{300 + 400}</h1>
    {/* {alert('hello welcome to JS In React JSX')} */}

    <hr />
    <h1>Media Files Integration</h1>
    <hr />

    {/* media assests- images,audio/video */}

    {/* stored in public folder */}

    <img src="logo192.png" alt="" />

    <img style={{ height: "300px" }} alt="" src="images/image.png" />

    {/* ********************************************************** */}

    <hr />
    <h1>3rd Party Integration</h1>
    <hr />

    <button className="btn btn-primary fw-bold m-4 px-4">
      Welcome To Bootstrap
    </button>
  </React.StrictMode>
);
