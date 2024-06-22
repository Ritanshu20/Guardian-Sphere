import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../components/Home/Home';
import SecurityNotice from '../components/SecurityNotice/SecurityNotice';
import Resource from '../components/Resource/Resource';
import Complain from '../components/Complain/Complain';
import News from '../components/News/News';

const Page = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/resource' element={<Resource />} />
                <Route exact path='/complain' element={<Complain />} />
                <Route exact path='/notice' element={<SecurityNotice />} />
                <Route exact path='/news' element={<News />} />
            </Routes>
        </div>
    )
}

export default Page;