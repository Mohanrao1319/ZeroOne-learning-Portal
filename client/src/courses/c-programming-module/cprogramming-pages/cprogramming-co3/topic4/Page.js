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
                <h1>Arrays - Creation & Insertion</h1>
                <p>In this page you will learn about Arrays - Creation & Insertion
                   in detail
                </p>
            </div>
            <div className="c3t-common-intro">
              <p>Arrays are an essential data structure in C that allow you to store multiple elements of the same type in a contiguous block of memory. In this section, we will learn how to create arrays and insert elements into them. Understanding these concepts is crucial for developing efficient and structured programs in C.</p>
            </div>
            <div className="c3t-common-container">
              <h3>Creating an Array :</h3>
              <p>To create an array in C, you need to declare a variable of the desired array type and specify its size. The syntax for creating an array is as follows:</p>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
                  {codeArr[0].code}
              </SyntaxHighlighter>
              <button
                          onClick={() => copyCode(0)}
                          className={copiedIndex === 0 ? 'copied' : ''}
                        >
                          {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
            </div>


            <div className="c3t-common-container">
              <h3>For example, to create an array of integers with a size of 5, you can write :</h3>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
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
              <p>This statement declares an array named "numbers" that can hold five integer values. By default, the elements of the array are uninitialized, meaning they may contain garbage values.</p>
                <h3>Inserting Elements into an Array :</h3>
                 <p>After creating an array, you can insert values into its individual elements. Each element in the array can be accessed using its index, which starts from 0 and goes up to array_size - 1. To insert a value into a specific element, you can use the assignment operator (=) to assign a value to the element at the desired index.</p>
                  <h3>Consider the following example that inserts values into the "numbers" array :</h3>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
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
                 <p>In this example, we insert the values 10, 20, 30, 40, and 50 into the elements of the "numbers" array at indices 0, 1, 2, 3, and 4, respectively.</p>
                 <p>You can also initialize an array during its creation by specifying the values in curly braces {}. For example:</p>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
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
              <p>This statement creates an array named "numbers" and initializes it with the specified values. The size of the array is automatically determined based on the number of values provided.</p>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
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
                <h3>Conclusion :</h3>
                <p>Arrays are powerful data structures in C that allow you to store and access multiple elements efficiently. Understanding how to create arrays and insert elements into them is fundamental for writing programs that deal with collections of data. With this knowledge, you can now start building more complex programs that require the use of arrays.</p>
                <p>Here's an example code that demonstrates the creation and insertion of elements in an array using user input with scanf:</p>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula} >
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