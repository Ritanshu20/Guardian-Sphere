import React from 'react';
import { Link } from 'react-router-dom';

// assets
import { FcGoogle } from "react-icons/fc";
import campaignImage from '../../assets/resource.jpg';


// stylesheet
import classes from './Resource.module.css';

const Resource = () => {
  return (
    <div className={classes.resource}>
      <div className={classes.campaignContainer}>
        <div className={classes.heading}>
          Theft Awarness Campaign
        </div>
        <div className={classes.subheading}>
          Awareness campaign educates community on theft prevention, vigilance, security measures, reporting, and community involvement for safer neighborhoods
        </div>
        <Link to="https://meet.google.com/byc-dxdq-ues?pli=1" style={{
          textDecoration: "none",
          color: "#111"
        }}>
          <div className={classes.linkContainer}>
            <FcGoogle className={classes.icon} />
            <div className={classes.meetLInk}>
              Join Meet
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.articleContainer}>
        <div className={classes.categoryHeading}>Popular Categoies : </div>
        <div className={classes.categoryContainer}>
          <p className={classes.category}>Stalking</p>
          <p className={classes.category}>Self-Defence</p>
          <p className={classes.category}>Theft</p>
          <p className={classes.category}>Harrashment</p>
          <p className={classes.category}>Violence</p>
        </div>
        <div className={classes.newsContainer}>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>What is Campus Safety and Security?</div>
              <div className={classes.newsSubHeading}>
                Campus safety and security refers to the measures taken by a college or university  .....
              </div>
              <Link to="/news" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <button onClick={() => { console.log("first") }} className={classes.buttonNews}>Know More</button>
              </Link>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>Crime Prevention Safety, Safety Awareness on Campus </div>
              <div className={classes.newsSubHeading}>
                Crime prevention is one of the primary goals of the Office of Campus Safety. Together, with other campus offices, the department.....
              </div>
              <Link to="/news" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <button onClick={() => { console.log("first") }} className={classes.buttonNews}>Know More</button>
              </Link>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
          <div className={classes.news}>
            <div className={classes.newsText}>
              <div className={classes.newsHeading}>Why is Campus Security and Safety Important?</div>
              <div className={classes.newsSubHeading}>
                The goal of campus security is to take risks out of the equation so students can feel comfortable and focus on learning and so .....
              </div>
              <Link to="/news" style={{
                textDecoration: "none",
                color: "#111"
              }}>
                <button onClick={() => { console.log("first") }} className={classes.buttonNews}>Know More</button>
              </Link>
            </div>
            <img className={classes.newsImg} src={campaignImage} alt="news" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resource