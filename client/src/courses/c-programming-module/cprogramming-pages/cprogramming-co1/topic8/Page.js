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
                      <h1>Storage Classes</h1>
                      <p>In this page, you will learn about storage classes in C programming.</p>
                    </div>
                    <div className="c1t-common-container">
                      <p>Storage classes in C programming define the scope, visibility, and lifetime of variables. There are four storage classes in C: `auto`, `register`, `static`, and `extern`.</p>
                      <h3>Auto Storage Class:</h3>
                      <p>The `auto` storage class is the default storage class for local variables declared within a block or function. Variables declared as `auto` are allocated memory automatically when the block or function is entered and deallocated when it is exited. The `auto` keyword is rarely used explicitly, as it is the default behavior.</p>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[0].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(0)} className={copiedIndex === 0 ? 'copied' : ''}>
                        {copiedIndex === 0 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    <div className="c1t-common-container">
                      <h3>Register Storage Class:</h3>
                      <p>The `register` storage class is used to define local variables that should be stored in CPU registers instead of memory. Variables declared as `register` are limited to a maximum size (usually the size of a CPU register) and can't have the unary `&` (address-of) operator applied to them. The compiler decides whether to allocate a variable in a register based on availability and optimization considerations. Using the `register` keyword is just a suggestion to the compiler, and it may or may not choose to allocate the variable in a register.</p>
                    </div>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[1].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(1)} className={copiedIndex === 1 ? 'copied' : ''}>
                        {copiedIndex === 1 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    <div className="c1t-common-container">
                      <h3>Static Storage Class:</h3>
                      <p>The `static` storage class has two different uses: for local variables and for global variables/functions. For local variables, when a local variable is declared as `static` within a function or block, it retains its value between invocations of that function or block. The variable is allocated memory once and keeps its value even when the function or block ends.</p>
                    </div>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[2].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(2)} className={copiedIndex === 2 ? 'copied' : ''}>
                        {copiedIndex === 2 ? <LuCopyCheck /> : <TbCopy />}
                      </button>
                    </div>
                    <div className="c1t-common-container">
                      <h3>Extern Storage Class:</h3>
                      <p>The `extern` storage class is used to declare a global variable that is defined in another file. It is used when you want to access a variable defined in a different file. When you use the `extern` keyword to declare a variable, it tells the compiler that the variable is defined elsewhere. The actual definition of the variable must be provided in a separate file that is linked with the current file during the compilation process.</p>
                    </div>
                    <div className="code-common-container">
                      <SyntaxHighlighter language="c" style={dracula}>
                      {codeArr[3].code}
                      </SyntaxHighlighter>
                      <button onClick={() => copyCode(3)} className={copiedIndex === 3 ? 'copied' : ''}>
                        {copiedIndex === 3 ? <LuCopyCheck /> : <TbCopy />}
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
}

export default Page;
