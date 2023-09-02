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
          <h1>Structure Pointers</h1>
          <p>
            In this page, you will learn about Structure Pointers in C.
          </p>
        </div>
        <div className="c4t-common-intro">
          <p>In the C programming language, structure pointers are used to work with structures indirectly by referencing their memory addresses instead of accessing them directly. This allows for more efficient manipulation of structures and is particularly useful when dealing with dynamically allocated structures or passing structures to functions.</p>
        </div>
        <div className="c4t-common-container">
          <p>To declare a structure pointer in C, you need to define a structure and then declare a pointer variable of the structure type.</p>
            <h3>Example :</h3>
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
          <p>In the example above, we define a structure called Point with two members: x and y. We then declare a structure pointer ptr of type struct Point*. To allocate memory for a structure, we use the malloc() function and specify the size of the structure using sizeof(struct Point). The malloc() function returns a void pointer, which we cast to struct Point* to assign it to ptr.</p>
           <p>To access the structure members using the structure pointer, we use the arrow operator (-&gt;). For example, ptr-&gt;x assigns the value 10 to the x member of the structure pointed to by ptr</p>
           <p>After we're done using the dynamically allocated structure, we should free the memory using the free() function to prevent memory leaks.</p>
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
