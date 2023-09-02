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
                <h1>Nesting of Conditional Statements</h1>
                <p>In this page you will learn about Nesting of Conditional Statements
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
              <p>
              Nesting of conditional statements refers to the practice of using one or more conditional statements (if, if-else, or switch) within the code block of another conditional statement. It allows for more complex decision-making and branching in your program. Here's an example demonstrating the nesting of conditional statements:
              </p>
            </div>
            <div className="c1t-common-container">
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
            <p>In this example, we have nested an if statement inside another if statement. The outer if statement checks if the age is greater than or equal to 18. If it is, the inner if statement is executed, which checks if the score is greater than or equal to 80. Depending on both conditions, different messages are printed to the console.</p>
            <p>Nesting of conditional statements allows you to create more complex decision structures by combining multiple conditions and actions. However, it's important to maintain proper indentation and use braces <b>{}</b> to clearly define the boundaries of each nested block to ensure code readability and avoid logical errors.</p>
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
      </div>
      </div>
      <div className="topic-footer">
                   <CourseFooter/>
                  </div>
  </div>
  )
}

export default Page