import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/home/Home';
import Dashboard from '../components/dashboard/dashboard';
import Notfound from '../components/home/Notfound';

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="*" element={<Notfound/>} />
    </Routes>
  )
}

export default Mainroutes