import React from 'react'
import { useState, useEffect } from 'react';
import './CourseNav.css'
import {FiCode} from 'react-icons/fi'
import {HiMenu} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import {  Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

import navLogo from '../../assets/navLogo.png'

function CourseNav() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  
  return (
        <div className= { (isopen === true) ? "nav-color" : "course-nav-container" }>
          <div className="nav-logo">
              <div className="logo-in">
                <Link onClick={scrollToTop}><img className='logo-in-image' src={navLogo}></img></Link>
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
                       Home 
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
                      <li><Link to='https://klzeroone.vercel.app/'>
                          About Us
                </Link></li>
                    </ul>
                    </div>
                 </div>
              </div>
            </div>



          <div className={ (size > 900 )? "nav-links" : "nav-links-hide"}>
          <div className="nav-links-in">
          <Scroll
                    activeClass="active"
                    to="courseHome-container"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                      >
                       <Link to='/'>Home</Link>
                    </Scroll>
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
                  <Link to='https://t.me/+HbEkpTHAa_w4NTM1'>Contact</Link>
                  <Link to='https://klzeroone.vercel.app/'>
                          About Us
                </Link>
                </div>
              </div>
            <div className={(size > 900 )? "nav-button" : "nav-links-hide"}>
             <Link to='https://t.me/+HbEkpTHAa_w4NTM1'>
               <button className='nav-button-in'>Join Us</button>
                </Link>
            </div>
        </div>
  )
}

export default CourseNav