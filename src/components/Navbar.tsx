import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import 'animate.css';

const Navbar: React.FC = () => {
  const toggleMenu = () => {
    const navigation = document.getElementById('navigation');
    if (navigation) {
      navigation.classList.toggle('open');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("topnav");
      if (navbar) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link className="logo" to="/">
          <span className="logo-light-mode">
            <img src="/assets/images/logo-dark.png" className="l-dark" alt="" />
            <img src="/assets/images/logo-light.png" className="l-light" alt="" />
          </span>
          <img src="/assets/images/logo-light.png" className="logo-dark-mode" alt="" />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <button className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item ps-1 mb-0">
            <div className="dropdown">
              <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FeatherIcon icon="search" className="icons" />
              </button>
              <div className="dropdown-menu dd-menu dropdown-menu-end bg-white rounded border-0 mt-3 p-0" style={{ width: '240px' }}>
                <div className="search-bar">
                  <div id="itemSearch" className="menu-search mb-0">
                    <form role="search" method="get" id="searchItemform" className="searchform">
                      <input type="text" className="form-control rounded border" name="s" id="searchItem" placeholder="Search..." />
                      <input type="submit" id="searchItemsubmit" value="Search" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-inline-item ps-1 mb-0">
            <div className="dropdown dropdown-primary">
              <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="/assets/images/team/01.jpg" className="img-fluid rounded-pill" alt="" />
              </button>
              <div className="dropdown-menu dd-menu dropdown-menu-end bg-white rounded shadow border-0 mt-3">
                <Link to="/candidate-profile" className="dropdown-item fw-medium fs-6">
                  <FeatherIcon icon="user" className="fea icon-sm me-2 align-middle" />Profile
                </Link>
                <Link to="/candidate-profile-setting" className="dropdown-item fw-medium fs-6">
                  <FeatherIcon icon="settings" className="fea icon-sm me-2 align-middle" />Settings
                </Link>
                <div className="dropdown-divider border-top"></div>
                <Link to="/lock-screen" className="dropdown-item fw-medium fs-6">
                  <FeatherIcon icon="lock" className="fea icon-sm me-2 align-middle" />Lockscreen
                </Link>
                <Link to="/login" className="dropdown-item fw-medium fs-6">
                  <FeatherIcon icon="log-out" className="fea icon-sm me-2 align-middle" />Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu nav-right nav-light">
            <li className="has-submenu parent-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="sub-menu-item">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 