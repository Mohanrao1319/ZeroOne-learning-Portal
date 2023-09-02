import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './CprogrammingSidebar.css';

const routes = [
  {
    name: 'Course Outcome 1',
    content: ['Structured Programming Paradigm', 'Designing Algorithms', 'Designing Flowcharts', 'Primary Data Types', 'Derived Data Types', 'Basic Operators', 'Modularization', 'Storage Classes', 'User input from console', 'User input from files', 'Conditional Statements', 'Nesting of Conditional Statements'],
    paths: [
      '/courses/c-programming/co1/Structured-Programming-Paradigm',
      '/courses/c-programming/co1/designing-algorithms',
      '/courses/c-programming/co1/designing-flowcharts',
      '/courses/c-programming/co1/primary-data-types',
      '/courses/c-programming/co1/derived-data-types',
      '/courses/c-programming/co1/Basic-Operators',
      '/courses/c-programming/co1/Modularization',
      '/courses/c-programming/co1/Storage-Classes',
      '/courses/c-programming/co1/User-input-from-console',
      '/courses/c-programming/co1/User-input-from-files',
      '/courses/c-programming/co1/Conditional-Statements',
      '/courses/c-programming/co1/Nesting-of-Conditional-Statements'
    ]
  },
  {
    name: 'Course Outcome 2',
    content: ['Increment, decrement operators', 'Iterative Statements', 'Loops', 'Nested Loops', 'Bitwise Operators-I', 'Bitwise Operators-II', 'Expression Evaluation Rules', 'Operator Precedency', 'Recursion', 'Problem Solving with Recursion'],
    paths: [
      '/courses/c-programming/co2/Increment-decrement-operators',
      '/courses/c-programming/co2/Iterative-Statements',
      '/courses/c-programming/co2/Loops',
      '/courses/c-programming/co2/Nested-Loops',
      '/courses/c-programming/co2/Bitwise-Operators-I',
      '/courses/c-programming/co2/Bitwise-Operators-II',
      '/courses/c-programming/co2/Expression-Evaluation-Rules',
      '/courses/c-programming/co2/Operator-Precedency',
      '/courses/c-programming/co2/Recursion',
      '/courses/c-programming/co2/Problem-Solving-with-Recursion'
    ]
  },
  {
    name: 'Course Outcome 3',
    content: ['Data Types-II', 'Command Line Arguments', 'Strings and String Library', 'Arrays - Creation & Insertion', 'Bubble Sort', 'Linear Search', 'Binary Search', 'Dynamic Memory Allocation'],
    paths: [
      '/courses/c-programming/co3/Data-Types-II',
      '/courses/c-programming/co3/Command-Line-Arguments',
      '/courses/c-programming/co3/Strings-and-String-Library',
      '/courses/c-programming/co3/Arrays-Creation-Insertion',
      '/courses/c-programming/co3/Bubble-Sort',
      '/courses/c-programming/co3/Linear-Search',
      '/courses/c-programming/co3/Binary-Search',
      '/courses/c-programming/co3/Dynamic-Memory-Allocation'
    ]
  },
  {
    name: 'Course Outcome 4',
    content: ['2D Arrays - Creation & Insertion', '2D Arrays - Matrixes', 'Matrix Algebra with Arrays', 'Structures', 'Array of Structures', 'Structure Pointers', 'Stacks using Arrays', 'Queues with Arrays', 'Single Linked List (with structures)', 'Delete Operation on Linked List', 'Non-linear Data Structures'],
    paths: [
      '/courses/c-programming/co4/2D-Arrays-Creation-Insertion',
      '/courses/c-programming/co4/2D-Arrays-Matrixes',
      '/courses/c-programming/co4/Matrix-Algebra-with-Arrays',
      '/courses/c-programming/co4/Structures',
      '/courses/c-programming/co4/Array-of-Structures',
      '/courses/c-programming/co4/Structure-Pointers',
      '/courses/c-programming/co4/Stacks-using-Arrays',
      '/courses/c-programming/co4/Queues-with-Arrays',
      '/courses/c-programming/co4/Single-Linked-List',
      '/courses/c-programming/co4/Delete-Operation-on-Linked-List',
      '/courses/c-programming/co4/Non-linear-Data-Structures'
    ]
  },

];


const CprogrammingSidebar = ({ children }) => {
  const [selectedContent, setSelectedContent] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const matchedRoute = routes.find((route) => route.paths.some((path) => currentPath.includes(path)));

    if (matchedRoute) {
      setSelectedContent(matchedRoute.content);
    } else {
      setSelectedContent('');
    }
  }, [location]);

  const toggleDropdown = (content) => {
    if (selectedContent === content) {
      setSelectedContent('');
    } else {
      setSelectedContent(content);
    }
  };

  return (
    <div className="CprogrammingSidebarComponent">
      <div className="CprogrammingSidebarContainer">
        <div className="co-header">
          <h2>Course Outcomes Overview</h2>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <div key={route.name} className="whole">
              <div className="whole-link" onClick={() => toggleDropdown(route.content)}>
                <div  className={` link_text arrow-icon ${selectedContent === route.content ? 'expanded' : ''}`}>{route.name}</div>
               
              </div>
              {selectedContent === route.content && (
                <div className="dropdown">
                  <div className="dropdown-content">
                    {route.content.map((item, index) => (
                      <div
                        className={`dc-keys ${
                          route.paths[index] === location.pathname ? 'active' : ''
                        }`}
                        key={item}
                      >
                        <FaLongArrowAltRight />
                        <Link className="dc-keys-link" to={route.paths[index]}>
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <main>{children}</main>
        </section>
      </div>
    </div>
  );
};

export default CprogrammingSidebar;