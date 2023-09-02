import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports files here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

// import icons here
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";

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
                <h1>Derived Data Types</h1>
                <p>In this page you will learn about Derived Data Types
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
                  <p>
                  Derived data types, also known as composite 
                  data types, are data types that are built 
                  from primary data types or other derived data 
                  types. They allow you to create more complex structures 
                  to represent and organize data in programming. Some common 
                  examples of derived data types include:
                  </p>
             </div>
                               {/* code one */}
          <div className="c1t-common-container">
            <p>
           <b> Arrays: </b>  Arrays are derived data types that 
            allow you to store a collection of elements 
            of the same data type. The elements are accessed using an index, 
            starting from 0. Arrays can be one-dimensional, two-dimensional <b>(matrices)</b> , 
            or multi-dimensional. They provide a way to group related data together. 
            </p>
              <h3>dataType: Array</h3>

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

                          {/* code two */}
              <p> <b> Structures: </b>  Structures <b>(structs)</b>  are derived data types that allow you to group 
                  together different types of data under a single name. Each member within a structure can have a different 
                  data type. Structures provide a way to represent complex data structures with related attributes. 
              </p>
              <h3>datatype: Structures</h3>
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


                        {/* code three */}

            <p>Pointers: Pointers are derived data 
               types that store the memory address of 
               another variable. They allow you to indirectly access and manipulate 
               the data stored in a variable. Pointers are useful for dynamic memory
               allocation, passing variables by reference, and working with complex data 
               structures.
            </p>   
                <h3>dataType: Pointer</h3>     
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
 
            <p>These are some of the commonly used derived data types in programming. 
               Each programming language may have its own syntax and additional derived 
               data types, but the concepts behind derived data types remain similar across 
               languages.
            </p>
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