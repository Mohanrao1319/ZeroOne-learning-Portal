import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
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
                <h1>Strings and String Library</h1>
                <p>In this page you will learn about Strings and String Library
                   in detail
                </p>
            </div>

            <div className="c3t-common-intro">
              <p>In C, strings are represented as arrays of characters. The standard library provides a set of functions for working with strings, which are declared in the &lt;string.h&gt; header file.</p>
            </div>

            <div className="c3t-common-container">
              <h3>Here are some commonly used functions from the C string library:</h3>
              <h3>strlen: Calculates the length of a string.</h3>
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

                            {/* two */}
                  <div className="c3t-common-container">
              <h3>strcpy and strncpy: Copies one string to another.</h3>
            </div>

            <div className="code-common-container">
                        <SyntaxHighlighter language="c" style={dracula}>
                          {codeArr[1].code}
                        </SyntaxHighlighter>
                        <button
                          onClick={() => copyCode(1)}
                          className={copiedIndex === 1 ? 'copied' : ''}
                        >
                        {copiedIndex === 1 ?  <LuCopyCheck/> : <TbCopy/> }
                        </button>
                  </div>


                  <div className="c3t-common-container">
              <h3> strcmp and strncmp: Compares two strings.</h3>
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


                  <div className="c3t-common-container">
              <h3>strcat and strncat: Concatenates two strings.</h3>
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



                  <div className="c3t-common-container">
              <h3>strstr: Searches for the first occurrence of a substring in a string.</h3>
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




                  <div className="c3t-common-container">
              <h3>strtok: Splits a string into tokens based on a delimiter.</h3>
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

export default Page;