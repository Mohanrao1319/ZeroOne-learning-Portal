import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
import ReactPlayer from 'react-player';

import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { codeArr } from './Codes';
import videoUrl from '../../../../../assets/stack.mp4'
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

function Page() {
  const handleCp = () => {
    setCopiedIndex(-1);
  };

  const [copiedIndex, setCopiedIndex] = useState(-1);
  const copyCode = (index) => {
    const textarea = document.createElement('textarea');
    textarea.value = codeArr[index].code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setCopiedIndex(index);
    setTimeout(() => handleCp(), 500);
  };

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
                <h1>Stacks using Arrays</h1>
                <p>In this page you will learn Stacks using Arrays 
                   in detail
                </p>
            </div>

            <div className="c4t-common-intro">
              <p>In computer science, a stack is an abstract data type that follows the Last-In-First-Out <b> (LIFO) </b> principle. It can be implemented using arrays or linked lists. Here's an example of implementing a stack using arrays in C </p>
            </div>

            <div className="c4t-common-container">
              <h3>Animated Video :</h3>
            </div>

            <div className="stack-video-container">
              <ReactPlayer 
                url={videoUrl} 
                controls={true}  
                width="38%"
                height="100%" 
              />
              <a href="https://www.instagram.com/worldofivo/"> Video Credits : worldofivo </a>
            </div>


            <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[0].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(0)}
            className={copiedIndex === 0 ? 'copied' : ''}
          >
            {copiedIndex === 0 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>


        <div className="c4t-common-container">
          <p>The code defines several functions to perform operations on the stack :</p>
          <h3>pop() :</h3>
          <p>This function is used to remove and retrieve the topmost element from the stack. It first checks if the stack is empty (top == -1). If it is empty, it prints an "Under Flow" message. Otherwise, it prints the value of the popped element and decrements the top variable.</p>
        </div>

        <div className="c4t-common-container">
          <h3>push() :</h3>
          <p>This function is used to push an element onto the stack. It first checks if the stack is full (top == N - 1). If it is full, it prints an "Over Flow" message. Otherwise, it prompts the user to enter an element, reads it using scanf(), increments the top variable, and assigns the entered element to the corresponding index in the stack </p>
        </div>


        <div className="c4t-common-container">
          <h3>peek() :</h3>
          <p>This function is used to retrieve the value of the topmost element in the stack without removing it. It first checks if the stack is empty (top == -1). If it is empty, it prints an "Under Flow" message. Otherwise, it prints the value of the top element in the stack array.</p>
        </div>


        <div className="c4t-common-container">
          <h3>display() :</h3>
          <p>This function is used to display all the elements in the stack. It first checks if the stack is empty (top == -1). If it is empty, it prints an "Under Flow" message. Otherwise, it iterates over the stack array starting from the topmost element and prints each element.</p>
        </div>

        <div className="stack-ul-container">
            <ul>
              <li> <b>Option 1: </b>Calls the push() function to push an element onto the stack.</li>
              <li><b>Option 2: </b> Calls the pop() function to pop an element from the stack.</li>
              <li><b>Option 3: </b> Calls the peek() function to peek at the top element in the stack.</li>
              <li><b>Option 4: </b> Calls the display() function to display all the elements in the stack.</li>
              <li><b>Option 5: </b> Exits the program by calling exit(0).</li>
            </ul>
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