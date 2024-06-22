import React from 'react';
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/shield.png';
import background from '../../assets/news.jpg';
import newsImg from '../../assets/resource.jpg';

// stylesheet
import classes from './News.module.css';


const News = () => {
    return (
        <div className={classes.newsContainer}>
            <div className={classes.topbar}>
                <img className={classes.logoImg} src={logo} alt="logo" />
                <div className={classes.name}>SafeCampus.</div>
            </div>
            <div className={classes.newsBox}>
                <img className={classes.newsImg} src={background} alt="news" />
                <button>5/2/2024</button>
                <div className={classes.heading}>What is Campus Safety and Security?</div>
                <div>Campus safety and security refers to the measures taken by a college or university to ensure the safety of students, staff, and visitors. Commonly, these measures are aimed at reducing crime on campus, protecting people from physical harm, and ensuring general welfare. The goal is to take risks out of the equation so students can feel comfortable and focus on learning. Students need peace of mind and to know that they’re safe, especially since campus is often their home and school at the same time.</div>
            </div>
            <div className={classes.relatedBox}>
                <div className={classes.heading}>Related Topics :</div>
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
                    <img className={classes.Img} src={newsImg} alt="news" />
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
                    <img className={classes.Img} src={newsImg} alt="news" />
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
                    <img className={classes.Img} src={newsImg} alt="news" />
                </div>
            </div>
        </div>
    )
}

export default News