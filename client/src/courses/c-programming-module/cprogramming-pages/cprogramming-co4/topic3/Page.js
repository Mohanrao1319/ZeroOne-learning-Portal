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
          <h1>Matrix Algebra with Arrays in C</h1>
          <p>
            In this page, you will learn about matrix algebra with arrays in C.
          </p>
        </div>
        <div className="c4t-common-intro">
          <p>
          In C, arrays are a fundamental data structure that can be used to represent matrices. Matrix algebra involves operations such as addition, subtraction, multiplication, and transpose on matrices. By utilizing arrays and appropriate algorithms, you can perform these operations in C.
          </p>
        </div>
        <div className="c4t-common-container">
          <h3>Creating a Matrix using Arrays</h3>
            <p>To represent a matrix using arrays in C, you can use a two-dimensional array. Here's an example of creating a matrix of size m x n:</p>
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
          <h3>Matrix Addition</h3>
            <p>Matrix addition is performed by adding corresponding elements of two matrices with the same dimensions. Here's an example implementation:</p>
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
          <h3>Matrix Multiplication</h3>
            <p>Matrix multiplication is performed by multiplying corresponding elements and summing the results. Here's an example implementation:</p>
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
          <h3>Matrix Transpose</h3>
          <p>The transpose of a matrix is obtained by interchanging its rows and columns. Here's an example implementation:</p>
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

      </div>
      </div>
                <div className="topic-footer">
                   <CourseFooter/>
                  </div>
    </div>
  );
}

export default Page;
