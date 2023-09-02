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
                <h1>2D Arrays - Creation & Insertion</h1>
                <p>In this page you will learn about 2D Arrays - Creation & Insertion
                   in detail
                </p>
            </div>

            <div className="c4t-common-intro">
              <p>A two-dimensional array, also known as a matrix, is a data structure that stores elements in a grid-like format with rows and columns. In C, creating and inserting values into a 2D array requires understanding the syntax and proper usage of loops. This article will guide you through the process of creating and inserting values into a 2D array in C.</p>
            </div>

            <div className="c445t-common-container">
                <h3>Creating a 2D Array :</h3>
                  <p>To create a 2D array in C, you need to specify the number of rows and columns it will have. Here's the syntax for declaring a 2D array:</p>
                    <h3>syntax for declaring a 2D array :</h3>
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
               <h3>For example, to create a 3x3 integer matrix, you would write:</h3>
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
              <p>This declaration reserves memory to store nine integer values arranged in a 3x3 grid.</p>
               <h3>Inserting Values into a 2D Array :</h3>
               <p>To insert values into a 2D array, you can use nested loops to iterate over the rows and columns. Here's an example that demonstrates how to insert values into a 3x3 matrix </p>
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
             <p>In this example, we first declare the matrix as a 3x3 integer array. We then use nested for loops to iterate over each element of the array. Inside the loop, we prompt the user to enter the value for each element using scanf(). Finally, we display the contents of the matrix by iterating over the array again and printing each element.</p>
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