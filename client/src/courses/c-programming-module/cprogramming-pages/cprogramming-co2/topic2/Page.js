import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../Common-css/index.css'
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';


import { codeArr } from './Codes';


function Page() {

  const handleCp = () => {
    setCopiedIndex(-1);
  }
  
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
                <h1>Iterative Statements</h1>
                <p>In this page you will learn about Iterative Statements
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
              <p>In C, iterative statements are used to execute a block of code repeatedly as long as a certain condition is true. The three main types of iterative statements in C are:</p>
            </div>
            <div className="c2t-common-container">
              <h3>for loop :</h3>
              <p>The for loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement. The syntax of the for loop is as follows:</p>
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
          <div className="c2t-common-intro">
            <p>Here's an example that prints numbers from 1 to 5 using a for loop:</p>
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

                <div className="c2t-common-container">
              <h3>while loop :</h3>
              <p>The while loop is used when the number of iterations is not known in advance, but there is a condition that needs to be checked before each iteration. The loop continues as long as the condition is true. The syntax of the while loop is as follows:</p>
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
          <div className="c2t-common-intro">
            <p>Here's an example that prints numbers from 1 to 5 using a while loop:</p>
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


                <div className="c2t-common-container">
              <h3>do-while loop :</h3>
              <p>The do-while loop is similar to the while loop, but the condition is checked after each iteration. This means that the loop body is executed at least once, even if the condition is initially false. The syntax of the do-while loop is as follows:</p>
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
          <div className="c2t-common-intro">
            <p>Here's an example that prints numbers from 1 to 5 using a do-while loop:</p>
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

                </div>
              </div>
              <div className="topic-footer">
                   <CourseFooter/>
                  </div>
         </div>

  )
}

export default Page