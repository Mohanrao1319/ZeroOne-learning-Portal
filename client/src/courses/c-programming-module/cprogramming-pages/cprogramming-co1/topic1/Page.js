import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import files here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../common-css/index.css'
import CNavbar from '../../../C-programming-nav/Cnavbar';

// import icons here 
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
import { codeArr } from './Codes';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';

const Page = () => {
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
                      <h1>Structured-Programming-Paradigm</h1>
                      <p>
                        In this page you will learn about Structured-Programming-Paradigm
                        in detail
                      </p>
                  </div>
                    <div className="c1t-common-intro">
                      <p>
                        The structured programming paradigm emphasizes the use of
                        structured control flow constructs, such as if...else statements,
                        loops, and subroutines, to write programs that are easy to read,
                        understand, and maintain. The design principles of structured
                        programming promote clarity, modularity, and efficiency in software
                        development.
                      </p>
                    </div>

                                            {/* first one */}
                <div className="c1t-common-container">
                    <h3>1. Single Entry, Single Exit (SESE):</h3>
                      <p>
                        Single Entry, Single Exit (SESE): Each block of code should have
                        only one entry point and one exit point, making the program flow
                        more predictable and easier to follow. This principle helps in
                        avoiding spaghetti code and makes debugging and maintenance easier.
                      </p>
                      <h3>Example : </h3>
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
                    </div>
                                      {/* second one */}
                  <div className="c1t-common-container">
                      <h3>2.Top-Down Design:</h3>
                          <p>
                          Break down the problem into smaller, manageable modules 
                          or functions. Start with the main problem and then 
                          decompose it into sub-problems. Each sub-problem can be
                          further decomposed until the solution is simple enough to implement.
                          </p>
                      <h3>Example : </h3>
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

                            {/* three one */}
                  <div className="c1t-common-container">
                      <h3>3.Stepwise Refinement:</h3>
                          <p>
                          Refine the solution step by step, starting with a high-level
                           outline and gradually adding more details. This approach 
                           allows you to focus on one part of the problem at a time, 
                           making it easier to verify and debug the code.
                          </p>
                      <h3>Example : </h3>
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
                    </div>

                    {/* four one */}
                  <div className="c1t-common-container">
                      <h3>4.Use of Control Structures:</h3>
                          <p>
                          Utilize control structures such as if...else statements,
                          loops, and switch statements to control the flow of 
                          execution based on different conditions. These structures help 
                          in making decisions, iterating over data, and handling different cases effectively.
                          </p>
                      <h3>Example : </h3>
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
                    </div>


                       {/* five one */}
                  <div className="c1t-common-container">
                      <h3>5.Modularization:</h3>
                          <p>
                          Divide the program into modules or functions, each 
                          responsible for a specific task. Modularization promotes
                           code reusability, readability, and maintainability. Each 
                           module should have a well-defined purpose and interface to
                            interact with other modules.
                          </p>
                      <h3>Example : </h3>
                      <div className="code-common-container">
                          <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[1].code}
                          </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(0)}
                          className={copiedIndex === 0 ? 'copied' : ''}
                        >
                          {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                          </button>
                      </div>
                    </div>
                </div>
            </div>
            <div className="topic-footer">
                   <CourseFooter/>
             </div>
          </div>
  );
};

export default Page;
