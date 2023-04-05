import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './Navbar/Navbar'
import Props from './Pages/Props'
import State from './Pages/State'
import Event from './Pages/Event'
import Home from './Pages/Home'
import Redux from './Pages/Redux'
// Login Import
import Login from './Components/Registration/Login'
import Registration from './Components/Registration/Registration'
import Axios from './Pages/Axios'

// User App
import UserAppClass from './Components/UserappClass/UserApp'
import UserAppFun from './Components/UserappFunctional/UserApp'

const App = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="props" element={<Props />} />
                <Route path="state" element={<State />} />
                <Route path="event" element={<Event />} />
                <Route path="axios" element={<Axios />} />
                <Route path="user-app-class" element={<UserAppClass />} />
                <Route path="user-app-fun" element={<UserAppFun />} />
                <Route path="redux" element={<Redux />} />

                {/* Login Routes */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Registration />} />
            </Routes>

        </BrowserRouter>
    </>

}

export default App