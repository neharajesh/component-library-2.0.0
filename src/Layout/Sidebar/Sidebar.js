import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = ({ sidebar }) => {
  return (
    <>
      <nav className={sidebar ? "sidebar open" : "sidebar"}>
        <li>Getting Started</li>
        <li>Alert</li>
        <li>Avatar</li>
        <li>Badge</li>
        <NavLink to="/documentation/buttons" className="nav-link" activeClassName="nav-active">Buttons</NavLink>
        <li>Card</li>
        <NavLink to="/documentation/images" className="nav-link" activeClassName="nav-active">Images</NavLink>
        <li>Input</li>
        <li>Lists</li>
        <li>Modal</li>
        <li>Navigation</li>
        <li>Rating</li>
        <li>Simple Grids</li>
        <li>Slider</li>        
        <li>Toast</li>
        <NavLink to="/documentation/utilities" className="nav-link" activeClassName="nav-active">Utilities</NavLink>
      </nav>
    </>
  );
};
