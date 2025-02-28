import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ErrorElement from "./components/ErrorElement";
import Body from "./components/Body";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import AdminDashboard from "./components/AdminDashboard";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorElement />} />
          </Route>

          {/* Admin Routes - todo */}
          <Route path="/admin" element={<AdminPanel />}>
            <Route index element={<AdminLogin />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
