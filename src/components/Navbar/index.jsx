import { Link, useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import logo from "./../../logo.svg";

const Navbar = ({ links = [] }) => {
  const location = useLocation();
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <Link to="/">
          <img src={logo} alt="logo" className="h-14" />
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {links.map(({ path, text }) => (
            <Link key={path} className={`btn btn-ghost btn-sm rounded-btn ${location.pathname === path ? 'text-bold text-white' : 'text-gray-400'}`} to={path}>
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-none">
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
