import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Imports files here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../common-css/index.css';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

// Import icons here
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
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
                <h1>Conditional Statements</h1>
                <p>In this page you will learn about Conditional Statements
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
              <p>Conditional statements in C are used to make decisions based 
                 on certain conditions. They allow the program to execute different 
                 blocks of code depending on whether a specified condition is true or 
                 false. There are mainly three types of conditional statements in C: if 
                 statement, if-else statement, and switch statement. Let's discuss each of 
                 them in detail:</p>
            </div>

                      {/* if statement  */}
            <div className="c1t-common-container">
              <h3>If statement :</h3>
              <p>The if statement is the most basic conditional 
                 statement in C. It evaluates a condition and executes 
                 a block of code if the condition is true. The syntax for 
                 the if statement is as follows:
              </p>
              <h3>Syntax :</h3>
            </div>
            <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[0].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(0)}
                  className={copiedIndex === 0 ? 'copied' : ''}
                >
                  {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
            </div>
            <div className="c1t-common-container">
            <p>Here, the condition is an expression that returns a 
              boolean value (true or false). If the condition is true, 
              the code inside the if block is executed. If the condition is 
              false, the code inside the if block is skipped.
            </p>
            <h3>Example :</h3>
          </div>
           <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[1].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(1)}
                  className={copiedIndex === 1 ? 'copied' : ''}
                >
                  {copiedIndex === 1 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
          </div>

                       {/* If-else statement  */}
                       <div className="c1t-common-container">
              <h3>If-else statement :</h3>
              <p>The if-else statement extends the if statement by 
                 providing an alternative block of code to execute when the condition is 
                 false. The syntax for the if-else statement is as follows:
              </p>
              <h3>Syntax :</h3>
            </div>
            <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[2].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(2)}
                  className={copiedIndex === 2 ? 'copied' : ''}
                >
                  {copiedIndex === 2 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
            </div>
            <div className="c1t-common-container">
            <p>Here, if the condition is true, the code inside 
               the if block is executed. If the condition is false, the 
               code inside the else block is executed.
            </p>
            <h3>Example :</h3>
          </div>
           <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[3].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(3)}
                  className={copiedIndex === 3 ? 'copied' : ''}
                >
                  {copiedIndex === 3 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
          </div>

                       {/* Switch statement  */}
                       <div className="c1t-common-container">
              <h3>Switch statement :</h3>
              <p>The switch statement provides a way to execute different 
                 blocks of code based on the value of an expression. It is often 
                 used when there are multiple possible values to be checked. The 
                 syntax for the switch statement is as follows:
              </p>
              <h3>Syntax :</h3>
            </div>
            <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[4].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(4)}
                  className={copiedIndex === 4 ? 'copied' : ''}
                >
                  {copiedIndex === 4 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
            </div>
            <div className="c1t-common-container">
            <p>Here, the expression is evaluated, and its value is compared against the values 
               specified in the case statements. If a match is found, the corresponding block 
               of code is executed. The break statement is used to exit the switch statement once a 
               match is found. The default case is optional and is executed when none of the case values 
               match the expression.
            </p>
            <h3>Example :</h3>
          </div>
           <div className="code-common-container">
                <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[5].code}
                </SyntaxHighlighter>
                <button
                  onClick={() => copyCode(5)}
                  className={copiedIndex === 5 ? 'copied' : ''}
                >
                  {copiedIndex === 5 ?  <LuCopyCheck/> : <TbCopy/> }
                </button>
          </div>
        <div className="c1t-common-container">
          <h3>Example :</h3>
          <p>These are the basic conditional statements in C. 
             They allow you to control the flow of your program based on certain 
             conditions, making your code more flexible and dynamic.
          </p>
        </div>
      </div>
      </div>
      <div className="topic-footer">
                   <CourseFooter/>
                  </div>v
    </div>
  )
}

export default Page