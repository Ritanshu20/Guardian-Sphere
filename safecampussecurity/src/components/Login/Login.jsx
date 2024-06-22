import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import { HiOutlineMail } from "react-icons/hi";
import { FcUnlock } from "react-icons/fc";
import loginImage from '../../assets/loginLeft.jpg';

//  styles
import classes from './Login.module.css';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  };


  return (
    <div className={classes.login}>
      <div className={classes.top}>
        <img className={classes.loginImg} src={loginImage} alt="login" />
      </div>
      <div className={classes.bottom}>
        <div className={classes.heading}>
          Welcome Back!
        </div>
        <div className={classes.subHeading}>
          Please, Enter your credentials for LOGIN
        </div>
        <form className={classes.form} onSubmit={() => console.log("hello")}>
          <div className={classes.inputBox}>
            <div className={classes.iconContainer}>
              <HiOutlineMail className={classes.icon} />
            </div>
            <input
              type="email"
              className={classes.inputField}
              name='email'
              placeholder='Enter your email'
              value={userDetails.email}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.inputBox}>
            <div className={classes.iconContainer}>
              <FcUnlock className={classes.icon} />
            </div>
            <input
              type="password"
              className={classes.inputField}
              name='password'
              placeholder='Enter your passwordl'
              value={userDetails.password}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.submitBox}>
            <Link to="/" style={{
              textDecoration: "none",
              color: "#111"
            }}>
              <button className={classes.buttonSubmit} type='submit'>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login