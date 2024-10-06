import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="leftside-menu menuitem-active">
        {/* Brand Logo Light */}
        <Link to="/dashboard" className="logo logo-light">
          <span className="logo-lg">
            <img src="assets/images/logo.png" alt="logo" />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="small logo" />
          </span>
        </Link>
        {/* Brand Logo Dark */}
        <Link to="/dashboard" className="logo logo-dark">
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="dark logo" />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo-sm.png" alt="small logo" />
          </span>
        </Link>
        {/* Full Sidebar Menu Close Button */}
        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle" />
        </div>
        {/* Sidebar -left */}
        <div className="h-100" id="leftside-menu-container" data-simplebar="">
          {/* Leftbar User */}
          <div className="leftbar-user">
            <a href="pages-profile.html">
              <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                height={42}
                className="rounded-circle shadow-sm"
              />
              <span className="leftbar-user-name mt-2">Michael Berndt</span>
            </a>
          </div>
          {/*- Sidemenu */}
          <ul className="side-nav">
            <li className="side-nav-title">Main</li>
            <li className="side-nav-item">
              <Link to="/dashboard" className="side-nav-link">
                <i className="ri-dashboard-2-fill" />
                <span> Dashboard </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link data-bs-toggle="collapse" to="#master" aria-expanded="false" aria-controls="master" className="side-nav-link">
                <i className="ri-mail-fill" />
                <span> Master </span>
                <span className="menu-arrow" />
              </Link>
              <div className="collapse" id="master">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <a href="apps-email-read.html">Read Email</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a href="apps-calendar.html" className="side-nav-link">
                <i className="ri-calendar-event-fill" />
                <span> Calendar </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarEmail"
                aria-expanded="false"
                aria-controls="sidebarEmail"
                className="side-nav-link"
              >
                <i className="ri-mail-fill" />
                <span> Email </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarEmail">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="apps-email-inbox.html">Inbox</a>
                  </li>
                  <li>
                    <a href="apps-email-read.html">Read Email</a>
                  </li>
                </ul>
              </div>
            </li>
            
          </ul>
          {/*- End Sidemenu */}
          <div className="clearfix" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
