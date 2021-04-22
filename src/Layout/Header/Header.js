import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = ({ handleToggleSidebar }) => {
  return (
    <>
      <div className="header">
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />
        <div className="header-brand">Brand Name</div>

        <div className="header-links">
        <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
          Home
        </NavLink>
        <NavLink to="/documentation" className="nav-link" activeClassName="nav-active" >
          Documentation
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="nav-active">
          About
        </NavLink>
        </div>
      </div>
    </>
  );
};
