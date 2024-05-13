import React from "react";
import styles from "./Navbar.module.css";
import { Route, Routes } from "react-router-dom";


const Navbar = () => {
  const navbarLinks = [
 
    <Routes>
        
        <Route exact path="/app"/>
        
    </Routes>
   
 
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_content}>
        <h1 className={styles.navbar__heading}>Astroverse</h1>
        <div className={styles.navbar__links}>
          {navbarLinks.map((link) => (
            <div className={styles.navbar__link} key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;