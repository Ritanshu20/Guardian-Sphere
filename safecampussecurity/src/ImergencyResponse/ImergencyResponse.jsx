import React, { useState } from 'react'

import { AiTwotoneAlert } from "react-icons/ai";

// stylesheet
import classes from './ImergencyResponse.module.css';

const ImergencyResponse = () => {
  const [details, setDetails] = useState({
    location: "",
    scholarID: ""
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  };

  return (
    <div className={classes.requestContainer}>
      <AiTwotoneAlert className={classes.icon} />
      <div className={classes.heading}>Imergency</div>
      <form className={classes.form} onSubmit={() => { console.log("first") }}>
        <div className={classes.selectBox}>
          <div className={classes.subHeading}>Select Inciden Area:</div>
          <select
            className={classes.form__select}
            name="location"
            value={details.location}
            placeholder='Enter the Location'
            onChange={handleChange} autoComplete='on'
          >
            <option value="Admin_Building">Admin Building</option>
            <option value="NIT_Point">NIT Point</option>
            <option value="T_Point">T Point</option>
            <option value="Gymkhana Park">Gymkhana Park</option>
            <option value="Sport_Complex">Sport Complex</option>
            <option value="Food_Court">Food Court</option>
            <option value="Hostel_67">Hostel 6/7</option>
            <option value="Radio_Center">Radio Center</option>
            <option value="Professor_Quatar">Professor Quatar</option>
          </select>
        </div>
        <div className={classes.submitBox}>
          <button className={classes.buttonSubmit} type='submit'>Send Force</button>
        </div>
      </form>
    </div>
  )
}

export default ImergencyResponse