import React from 'react'

import ImergencyResponse from '../../ImergencyResponse/ImergencyResponse';

// assets
import logo from '../../assets/shield.png';

// stylesheet 
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.topbar}>
        <img className={classes.logoImg} src={logo} alt="logo" />
        <div className={classes.name}>SafeCampus.</div>
      </div>
      <div className={classes.requestBox}>
        <ImergencyResponse />
      </div>
    </div>
  )
}

export default Home