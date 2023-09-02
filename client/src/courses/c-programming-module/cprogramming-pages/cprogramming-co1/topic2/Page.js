import React, {useState} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


// imports files here 
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import CNavbar from '../../../C-programming-nav/Cnavbar';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';


// import react icons here 
import { codeArr } from './Codes';
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";

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
                <h1>Designing Algorithms</h1>
                <p>In this page you will learn about Designing Algorithms
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
                      <p>
                      Designing algorithms is a fundamental skill for
                      every aspiring programmer. An algorithm is a 
                      step-by-step procedure used to solve a specific 
                      problem. Efficient algorithm design is crucial for
                      writing code that runs smoothly, minimizes resource 
                      usage, and produces correct results. In this guide, 
                      we will explore the key concepts and techniques 
                      involved in designing algorithms, accompanied by 
                      illustrative examples
                      </p>
               </div>

                            {/* first one */}
                   <div className="c1t-common-container">
                      <h1>1.Problem Analysis:</h1>
                      <p>
                      To analyze the problem of adding two numbers,
                      let's break it down into its key components:
                      </p>
                      <h3>Input:</h3>
                      <p>We require two numbers, which we'll refer to as num1 and num2. These numbers can be integers, floating-point numbers, or any valid numeric values.</p>
                      <p> input can be obtained from the user through a keyboard input or can be predefined within the program.</p>
                      <h3>Output:</h3>
                      <p>The desired output is the sum of the two numbers, which we'll denote as sum.</p>
                      <p>The output should be displayed to the user or stored in a variable for further processing.</p>
                      <p>With these components defined, we can proceed to design an algorithm that solves the problem of adding two numbers efficiently.</p>
                      <h3>Algorithm:</h3>
                      <p>Based on the problem analysis, we can design a simple algorithm to add two numbers using the following steps:</p>
                      <p> <b>Step 1 :</b> Start by inputting the two numbers, <b>num1</b> and <b>num2</b>, from the user or any other source.</p>
                      <p> <b>Step 2 :</b> Add <b>num1</b>  and <b>num2</b> together to calculate the <b>sum. </b> </p>
                      <p> <b>Step 3 :</b> Store the calculated sum in a variable, let's call it <b>sum. </b></p>
                      <p> <b>Step 4 :</b> Display the value of <b>sum</b> as the output. </p>
                      <p> <b>To summarize, here is a clear and concise algorithm for adding two numbers:</b> </p>
                  </div>
                       <div className="code-common-container">
                        <SyntaxHighlighter language="python" style={dracula}>
                          {codeArr[0].code}
                        </SyntaxHighlighter>
                        <button
                          onClick={() => copyCode(0)}
                          className={copiedIndex === 0 ? 'copied' : ''}
                        >
                        {copiedIndex === 0 ?  <LuCopyCheck/> : <TbCopy/> }
                        </button>
                  </div>
                  <div className="c1t-common-container"> 
                    <p>This algorithm follows a straightforward approach, allowing us to obtain the sum of two numbers accurately. 
                      It can be implemented in any programming language by taking user input, performing the addition operation, 
                      and displaying the result.
                    </p>
                    <h3>Conclusion:</h3>
                    <p>In this problem analysis, we have defined the input, output, and algorithm for adding two numbers. By following this algorithm, you can easily perform the addition operation and obtain the desired sum. Understanding the problem requirements and
                      designing a clear algorithm is a crucial step in solving programming problems effectively.
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