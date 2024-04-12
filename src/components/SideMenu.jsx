import '../styles/sideMenu.css';
import logo from "../assets/img/logotipo.png"
import dashboardIcon from "../assets/icons/dashboard-black.png"
import emailIcon from "../assets/icons/email.png"
import rolesIcon from "../assets/icons/group.png"
import documentIcon from "../assets/icons/document.png"
import requestIcon from "../assets/icons/request.png"
import settingsIcon from "../assets/icons/settings.png"
import logoutIcon from "../assets/icons/logout.png"


export function SideMenu() {
    return (
    <div className="sideMenuContainer"> 
        <div className="logoContainer">
         <img className="logo" src = { logo }/> 
        </div>

        <div className="mainMenuContainer">
            <h3 className="text-md">MAIN MENU</h3>
            <ul>
                <li><img src={dashboardIcon} className="icon"/>Dashboard</li>
                <li><img src={emailIcon} className="icon"/>Messages</li>
                <li><img src={documentIcon} className="icon"/>Document</li>
                <li><img src={rolesIcon} className="icon"/>Roles</li>
                <li><img src={requestIcon} className="icon"/>Request</li>
            </ul>
        </div>

        <div className="teamsContainer">
            <h3 className="text-md">TEAMS</h3>
            <ul>
                <li><div className="colorPoint" id="hrColor"></div>HR</li>
                <li><div className="colorPoint" id="designColor"></div>Design</li>
                <li><div className="colorPoint" id="marketingColor"></div>Marketing</li>
                <li><div className="colorPoint" id="developmentColor"></div>Development</li>
            </ul>
        </div>

        <div className="finalButtonsContainer">
            <ul>
                <li><img src={settingsIcon} className="icon"/>Settings</li>
                <li><img src={logoutIcon} className="icon"/>Log out</li>
            </ul>
        </div>
    </div>
    
    )
}