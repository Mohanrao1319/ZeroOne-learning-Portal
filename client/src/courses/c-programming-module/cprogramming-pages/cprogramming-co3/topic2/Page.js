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
                <h1>Command Line Arguments</h1>
                <p>In this page you will learn about Command Line Arguments
                   in detail
                </p>
            </div>
            <div className="c3t-common-container">
              <p>In C, command line arguments allow you to pass information to a program when it is executed from the command line. The main function in C can accept two parameters: argc (argument count) and argv (argument vector).</p>
              <h3>Example :</h3>
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
              <p>In the above example, argc represents the number of command line arguments passed to the program, including the name of the program itself. argv is an array of strings (char*), where each element represents an argument passed to the program.</p>
              <h3>For example, if you compile the program and execute it as follows:</h3>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula}>
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
              <h3>The output will be:</h3>
            </div>
            <div className="code-common-container">
              <SyntaxHighlighter language='java' style={dracula}>
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
    <p>Note that the first argument (argv[0]) is always the name of the program itself.</p>
    <p>You can access individual command line arguments using array indexing. For example, argv[1] would give you the first argument, argv[2] would give you the second argument, and so on.</p>
    <p>Keep in mind that the command line arguments are always passed as strings, so if you need to convert them to other data types (such as integers or floats), you'll need to use functions like atoi or atof to perform the conversion.</p>
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
