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
                <h1>Nested Loops</h1>
                <p>In this page you will learn about Nested Loops
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
                <p>Nested loops in C refer to a situation where one loop is placed inside another loop. This allows you to perform repetitive tasks within repetitive tasks, creating a multi-dimensional iteration structure. The outer loop controls the execution of the inner loop, and the inner loop executes its iterations for each iteration of the outer loop.</p>
            </div>
            <div className="c2t-common-container">
              <p>The syntax is similar to a regular for loop, but with an additional loop inside. Here's a breakdown of the different components:</p>
              <p> <b>Initialization :</b> This step is used to initialize the loop control variable(s). It typically assigns an initial value to the variable(s) before the loop begins.</p>
              <p> <b>Condition :</b> It is a boolean expression that determines whether the loop should continue iterating or not. If the condition evaluates to true, the loop will execute; otherwise, it will terminate.</p>
              <p> <b>Increment/Decrement :</b> This step updates the loop control variable(s) after each iteration. It is responsible for modifying the variable(s) in a specific way to ensure the loop eventually terminates.</p>
              <p> <b>Outer Loop Code :</b>  This block of code represents the statements that will be executed as part of the outer loop. It can include any valid C statements. </p>
              <p> <b>Inner Loop Code :</b> This block of code represents the statements that will be executed as part of the inner loop. It is nested inside the outer loop and can also include any valid C statements.</p>
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
          <div className="c2t-common-container">
            <p>Remember that the outer loop controls the execution of the inner loop, so the inner loop will be executed completely for each iteration of the outer loop.</p>
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

                <div className="c2t-common-container">
              <p>In this example, we have two nested loops: the outer loop controls the rows, and the inner loop controls the columns. The user is prompted to enter the number of rows and columns. The loops then iterate from 1 to the given number of rows and columns.</p>
              <p>For each iteration of the outer loop, the inner loop will execute completely, printing the current row and column values using the printf statement. After each row is printed, a newline character \n is printed to move to the next line.</p>
              <h3>Let's say the user enters 3 for rows and 4 for columns. The output will be:</h3>
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
  
                <div className="c2t-common-container">
              <p>As you can see, the inner loop is executed completely for each iteration of the outer loop, resulting in a grid-like pattern. This is just one example of how nested loops can be used, and they can be applied in various scenarios depending on your programming needs.</p>
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