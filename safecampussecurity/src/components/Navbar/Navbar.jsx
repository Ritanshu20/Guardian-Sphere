import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { TbSmartHome } from "react-icons/tb";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { TbProgressCheck } from "react-icons/tb";
import { TbUserQuestion } from "react-icons/tb";

// styles
import classes from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.container}>
        <Link to="/" style={{
          textDecoration: "none",
          color: "#111"
        }}>
          <div className={classes.navItem}>
            <TbSmartHome className={classes.icon} />
            <div className={classes.title}>
              Home
            </div>
          </div>
        </Link>
        <Link to="/entry" style={{
          textDecoration: "none",
          color: "#111"
        }}>
          <div className={classes.navItem}>
            <TbProgressCheck className={classes.icon} />
            <div className={classes.title}>
              Entry
            </div>
          </div>

        </Link>
        <Link to="/exit" style={{
          textDecoration: "none",
          color: "#111"
        }}>
          <div className={classes.navItem}>
            <TbUserQuestion className={classes.icon} />
            <div className={classes.title}>
              Exit
            </div>
          </div>
        </Link>
        <Link to="/notice" style={{
          textDecoration: "none",
          color: "#111"
        }}>
          <div className={classes.navItem}>
            <PiBellSimpleRingingBold className={classes.icon} />
            <div className={classes.title}>
              Notice
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar