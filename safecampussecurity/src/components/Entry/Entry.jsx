import React, { useState } from 'react';
import { MdOutlinePerson2 } from "react-icons/md";

//  styles
import classes from './Entry.module.css';

const Entry = () => {
  const [entryDetails, setEntryDetails] = useState({
    category: "",
    scholarID: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setEntryDetails({ ...entryDetails, [e.target.name]: e.target.value })
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setEntryDetails({ ...entryDetails, profilePicture: base64 })
  };


  return (
    <div className={classes.login}>
      <div className={classes.topbar}>
        <div className={classes.name}>.Entry Section.</div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.heading}>
          Daily Entry Form
        </div>
        <div className={classes.subHeading}>
          Check the visitor document with database document
        </div>
        <form className={classes.form} onSubmit={() => console.log("hello")}>
          <div className={classes.selectBox}>
            <div>Select Visitor Type :</div>
            <select
              className={classes.form__select}
              name="category"
              value={entryDetails.category}
              placeholder='state'
              onChange={handleChange} autoComplete='on'
            >
              <option value="Assam">Outsider</option>
              <option value="Arunachal">Insider</option>
            </select>
          </div>
          <div className={classes.inputBox}>
            <div className={classes.iconContainer}>
              <MdOutlinePerson2 className={classes.icon} />
            </div>
            <input
              type="number"
              className={classes.inputField}
              name='scholarID'
              placeholder='Enter visitor ID'
              value={entryDetails.scholarID}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.inputBox}>
            <textarea
              rows={6}
              className={classes.inputField}
              name='description'
              placeholder='Reason'
              value={entryDetails.description}
              onChange={handleChange}
              autoComplete='on'
            />
          </div>
          <div className={classes.inputBox}>
            <input
              className={classes.form__image}
              name='image'
              type="file"
              placeholder='upload profile picture'
              onChange={handleFileUpload}
              autoComplete='on'
            />
          </div>
          <div className={classes.submitBox}>
            <button className={classes.buttonSubmit} type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Entry;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};