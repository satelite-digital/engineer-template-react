import { Link } from "react-router-dom";
import Avatar from '../Avatar';
import logo from "./../../logo.svg";

const Navbar = ({ links = [] }) => (
  <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-none px-2 mx-2">
      <img src={logo} className="h-14" />
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        {links.map(({ path, text }) => (
          <Link class="btn btn-ghost btn-sm rounded-btn" to={path}>
            {text}
          </Link>
        ))}
      </div>
    </div>
    <div class="flex-none">
      <Avatar />
    </div>
  </div>
);

export default Navbar;
