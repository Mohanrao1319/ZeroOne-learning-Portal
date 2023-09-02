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
                      <h1>User input from console</h1>
                      <p>In this page, you will learn about User input from console in C programming.</p>
                    </div>
                    <div className="c1t-common-container">
                      <p>In C programming, the "User input from console" refers to the process of receiving data or information entered by the user through the command line or terminal window. It allows users to interact with a C program and provide input values dynamically.</p>
                        <p>To obtain user input from the console in C, you can use the <b>scanf()</b>  function from the stdio.h library. The  <b>scanf()</b> function reads formatted input from the user and stores it in variables specified by the programmer.</p>
                         <h3>Integer :</h3>
                          <p>Use <b>%d</b> as the format specifier to read an integer from the user.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[0].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(0)} className={copiedIndex === 0 ? 'copied' : ''}>
                        {copiedIndex === 0 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    </div>

                    <div className="c1t-common-container">
                         <h3>Floating-Point :</h3>
                          <p>Use <b>%f</b>  as the format specifier to read an integer from the user.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[1].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(1)} className={copiedIndex === 1 ? 'copied' : ''}>
                        {copiedIndex === 1 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    </div>

                    <div className="c1t-common-container">
                         <h3>Double :</h3>
                          <p>Use <b>%lf</b> to read a double (floating-point with double precision) from the user.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[2].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(2)} className={copiedIndex === 2 ? 'copied' : ''}>
                        {copiedIndex === 2 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    </div>

                    <div className="c1t-common-container">
                         <h3>Character :</h3>
                          <p>Use <b>%c</b> to read a single character from the user. Note the space before <b>%lf</b> to skip any leading whitespace or newline characters.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[3].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(3)} className={copiedIndex === 3 ? 'copied' : ''}>
                        {copiedIndex === 3 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    </div>


                    <div className="c1t-common-container">
                         <h3>String :</h3>
                          <p>Use <b>%ls</b> to read a string (sequence of characters) from the user. Make sure to provide a character array (string) as the argument to store the input.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[4].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(4)} className={copiedIndex === 4 ? 'copied' : ''}>
                        {copiedIndex === 4 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    </div>
                    <div className="c1t-common-container">
                    <h3>Important :</h3>
                    <p>It's important to ensure that the format specifiers match the data types of the variables being used to store the input. Additionally, error handling should be implemented to handle cases where the user enters invalid input.  </p>
                    <p> Remember to include the stdio.h header file at the beginning of your program to access the scanf function.</p>
                  </div>
      </div>
                </div>
                <div className="topic-footer">
                   <CourseFooter/>
                  </div>
              </div>
  );
}

export default Page;
