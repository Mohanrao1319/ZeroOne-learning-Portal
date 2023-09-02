import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports files here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

// import icons here
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
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
                <h1>Modularization</h1>
                <p>In this page you will learn about Modularization
                   in detail
                </p>
            </div>
            <div className="c1t-common-container">
              <p>Certainly! Modularization in C programming refers 
                 to breaking down your code into smaller, manageable parts 
                 called functions. Each function performs a specific task or 
                 functionality, making the code easier to understand, maintain, 
                 and reuse. It promotes code organization and separation of concerns.
              </p>
              <h3>Let's take an example to understand modularization in C programming:</h3>
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
            <p>In this example, we have two functions: <b>sum()</b>  and <b>multiply().</b> The <b>sum()</b> function takes two integer arguments and returns their sum, while the <b>multiply()</b> function takes two integer arguments and returns their product.</p>

            <p>By dividing the code into functions, we achieve modularity. The main advantage is that the <b>main()</b>  function becomes more concise and focused on the high-level logic of the program. The actual calculations and operations are offloaded to separate functions, making the code easier to read and understand.</p>

            <p>Modularization allows you to reuse code by calling functions from different parts of your program. For example, if you need to calculate the sum or product of two numbers at multiple places in your program, you can simply call the respective functions instead of rewriting the code each time.</p>

            <p>Additionally, modularization helps in debugging and maintenance. If there is an issue with a specific functionality, you can focus on that particular function without worrying about the rest of the code. It promotes code organization and makes it easier to locate and fix errors.</p>
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