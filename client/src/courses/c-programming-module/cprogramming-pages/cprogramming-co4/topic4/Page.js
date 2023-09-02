import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';

import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { codeArr } from './Codes';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

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
          <h1>Structures</h1>
          <p>
            In this page, you will learn about Structures in C.
          </p>
        </div>
        <div className="c4t-common-intro">
         <p>A structure in C is a user-defined data type that allows you to combine different data types under a single name. It helps in organizing related data elements into a cohesive unit.</p>
        </div>
        <div className="c4t-common-container">
          <h3>Here's an example :</h3>
        </div>

        <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[0].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(0)}
            className={copiedIndex === 0 ? 'copied' : ''}
          >
            {copiedIndex === 0 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>

        <div className="c4t-common-container">
          <h3>Declaring and Defining Structures :</h3>
            <p>To declare a structure, you use the struct keyword followed by the structure tag (e.g., struct Employee). Here's an example of declaring and defining structure variables:</p>
        </div>

        <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[1].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(1)}
            className={copiedIndex === 1 ? 'copied' : ''}
          >
            {copiedIndex === 1 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>

        <div className="c4t-common-container">
          <h3>Accessing Structure Members :</h3>
            <p>You can access the members of a structure using the dot operator (.). Here's how you can access structure members:</p>
        </div>

        <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[2].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(2)}
            className={copiedIndex === 2 ? 'copied' : ''}
          >
            {copiedIndex === 2 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>

        <div className="c4t-common-container">
          <h3>Array of Structures :</h3>
          <p>You can create an array of structures to store multiple instances of the same type of structure. Here's an example:</p>
        </div>

        <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[3].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(3)}
            className={copiedIndex === 3 ? 'copied' : ''}
          >
            {copiedIndex === 3 ? <LuCopyCheck /> : <TbCopy />}
          </button>
        </div>

        <div className="c4t-common-container">
          <h3>Structure Pointers :</h3>
          <p>You can use structure pointers to access structure members and pass structures by reference. Here's an example:</p>
       </div>
       <div className="code-common-container">
          <SyntaxHighlighter language="c" style={dracula}>
            {codeArr[4].code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyCode(4)}
            className={copiedIndex === 4 ? 'copied' : ''}
          >
            {copiedIndex === 4 ? <LuCopyCheck /> : <TbCopy />}
          </button>
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
