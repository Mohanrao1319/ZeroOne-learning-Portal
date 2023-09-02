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
                <h1>Bitwise operators </h1>
                <p>In this page you will learn about Bitwise operators 
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
              <p>Bitwise operators are used in C to perform operations on individual bits of integer values. They manipulate the binary representation of numbers at a bit level. Here are the bitwise operators in C:</p>
            </div>
            <div className="c2t-common-container">
            <h3>Bitwise AND (&) :</h3>
            <p>Performs a bitwise AND operation between the corresponding bits of two operands. It returns 1 if both bits are 1; otherwise, it returns 0.</p>
            <h3>Example :</h3>
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
            <h3>Bitwise OR (|) :</h3>
            <p>Performs a bitwise OR operation between the corresponding bits of two operands. It returns 1 if at least one of the bits is 1; otherwise, it returns 0.</p>
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

                {/* // xor */}
      <div className="c2t-common-container">
            <h3>Bitwise XOR (^) :</h3>
            <p>Performs a bitwise exclusive OR (XOR) operation between the corresponding bits of two operands. It returns 1 if the bits are different; otherwise, it returns 0.</p>
            <h3>Example :</h3>
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
            <h3>Bitwise NOT (~) :</h3>
            <p>Flips the bits of the operand, converting 1s to 0s and 0s to 1s. It is a unary operator and operates on a single operand.</p>
            <h3>Example :</h3>
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
            <h3>Left Shift (&#60;&#60;) :</h3>
            <p>Shifts the bits of the left operand to the left by the number of positions specified by the right operand. The leftmost bits are filled with zeros.</p>
            <h3>Example :</h3>
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

        <div className="c2t-common-container">
            <h3>Right Shift (&gt;&gt;) :</h3>
            <p>Shifts the bits of the left operand to the right by the number of positions specified by the right operand. The rightmost bits are filled with zeros for unsigned values and with the sign bit for signed values.</p>
            <h3>Example :</h3>
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