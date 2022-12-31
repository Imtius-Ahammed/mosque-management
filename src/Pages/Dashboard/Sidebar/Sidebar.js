import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  faAssistiveListeningSystems,
  faBars,
  faChartBar,
  faHome,
  faSignOut,
  faTachometer,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import DashNavbar from "../DashNavbar/DashNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    // <div className="sidebar">

    //     <div className="top">
    //         <Link to="/" style={{ textDecoration: "none" }}>
    //             <img height={60} src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
    //         </Link>
    //     </div>
    //     <hr />
    //     <div className="center">
    //         <ul>
    //             <p className="title">MAIN</p>
    //             <li>
    //                 <DashboardIcon className="icon" />
    //                 <span>Dashboard</span>
    //             </li>

    //             {admin && <>
    //                 <p className="title">LISTS</p>
    //                 <Link to="" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <PersonOutlineIcon className="icon" />
    //                         <span>Users</span>
    //                     </li>
    //                 </Link>

    //                 <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <StoreIcon className="icon" />
    //                         <span>Products</span>
    //                     </li>
    //                 </Link>

    //                 <li>
    //                     <CreditCardIcon className="icon" />
    //                     <span>Orders</span>
    //                 </li>
    //                 <Link to="/dashboard/imam" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <InsertChartIcon className="icon" />
    //                         <span>Add Imam</span>
    //                     </li>
    //                 </Link>

    //                 <Link to="/dashboard/addscolar" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <InsertChartIcon className="icon" />
    //                         <span>Add Scolar</span>
    //                     </li>
    //                 </Link>

    //                 <Link to="/dashboard/addkhutba" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <InsertChartIcon className="icon" />
    //                         <span>Add Khutba</span>
    //                     </li>
    //                 </Link>

    //                 <p className="title">USEFUL</p>
    //                 <Link to="/dashboard/addnewproduct" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <InsertChartIcon className="icon" />
    //                         <span>Stats</span>
    //                     </li>
    //                 </Link>
    //                 <li>
    //                     <NotificationsNoneIcon className="icon" />
    //                     <span>Notifications</span>
    //                 </li>
    //                 <p className="title">Campaigns</p>
    //                 <Link to="managecampaign" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <SettingsSystemDaydreamOutlinedIcon className="icon" />
    //                         <span>Manage Campaigns</span>
    //                     </li>
    //                 </Link>

    //                 <Link to="addcampaign" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <PsychologyOutlinedIcon className="icon" />
    //                         <span>Add Campaign </span>
    //                     </li>
    //                 </Link>

    //                 {/* Event */}
    //                 <p className="title">Events</p>
    //                 <Link to="manageevent" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <SettingsSystemDaydreamOutlinedIcon className="icon" />
    //                         <span>Manage Event</span>
    //                     </li>
    //                 </Link>

    //                 <Link to="addevent" style={{ textDecoration: "none" }}>
    //                     <li>
    //                         <PsychologyOutlinedIcon className="icon" />
    //                         <span>Add Event </span>
    //                     </li>
    //                 </Link>

    //             </>
    //             }

    //             <p className="title">USER</p>
    //             <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
    //                 <li>
    //                     <AccountCircleOutlinedIcon className="icon" />
    //                     <span>Profile</span>
    //                 </li>

    //             </Link>

    //             <li>
    //                 <ExitToAppIcon className="icon" onClick={handleSignOut} />
    //                 {

    //                     <span onClick={handleSignOut}>Logout</span>

    //                 }
    //             </li>

    //             {

    //                 <span className='icon' onClick={handleSignOut}>Logout</span>

    //             }

    //         </ul>
    //     </div>
    //     <div className="bottom">

    //     </div>
    // </div>

    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          {/* <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i> */}
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav test">
          <div className="test">
            <Link to="/" className="nav-logo">
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <FontAwesomeIcon className="nav-logo-icon" icon={faHome} />
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/dashboard/users" className="nav-link ">
                <FontAwesomeIcon icon={faUser} />
                <span className="nav-link-name tn">test</span>
              </Link>
              {admin && (
                <>
                  <Link to="/dashboard" className="nav-link active">
                    <FontAwesomeIcon icon={faTachometer} />
                    {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                    <span className="nav-link-name">Dashboard</span>
                  </Link>

                  <Link to="/dashboard/users" className="nav-link">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="nav-link-name">User</span>
                  </Link>

                  <Link to="/dashboard/users" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">AddImam</span>
                  </Link>

                  <Link to="/dashboard/addkhutba" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">Add Khutba</span>
                  </Link>

                  <Link to="/dashboard/managekhutba" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">Add Khutba</span>
                  </Link>
                  <Link to="/dashboard/modifyExperts" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">ManageExpert</span>
                  </Link>

                  <Link to="/dashboard/addscolar" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">Add Scolar</span>
                  </Link>

                  <Link to="managecampaign" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />

                    <span className="nav-link-name">Manage Campaign</span>
                  </Link>

                  <Link to="manageevent" className="nav-link">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="nav-link-name">Manage Event</span>
                  </Link>
                </>
              )}
              <Link to="profile" className="nav-link">
                <FontAwesomeIcon icon={faChartBar} />
                <span className="nav-link-name">Profile</span>
              </Link>

              <FontAwesomeIcon icon={faSignOut} onClick={handleSignOut} />
              {<span onClick={handleSignOut}>Logout</span>}

              {
                <span className="icon" onClick={handleSignOut}>
                  Logout
                </span>
              }
            </div>
          </div>

          {/* <Link to='/logout' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link> */}
        </nav>
      </aside>

      <div className="dashboard mt-4 pt-4">
        <div className="dashboardContainer">
          <DashNavbar></DashNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
