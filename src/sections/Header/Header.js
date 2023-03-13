import './Header.css'

import NavItem, {NavItemDropDown} from '../../combonents/NavItem/NavItem'
import logo from '../../assets/images/logo.png'
const Header = () =>{
    return(
        <>
        <div className="navbar navbar-expand-md navbar-dark bg-dark cyborg-navbar">
                <div className="container-floid">
                    <a href="/#" className="navbar-brand">
                        <img src={logo} alt='' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem><a href="/#" className="nav-link">Home</a></NavItem>
                            <NavItem><a href="/#" className="nav-link">Browse</a></NavItem>
                            <NavItemDropDown>
                                <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/#" className="dropdown-item">Learn Bootstrap</a></li>
                                    <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                                </ul>
                            </NavItemDropDown>
                            <NavItem><a href="/#" className="nav-link">Streams</a></NavItem>
                            <NavItem><a href="/#" className="nav-link">Profile</a></NavItem>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Header