import React, { useState } from 'react'

import { BiUpArrowAlt } from 'react-icons/bi';

// styles
import classes from './List.module.css';

const List = ({ heading, data, options }) => {

    const [selectedOption, setSelectedOption] = useState("");


    return (
        <div className={classes.vendorList}>
            <h1 className={classes.heading}>{heading}</h1>

            <div className={classes.vendorStats}>
                <div className={classes.statBox}>
                    <div className={classes.box1}>
                        <h1 className={classes.headingStat}>Total</h1>
                        <h1>{data.length}</h1>
                    </div>
                    <div className={classes.box2}>
                        <BiUpArrowAlt />
                        <p className={classes.percentage}>60% than yesterday</p>
                    </div>
                </div>
            </div>

            <div className={classes.filterContainer}>
                <p>Search By Category : </p>
                <div>
                    <select className={classes.selectForm} value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                        {/* Map over the options array to generate <option> elements */}
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>


            {/* list : { vendor, state, about, capacity, status} */}
            <div className={classes.table}>
                <div className={classes.tableHeading}>
                    <p className={classes.col1}> Name</p>
                    <p className={classes.col2}>Scholar ID</p>
                    <p className={classes.col3}>Hostel</p>
                    <p className={classes.col4}>Category</p>
                    <p className={classes.col5}>Time</p>
                    <p className={classes.col6}>Status</p>
                </div>

                {data.map((data, index) => {
                    if (data.category === selectedOption || data.hostel === selectedOption) {
                        return (
                            <div key={index} className={classes.tableContent}>
                                <p className={classes.col1}>{data.name}</p>
                                <p className={classes.col2}>{data.scholarID}</p>
                                <p className={classes.col3}>{data.hostel}</p>
                                <p className={classes.col4}>{data.category}</p>
                                <p className={classes.col5}>{data.time}</p>
                                <button className={classes.col6}>change status</button>
                            </div>
                        )
                    }
                })}
            </div>


        </div >
    )
}

export default List;