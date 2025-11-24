import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import About1st from './About1st'
import About2nd from './About2nd'
import Navbar from './Navbar'

function RouterEx() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />}>
                    <Route path='a1' element={<About1st />} />
                    <Route path='a2' element={<About2nd />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default RouterEx