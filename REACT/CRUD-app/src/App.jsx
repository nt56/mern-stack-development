import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Body from "./components/Body";
import About from "./components/About";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/add" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
