// SideMenu.js
import "../styles/sideMenu.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logotipo.png";
import dashboardIcon from "../assets/icons/dashboard-black.png";
import emailIcon from "../assets/icons/email.png";
import rolesIcon from "../assets/icons/group.png";
import documentIcon from "../assets/icons/document.png";
import requestIcon from "../assets/icons/request.png";
import settingsIcon from "../assets/icons/settings.png";
import logoutIcon from "../assets/icons/logout.png";
export function SideMenu() {
  return (
    <div className="sideMenuContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="mainMenuContainer">
        <h3 className="text-md">MAIN MENU</h3>
        <ul>
          <Link to="/">
            <li>
              <img src={dashboardIcon} className="icon" alt="dashboard" />
              Dashboard
            </li>
          </Link>

          <Link to="/transactions">
            <li>
              <img src={emailIcon} className="icon" alt="messages" />
              Transactions
            </li>
          </Link>
          <li>
            <img src={documentIcon} className="icon" alt="document" />
            Document
          </li>
          <Link to="/people">
            <li>
              <img src={rolesIcon} className="icon" alt="roles" />
              People
            </li>
          </Link>
          <li>
            <img src={requestIcon} className="icon" alt="request" />
            Request
          </li>
        </ul>
      </div>

      <div className="teamsContainer">
        <h3 className="text-md">TEAMS</h3>
        <ul>
          <li>
            <div className="colorPoint" id="hrColor"></div>HR
          </li>
          <li>
            <div className="colorPoint" id="designColor"></div>Design
          </li>
          <li>
            <div className="colorPoint" id="marketingColor"></div>Marketing
          </li>
          <li>
            <div className="colorPoint" id="developmentColor"></div>
            Development
          </li>
        </ul>
      </div>

      <div className="finalButtonsContainer">
        <ul>
          <li>
            <img src={settingsIcon} className="icon" alt="settings" />
            Settings
          </li>
          <li>
            <img src={logoutIcon} className="icon" alt="logout" />
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
}
