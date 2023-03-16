import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Props from './Components/Props/Props'
import State from './Components/State/State'
import Event from './Components/Event/Event'
import Home from './Components/Home'

const App = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="props" element={<Props />} />
                <Route path="state" element={<State />} />
                <Route path="event" element={<Event />} />
            </Routes>
        </BrowserRouter>
    </>

}

export default App