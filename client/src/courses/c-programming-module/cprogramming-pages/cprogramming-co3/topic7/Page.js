import React from 'react'


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../../cprogramming-co1/common-css/index.css'
import { BiArrowFromTop } from "react-icons/bi";
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
                <h1>Binary Search</h1>
                <p>In this page you will learn about Binary Search
                   in detail
                </p>
            </div>

            <div className="c3t-common-container">
              <p>Binary search is an efficient search algorithm used to find a specific target value within a sorted array or list. It works by repeatedly dividing the search space in half until the target value is found or the search space is empty.</p>
              <ul className='c3t-intro-points'>
                <li>Binary search is an efficient algorithm for finding a target value in a sorted array or list.</li>
                <li>It works by repeatedly dividing the search space in half until the target is found or the search space is empty.</li>
                <li>It compares the target with the middle element and adjusts the search space accordingly.If the middle element is equal to the target, the search is successful.</li>
                <li>If the middle element is equal to the target, the search is successful.</li>
                <li>Binary search has a time complexity of O(log n) and requires the array to be sorted.</li>
              </ul>
            </div>

        <div className="binary-container">
        <div className="binary-box">
            <h4>Array</h4>
              <table className='binary-box-table'>
                <tbody> 
                  <tr> 
                    <td>9</td>
                    <td>1</td>
                    <td>12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>


            <div className="binary-box">
            <h4>Array</h4>
              <table className='binary-box-table'>
                <tbody> 
                  <tr> 
                    <td id='binary-color'>9</td>
                    <td>1</td>
                    <td>12</td>
                    <td id='binary-color-mid' >6</td>
                    <td>5</td>
                    <td>3</td>
                    <td id='binary-color'>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>


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