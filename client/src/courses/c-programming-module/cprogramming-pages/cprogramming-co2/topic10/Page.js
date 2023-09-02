import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

import { codeArr } from './Codes';

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
                <h1>Problem Solving with Recursion</h1>
                <p>In this page you will learn about Problem Solving with Recursion
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
              <p>Recursion is a powerful technique for solving various problems. Here are a few common problem-solving examples using recursion in C:</p>
            </div>
            

            <div className="c2t-common-container">
              <h3>Sum of Natural Numbers :</h3>
              <ul>
                <li>Calculate the sum of the first n natural numbers.</li>
                <li>Recursive Approach:</li>
              </ul>
          </div>

            <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[0].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(0)} className={copiedIndex === 0 ? 'copied' : ''}>
                    {copiedIndex === 0 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>

       <div className="c2t-common-container">
              <h3>Exponential Calculation :</h3>
              <ul>
                <li>Calculate the value of base raised to the power of exponent.</li>
                <li>Recursive Approach:</li>
              </ul>
          </div>


            <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[1].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(1)} className={copiedIndex === 1 ? 'copied' : ''}>
                    {copiedIndex === 1 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>

                <div className="c2t-common-container">
              <h3>Reverse a String :</h3>
              <ul>
                <li>Recursive Approach:</li>
              </ul>
          </div>

            <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[2].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(2)} className={copiedIndex === 2 ? 'copied' : ''}>
                    {copiedIndex === 2 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>
       
          <div className="c2t-common-container">
              <h3>Counting Digits :</h3>
              <ul>
                <li>Count the number of digits in a positive integer.</li>
                <li>Recursive Approach:</li>
              </ul>
          </div>

          <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[2].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(2)} className={copiedIndex === 2 ? 'copied' : ''}>
                    {copiedIndex === 2 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>

          <div className="c2t-common-container">
              <h3>Palindrome Check :</h3>
              <ul>
                <li>Determine whether a given string is a palindrome (reads the same forwards and backwards).</li>
                <li>Recursive Approach:</li>
              </ul>
          </div>

          <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[2].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(2)} className={copiedIndex === 2 ? 'copied' : ''}>
                    {copiedIndex === 2 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
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