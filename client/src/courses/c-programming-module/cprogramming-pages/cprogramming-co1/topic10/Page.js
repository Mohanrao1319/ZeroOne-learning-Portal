import React from 'react'


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';


function Page() {
  return (
        <div className="topic-container">
          <div className="topic-navbar">
             <CNavbar/>
               </div>
               <div className="topic-main"> 
          <div className="co-sidebar">
             <CprogrammingSidebar />
          </div>  
           <div className="topic-content">
            <div className="topic-content-head">
                <h1>User input from files</h1>
                <p>In this page you will learn about User input from files
                   in detail
                </p>
            </div>
      </div>
             
          </div>
          <div className="topic-footer">
                   <CourseFooter/>
                  </div>
      </div>
  )
}

export default Page