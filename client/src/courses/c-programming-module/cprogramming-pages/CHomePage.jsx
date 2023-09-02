import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { PiHandTapThin } from 'react-icons/pi';
import { BsGit } from 'react-icons/bs';

import './CHomePage.css';
import cimage from '../../../assets/c.png';

// Import other components and modules here
import Cnavbar from '../C-programming-nav/Cnavbar';
import CourseFooter from '../../../components/course_footer/CourseFooter'
 

const CHomePage = () => {


  return (
    <div className='CHomePageComponent'>
       <div className="c-main-container">
          <div className="c-main-nav-ks">
            <Cnavbar/>
              </div> 
               <div className="c-prog-details">
                <div className="c-prog-img">
                  <img src={cimage} alt='c-prog' />
              </div>
            <div className="c-prog-content">
              <h2> <span>C </span>Road Map</h2>
              <h1>Completely beginner-friendly.</h1>
                 <div className="c-prog-buttons">
                   <Scroll
                    activeClass="active"
                    to="c-prog-topics"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                 >
                 <button className='c-prog-buttons-one'>
                    Know More <BsChevronDoubleDown/>
                 </button>
                 </Scroll>
                 <Link to='/courses/c-programming/co1/Structured-Programming-Paradigm'>
                    <button className='c-prog-buttons-two'>
                        Start Now <AiOutlineDoubleRight/>
                    </button>
                    </Link>
                </div>
                </div>
            </div>


            <div className="c-prog-topics">
            <div className="c-prog-topics-head">
                <h1>Course Details </h1>
            </div>
            <div className="c-prog-topic-cards">
                <Cardone/>
                <Cardtwo/>
                <Cardthree/>
                <Cardfour/>
            </div>
            </div>


            <div className="c-prog-footer">
              <CourseFooter/>
            </div>

        </div>
    </div>
  )
}


const content1 = [
  'Structured Programming Paradigm',
   'Designing Algorithms',
    'Designing Flowcharts',
     'Primary Data Types',
      'Derived Data Types',
       'Basic Operators',
        'Modularization',
         'Storage Classes',
          'User input from console',
           'Conditional Statements',
            'Nesting of Conditional Statements'
          ];

const content2 = [
  'Increment, decrement operators',
   'Iterative Statements', 'Loops',
    'Nested Loops', 'Bitwise Operators-I',
     'Bitwise Operators-II',
      'Expression Evaluation Rules',
       'Operator Precedency', 'Recursion',
        'Problem Solving with Recursion'
];

const content3 = [
  'Data Types-II',
   'Command Line Arguments',
    'Strings and String Library',
     'Arrays - Creation & Insertion',
      'Bubble Sort',
       'Linear Search',
        'Binary Search',
         'Dynamic Memory Allocation'
      ];

const content4 = [
  '2D Arrays - Creation & Insertion',
   '2D Arrays - Matrixes',
    'Matrix Algebra with Arrays',
     'Structures',
      'Array of Structures',
       'Structure Pointers',
        'Stacks using Arrays',
         'Queues with Arrays',
          'Single Linked List (with structures)',
           'Delete Operation on Linked List',
            'Non-linear Data Structures'
];





function Cardone() {
    return (
        <div className="card">
        <div className="card-front">
          <h1>Course Outcome - 1</h1>
          <div className="card-icon">
          <PiHandTapThin/>
          </div>
        </div>
        
        <div className="card-back">
            <ul>
            { content1.map( ( item, index ) => ( 
                  <li key={index}>
                    {item}
                  </li>
            ))
            }
        </ul>
        </div>
      </div>
    );
}

function Cardtwo() {
    return (
        <div className="card">
        <div className="card-front">
          <h1>Course Outcome - 2</h1>
          <div className="card-icon">
          <PiHandTapThin/>
          </div>
        </div>
        
        <div className="card-back">
            <ul>
            { content2.map( ( item, index ) => ( 
                  <li key={index}>
                    {item}
                  </li>
            ))
            }
        </ul>
      </div>
      </div>
    );
}

function Cardthree() {
    return (
        <div className="card">
        <div className="card-front">
          <h1>Course Outcome - 3</h1>
          <div className="card-icon">
          <PiHandTapThin/>
          </div>
        </div>
        
        <div className="card-back">
            <ul>
            { content3.map( ( item, index ) => ( 
                  <li key={index}>
                    {item}
                  </li>
            ))
            }
        </ul>
      </div>
      </div>
    );
}


function Cardfour() {
    return (
        <div className="card">
        <div className="card-front">
          <h1>Course Outcome - 4</h1>
          <div className="card-icon">
          <PiHandTapThin/>
          </div>
        </div>
        <div className="card-back">
            <ul>
            { content4.map( ( item, index ) => ( 
                  <li key={index}>
                    {item}
                  </li>
            ))
            }
        </ul>
      </div>
      </div>
    );
}

export default CHomePage

