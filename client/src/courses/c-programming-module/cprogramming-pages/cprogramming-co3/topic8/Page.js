import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactPlayer from 'react-player';


// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
import videoUrl from '../../../../../assets/bubblesort.mp4'
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
                <h1>Dynamic Memory Allocation</h1>
                <p>In this page you will learn about Dynamic Memory Allocation
                   in detail
                </p>
            </div>

            <div className="c3t-common-intro">
              <p>In the C programming language, dynamic memory allocation is a powerful feature that allows programs to allocate memory at runtime. Unlike static memory allocation, which is done at compile-time, dynamic memory allocation enables programs to allocate memory based on specific needs, making it more flexible and efficient. This article will provide a comprehensive overview of dynamic memory allocation in C and its associated functions.</p>
            </div>

            <div className="c3t-common-container">
                <h3>What is Dynamic Memory Allocation?</h3>
                <p>Dynamic memory allocation refers to the process of allocating and deallocating memory during program execution. It allows the program to request memory dynamically from the system as needed. This feature is especially useful when the exact amount of memory required is not known at compile-time or when the memory requirements may vary during program execution.</p>
            </div>

            <div className="c3t-common-container">
              <h3>Dynamic Memory Allocation Functions in C:</h3>
              <p>C provides several functions for dynamic memory allocation, which are part of the standard library <b>&lt;stdlib.h&gt;.</b> The commonly used functions for dynamic memory allocation are:</p>
            </div>

            <div className="c3t-common-container">
               <h3>malloc() :</h3>
                <p>The malloc() function is used to dynamically allocate a block of memory from the heap. It takes the number of bytes to allocate as an argument and returns a pointer to the allocated memory block. If the allocation fails, it returns a NULL pointer.</p>
            </div>

            <div className="c3t-common-container">
               <h3>calloc() :</h3>
                <p>The calloc() function is used to dynamically allocate a block of memory and initialize it with zero. It takes two arguments: the number of elements to allocate and the size of each element. Like malloc(), it returns a pointer to the allocated memory block. If the allocation fails, it returns a NULL pointer.</p>
            </div>

            <div className="c3t-common-container">
               <h3>realloc() :</h3>
               <p>The realloc() function is used to change the size of a previously allocated memory block. It takes two arguments: a pointer to the previously allocated memory block and the new size in bytes. If reallocation is successful, it returns a pointer to the resized memory block. If it fails, it returns a NULL pointer and the original memory block remains unchanged.</p>
            </div>

            <div className="c3t-common-container">
               <h3>free() :</h3>
                <p>The free() function is used to deallocate the dynamically allocated memory. It takes a pointer to the memory block as an argument and releases the memory back to the system. Once memory is deallocated, it should not be accessed again.</p>
                <h3>Example :</h3>
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

            <div className="c3t-common-container">
               <p>In this example, we first prompt the user to enter the size of an array. Then, using the malloc() function, we dynamically allocate memory to store the array elements. If the allocation fails, we print an error message and exit the program. Otherwise, we ask the user to enter the numbers and display them back. Finally, we free the allocated memory using the free() function to release the resources.</p>
               <h3>Conclusion :</h3>
               <p>Dynamic memory allocation in C provides a flexible and efficient way to manage memory during program execution. By using functions like malloc(), calloc(), realloc(), and free(), you can allocate memory as needed and release it when it is no longer required. Understanding dynamic memory allocation is crucial for developing programs that can adapt to changing memory requirements and optimize memory usage.</p>
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