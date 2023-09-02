
import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactPlayer from 'react-player';


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
                <h1>2D Arrays - Matrixes</h1>
                <p>In this page you will learn 2D Arrays - Matrixes
                   in detail
                </p>
            </div>
            <div className="c4t-common-intro">
              <p>a 2D array is essentially an array of arrays. It allows you to store data in a tabular format, with rows and columns. Each element in a 2D array can be accessed using two indices: one for the row and another for the column.</p>
            </div>
            <div className="c4t-common-container">
              <h3>In C, you can declare and work with 2D arrays using the following syntax :</h3>
            </div>

            <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[0].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(0)}
                          className={copiedIndex === 0 ? 'copied' : ''}
                        >
                          {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>

          <div className="c4t-common-container">
              <h3>Here's an example of declaring a 2D array and initializing its values :</h3>
            </div>

            <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[1].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(1)}
                          className={copiedIndex === 1 ? 'copied' : ''}
                        >
                          {copiedIndex === 1 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>
          <div className="c4t-common-container">
              <h3> Output :</h3>
            </div>

            <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[2].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(2)}
                          className={copiedIndex === 2 ? 'copied' : ''}
                        >
                          {copiedIndex === 2 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>

          <div className="c4t-common-container">
              <p>In the example above, we declare a 2D array called matrix with a size of 3 rows and 3 columns. We then initialize its values using nested curly braces. The nested loops are used to access and print each element of the matrix.</p>
              <p>Here are a few more examples of working with 2D arrays in C:</p>
              <h3>Matrix Addition :</h3>
          </div>
          <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[3].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(3)}
                          className={copiedIndex === 3 ? 'copied' : ''}
                        >
                          {copiedIndex === 3 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>

          <div className="c4t-common-container">
              <h3>Output :</h3>
          </div>

          <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[4].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(4)}
                          className={copiedIndex === 4 ? 'copied' : ''}
                        >
                          {copiedIndex === 4 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>

          <div className="c4t-common-container">
              <h3>Matrix Multiplication :</h3>
          </div>

          <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[5].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(5)}
                          className={copiedIndex === 5 ? 'copied' : ''}
                        >
                          {copiedIndex === 5 ?  <LuCopyCheck/> : <TbCopy/> }
                 </button>
          </div>

          <div className="c4t-common-container">
              <h3>Output :</h3>
          </div>


          <div className="code-common-container">
              <SyntaxHighlighter language='c' style={dracula} >
                  {codeArr[6].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(6)}
                          className={copiedIndex === 6 ? 'copied' : ''}
                        >
                          {copiedIndex === 6 ?  <LuCopyCheck/> : <TbCopy/> }
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