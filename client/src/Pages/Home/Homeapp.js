import React from 'react';
import {Routes, Route } from 'react-router-dom';



//import components here
import CprogrammingApp from '../../courses/c-programming-module/CprogrammingApp';
import PythonApp from '../../courses/python-module/PythonApp.js';
import Home from './Home'


const Homeapp = () => {
  return (
    <div className='CourseAppComponent'>
        <div className="CourseAppContainer">
            <div className="CourseAppMain">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/c-programming/*' element={<CprogrammingApp/>}></Route>
                    {/* <Route path='/python/*' element={<PythonApp/>}></Route> */}
                </Routes>
            </div>
        </div>
    </div>
  )
} 

export default Homeapp

