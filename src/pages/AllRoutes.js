import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import UserPage from "./UserPage";
import Users from "./Users";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
