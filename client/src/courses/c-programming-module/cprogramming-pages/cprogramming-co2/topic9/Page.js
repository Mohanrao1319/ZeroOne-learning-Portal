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
                <h1>Recursion</h1>
                <p>In this page you will learn about Recursion
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
              <p>Recursion is a programming technique where a function calls itself either directly or indirectly. In other words, a recursive function is a function that solves a problem by reducing it into smaller instances of the same problem.</p>
            </div>
            <div className="c2t-common-container">
              <p>The idea behind recursion is to break down a complex problem into simpler subproblems, solve each subproblem in a similar manner, and then combine the results to obtain the final solution.</p>
            </div>
            <div className="c2t-common-container">
              <p>1. The recursive function must have a base case or termination condition that specifies when the recursion should stop.</p>
               <p>2. The recursive function should make a recursive call to itself with a modified version of the input to solve a smaller subproblem.</p>
                <p>3. The recursive function should eventually reach the base case to terminate the recursion.</p>
                  <h3>Syntax :</h3>
          </div>
                  <div className="c2t-common-container">
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
              <p><b>Return Type:</b> The return type specifies the data type of the value that the function will return.</p>
              <p><b>Function Name:</b> It is the name of the recursive function.</p>
              <p><b>Parameters:</b> The parameters are optional and can be used to pass arguments to the recursive function.</p>
              <p><b>Base Case (Termination Condition):</b> The base case is the condition that determines when the recursion should stop. When the base case is reached, the function returns a specific value without making further recursive calls.</p>
              <p><b>Recursive Case:</b> This part handles the recursive aspect of the function. It includes modifying the input or parameters to move towards the base case and making a recursive call to the function itself.</p>
              <p><b>Combining Results:</b> After the recursive call, you might need to combine the results obtained from the recursive call to obtain the final result.</p>
              <p><b>Returning the Final Result:</b> Finally, the function returns the final result obtained either from the base case or by combining the results of the recursive calls.</p>
              <h3>Example :</h3>
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
              <h3>Explanation :</h3>
              <p>The factorial function calculates the factorial of a given number n. If the number is 0 or 1, it returns 1 (base case). Otherwise, it recursively calls itself with n-1 as the argument and multiplies the result by n.</p>
              <p>When the program executes, it calls the factorial function with num as the argument (num = 5 in this case). The factorial function then recursively calls itself with 4 as the argument, then 3, 2, and finally 1. At this point, the base case is reached, and the function starts returning the results back up the call stack.</p>
              <h3>The output of the program will be :</h3>
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