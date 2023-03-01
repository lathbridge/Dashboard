import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/home/Home';
import Dashboard from '../components/dashboard/dashboard';

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default Mainroutes