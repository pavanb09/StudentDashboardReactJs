import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import "./Navbar.css"; // Custom styles
import profile from '../assets/profile.jpg';

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">

        {/* Logo / Brand */}
        <Link to="/" className="navbar-brand modern-logo">
          Student<span>Dashboard</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <NavLink to="/" className="nav-link modern-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/students" className="nav-link modern-link">Students</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/add" className="nav-link modern-link">Add Student</NavLink>
            </li>

            {/* Notification Bell */}
            {/* <li className="nav-item notification-wrapper ms-3">
              <FaBell className="bell-icon" />
              <span className="notification-badge">3</span>
            </li> */}

            {/* User Avatar */}
            <li
              className="nav-item dropdown ms-3"
              onClick={() => setOpen(!open)}
            >
              <img
                src={profile}
                alt="User"
                className="avatar-img dropdown-toggle"
                role="button"
              />

              {open && (
                <ul className="dropdown-menu dropdown-menu-end show profile-dropdown">
                  <li><button className="dropdown-item">Profile</button></li>
                  <li><button className="dropdown-item">Settings</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  {/* <li><button className="dropdown-item">Logout</button></li> */}
                </ul>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
