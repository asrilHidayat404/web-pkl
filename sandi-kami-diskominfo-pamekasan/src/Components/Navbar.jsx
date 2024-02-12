import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react"
import logoUtama from "../LogoSandiKami.jpg"


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const auth = localStorage.getItem("auth")
  console.log(auth)

  return (
    <section id="navbar">
      <nav className="section navbar">
        <div className="logo">
            <img
            src={logoUtama}
            alt=""
            width="250px"
            />
        </div>
        <ul className={isMenuOpen ? "show" : ""}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Beranda</NavLink>
          </li>
          <li>
            <a href="#tentang" onClick={closeMenu}>Tentang</a>
          </li>
          <li>
            {auth ? <NavLink to="/dashboard">Dashboard</NavLink> : <NavLink to="/login">Login</NavLink>}  
          </li>
          <li>
            <div className="dropdown">
              <div className="dropbtn">
                <button id="dropbtn">Layanan</button>
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdown-content">
                <NavLink to="/formulir-permohonan-tte" onClick={closeMenu}>
                    Pendaftaran Tanda Tangan Elektronik
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
        <div className="menuToggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

