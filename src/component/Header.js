import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/profileReducer";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile  = useSelector((state)=>state.profile.profile);

  const handlelogout = () => {
     toast.success("You have been successfully logged out");
     dispatch(logout());
    
    window.location.reload(navigate("/"));
  }
  
  return (
    <>
      <div className="navbar-custom">
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center gap-lg-2 gap-1">
            {/* Topbar Brand Logo */}
            <div className="logo-topbar">
              {/* Logo light */}
              <Link to="/dashboard" className="logo-light">
                <span className="logo-lg">
                  <img src="assets/images/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="small logo" />
                </span>
              </Link>
              {/* Logo Dark */}
              <Link to="/dashboard" className="logo-dark">
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="small logo" />
                </span>
              </Link>
            </div>
            {/* Sidebar Menu Toggle Button */}
            <button className="button-toggle-menu">
              <i className="ri-menu-2-fill" />
            </button>
            {/* Topbar Search Form */}
            
          </div>
          <ul className="topbar-menu d-flex align-items-center gap-3">
            
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none nav-user px-2"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="account-user-avatar">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt="user-image"
                    width={32}
                    className="rounded-circle"
                  />
                </span>
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">{(profile.name) ? profile.name : 'Admin' }</h5>
                  <h6 className="my-0 fw-normal">{(profile.email) ? profile.email : 'Admin' }</h6>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                {/* item*/}
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>
                {/* item*/}
                <a href="#" className="dropdown-item">
                  <i className="ri-account-circle-line fs-18 align-middle me-1" />
                  <span>My Account</span>
                </a>
                
                <Link className="dropdown-item" onClick={handlelogout}>
                  <i className="ri-logout-box-line fs-18 align-middle me-1" />
                  <span>Logout</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
