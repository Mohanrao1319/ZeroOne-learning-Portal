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
          <h1>Array of Structures</h1>
          <p>
            In this page, you will learn about Array of Structures in C.
          </p>
        </div>
        <div className="c4t-common-intro">
          <p>An array of structures is a data structure in C that allows you to store multiple instances of a structure in a contiguous block of memory. It provides a convenient way to organize and access a collection of related data. Each element in the array represents one instance of the structure, and you can access individual members of each structure using the array index.</p>
        </div>
        <div className="c4t-common-container">
            <p>Let's break down the concept of an array of structures in more detail:</p>
              <h3>1. Defining a Structure :</h3>
                <p>First, you need to define the structure that represents each element of the array. A structure is a user-defined data type that allows you to combine multiple variables of different types into a single entity. It provides a way to group related data together.</p>
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
          <p>In the above example, we define a structure called Employee that contains three members: name (an array of characters), age (an integer), and salary (a floating-point number). This structure represents the data for an employee, including their name, age, and salary.</p>
            <h3>2. Declaring an Array of Structures :</h3>
              <p>nce the structure is defined, you can declare an array of structures using the structure name and the array syntax. For example, to declare an array of Employee structures with a size of 5, you would write :</p>
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
            <p>This creates an array called employees that can hold 5 Employee structures.</p>
              <h3>3. Accessing Structure Members :</h3>
                <p>To access the members of each structure within the array, you can use the dot (.) operator. The dot operator allows you to access a specific member of a structure.</p>
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
            <p>In the above example, we access the age member of the first element in the array and assign it a value of 30. Then, we access the salary member of the second element in the array and assign it a value of 5000.0.</p>
              <h3>4. Working with Array of Structures :</h3>
                <p> You can perform various operations on an array of structures, such as initialization, modification, and traversal. Here are a few common operations:</p>
                  <h3>Initializing the array of structures :</h3>
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
          <h3>Modifying individual members of a structure :</h3>
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

        <div className="c4t-common-container">
            <h3>Traversing the array and accessing structure members :</h3>
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

        <div className="c4t-common-container">
          <h3>Benefits of Array of Structures :</h3>
       </div>

        <div className="array-structure-ul">
          <ul >
              <li>It allows you to store and manipulate multiple instances of related data in a single data structure.</li>
               <li>Provides easy access to individual members of each structure using array indexing and dot operator.</li>
                <li>Simplifies data management and organization.</li>
                  <li>Facilitates operations on a collection of data, such as sorting, searching, and processing.</li>
            </ul>
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
