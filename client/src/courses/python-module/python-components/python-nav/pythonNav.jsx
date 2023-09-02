import React from 'react'
import {Link as Scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import {FaLeftLong} from 'react-icons/fa6'
import {FiCode} from 'react-icons/fi'
import {HiMenu} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import {  Link } from 'react-router-dom';
import './pythonNav.css'


function PythonNavbar() {
  const [isopen, setIsopen] = useState(false)
  const [size, setSize] = useState(window.innerWidth)

  const toggleNav = () => {
     setIsopen(!isopen)
  }

  useEffect(() => {
    const changeWidth = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div  className= { (isopen === true) ? "nav-color" : "c-nav-container" }>
     <div className="nav-logo">
      <div className="nav-logo-head">
       <FiCode/>
         </div>
           <div className="nav-logo-body">
            <h1>zeroOne</h1>
        </div> 
    </div>


          {/* toggle button */}

          <div className={size < 900 ? "toggle-container" : "toggle-container-hide"}>
            <div className="toggle-button">
              { (isopen === false) ? <HiMenu onClick={toggleNav} /> : <IoCloseSharp onClick={toggleNav} />}
             </div> 
              <div className="toggle-nav">
                <div className={isopen ? "toggle-nav-links" : "toggle-nav-links-hide"}>
                  <div className="toggle-nav-links-in">
                    <ul>
                      <li>
                        
                      <Scroll
                    activeClass="active"
                    to="courseHome-container"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsopen(false)}
                      >
                      <Link to='/'>  
                      Home
                      </Link>
                    </Scroll>


                      </li>
                      <li>

                      <Scroll
                    activeClass="active"
                    to="course-home-courses"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsopen(false)}
                      >
                   Courses 
                    </Scroll>
                      </li>
                      <li><Link to='https://t.me/+HbEkpTHAa_w4NTM1'>Contact</Link></li>
                    </ul>

                    <div className="c-nav-con-but">
       < Link to='/' className="c-nav-con-but"> 
      <button>
                <FaLeftLong/>
                Back to courses
      </button>
      </Link>
      </div>

                    </div>
                 </div>
              </div>
            </div>


  <div className={ (size > 900 )? "nav-links" : "nav-links-hide" }>
    <div className="nav-links-in">
        <Link to='/'>Home</Link>
        <Scroll
              activeClass="active"
              to="course-home-courses"
              spy ={true}
              smooth={true}
              offset={-70}
              duration={500}
                >
                 <Link to='/'>Courses</Link>
              </Scroll>
            <Link to='https://t.me/+HbEkpTHAa_w4NTM1 '>Contact</Link>
          </div>
        </div>
  </div>

        
  )
}

export default PythonNavbar