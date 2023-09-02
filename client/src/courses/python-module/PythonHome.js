import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { PiHandTapThin } from 'react-icons/pi';
import './PythonHome.css';

import cimage from '../../assets/c.png';
import { FaPython } from 'react-icons/fa';
import PythonNavbar from './python-components/python-nav/pythonNav.jsx';
// Import other components and modules here

 

const CHomePage = () => {

  return (
    <div className='pythonHomePageComponent'>
       <div className="python-main-container">
          <div className="python-main-nav-ks">
            <PythonNavbar/>
              </div> 
               <div className="python-prog-details">
                <div className="python-prog-img">
                  <FaPython/>
              </div>
            <div className="python-prog-content">
              <h2> <span> Python </span>Road Map</h2>
              <h1>Completely beginner-friendly.</h1>
                 <div className="python-prog-buttons">
                   <Scroll
                    activeClass="active"
                    to="c-prog-topics"
                    spy ={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                 >
                 <button className='python-prog-buttons-one'>
                    Know More <BsChevronDoubleDown/>
                 </button>
                 </Scroll>
                 <Link to='/'>
                    <button className='python-prog-buttons-two'>
                        Start Now <AiOutlineDoubleRight/>
                    </button>
                    </Link>
                </div>
                </div>
            </div>


            <div className="python-prog-topics">
            <div className="python-prog-topics-head">
                <h1>Course Details </h1>
            </div>
            <div className="python-prog-topic-cards">
                <Cardone/>
                <Cardtwo/>
                <Cardthree/>
                <Cardfour/>
            </div>
            </div>


            <div className="python-prog-footer">
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


export default CHomePage


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




