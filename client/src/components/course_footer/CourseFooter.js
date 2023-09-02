import React from 'react'
import './CourseFooter.css'
import { Link } from 'react-router-dom'

// imports start here
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import FeedbackForm from '../../feedback/feedback'


const CourseFooter = () => {


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }

  return (
    <div className="footer-container">
       <div className="footer-in-one">
        <div className="footer-in-one-one"> 
          <div className="footer-logo">
            {/* scroll to top */}
            <button onClick={scrollToTop} className='scroll-to-top'>
             <h1>ZeroOne </h1> 
              </button>

          </div>

        <div className="footer-in-links">
                   <Link to='https://klzeroone.vercel.app/' className='gmail'>
                   klzeroone.vercel.app
                   </Link>
                </div>
                 
               
             </div>
              <div className="footer-in-one-two">
                <div className="footer-quick-links">
                  <h1>Join the conversation</h1>
                  <p>Come and connect, learn, and grow with the ZeroOne
                     Education student community on ZeroOne Community
                  </p>
                </div>
              <div className="footer-in-socials">
                <Link to='https://instagram.com/zeroone_code' className='footer-in-socials-link'>
                  <AiOutlineInstagram className='instagram social-hover'/>
                  </Link>
                    <Link to='https://t.me/+HbEkpTHAa_w4NTM1' className='footer-in-socials-link'>
                      <FaTelegram className='telegram social-hover'/>
                        </Link>
                        <Link to='https://twitter.com/zeroone_codes' className='footer-in-socials-link'>
                          <BsTwitter className='github social-hover'/>
                  </Link>
                </div>
            </div>
          </div>
          <div className="footer-in-three">
          <p> © 2023 saitadikonda. All rights reserved.</p>
            <p>designed & developed by <span> 
            </span> 
          </p>
          <p> at ZeroOne Labs.</p>
        </div>
    </div>
  )
}

export default CourseFooter


 
