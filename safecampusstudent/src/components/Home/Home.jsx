import React from 'react'

import ImergencyRequest from '../ImergencyRequest/ImergencyRequest';

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
        <ImergencyRequest />
      </div>
    </div>
  )
}

export default Home