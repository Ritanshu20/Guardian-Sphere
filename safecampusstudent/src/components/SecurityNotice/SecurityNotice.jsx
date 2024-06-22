import React from 'react'

// assets
import { TiPinOutline } from "react-icons/ti";

// import stylesheet
import classes from './SecurityNotice.module.css';

const SecurityNotice = () => {
  return (
    <div className={classes.noticeContainer}>
      <div className={classes.topbar}>
        <div className={classes.name}>.Notice Board.</div>
      </div>
      <div className={classes.noticeBox}>
        <TiPinOutline className={classes.logo} />
        <div className={classes.heading}>URGENT CAMPUS SAFETY NOTICE: AVOIDANCE OF CERTAIN ROUTES</div>
        <div className={classes.desc}>It has been brought to our attention that there have been incidents of aggressive and reckless driving on specific routes within the campus vicinity. In the interest of your safety, we strongly advise against using the following routes until further notice</div>
      <button>4/2/2024</button>
      </div>
      <div className={classes.noticeBox}>
        <TiPinOutline className={classes.logo} />
        <div className={classes.heading}>POWER OUTAGE ALERT</div>
        <div className={classes.desc}>Please be informed that there will be a scheduled power outage in certain areas of the college campus on  from 6:00 PM to 8:00 PM.</div>
      <button>31/1/2024</button>
      </div>
      <div className={classes.noticeBox}>
        <TiPinOutline className={classes.logo} />
        <div className={classes.heading}>ELECTRICITY INTERRUPTION</div>
        <div className={classes.desc}>Due to essential maintenance work, there will be a temporary electricity interruption in specific areas of the college campus between 6:00 PM and 8:00 PM.</div>
      <button>5/1/2024</button>
      </div>
    </div>
  )
}

export default SecurityNotice