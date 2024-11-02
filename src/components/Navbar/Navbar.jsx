import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <NavLink className={'font-bold text-lg'} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={'font-bold text-lg'} to={"/users"}>Users</NavLink>
        </li>
        <li>
          <NavLink className={'font-bold text-lg'} to={"/posts"}>Posts</NavLink>
        </li>
        <li>
          <NavLink className={'font-bold text-lg'} to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink className={'font-bold text-lg'} to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
