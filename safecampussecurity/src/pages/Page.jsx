import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../components/Home/Home';
// import Entry from '../components/Entry/Entry';
import Entry from '../components/Entry/Entry';
import Exit from '../components/Exit/Exit';
import SecurityNotice from '../components/SecurityNotice/SecurityNotice';

const Page = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/entry' element={<Entry />} />
                <Route exact path='/exit' element={<Exit />} />
                <Route exact path='/notice' element={<SecurityNotice />} />
            </Routes>
        </div>
    )
}

export default Page;