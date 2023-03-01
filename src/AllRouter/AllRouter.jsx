import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Fetch from '../Home/Fetch';

const AllRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    
            <Route path="/fetch" element={<Fetch/>}/>
  </Routes>
  )
}

export default AllRouter
