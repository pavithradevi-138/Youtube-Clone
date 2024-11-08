import "./Navbar.css";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";
import { PropTypes } from 'prop-types';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu}
          alt="menu icon"
          className="menu-icon"
          onClick={() => setSidebar(prev => prev === false ? true : false)}
          />
        <img src={logo} alt="logo img" className="logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" name="search" placeholder="Search" />
          <img src={search} alt="search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="upload icon" />
        <img src={more} alt="more icon" />
        <img src={notification} alt="notification icon" />
        <img src={jack} alt="profile img" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  setSidebar: PropTypes.func
}