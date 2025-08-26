import React from 'react';
import styles from './NavBar.module.css';
import logo from '../img/dizzy-icon.png';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.left}>
      <Link to='/home'><img className={styles.logo} src={logo}/></Link>
        <h1 className={styles.title}>Meow?</h1>
      </div>
      
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink to='/home'
            >Home
          </NavLink>
        </li>
        <li className={styles.navListItem}>
          <NavLink to='/about'
            >About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;