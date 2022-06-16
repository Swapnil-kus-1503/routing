import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Navbar;
