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
                <h1>Basic Operators</h1>
                <p>In this page you will learn about Basic Operators
                   in detail
                </p>
            </div>
            <div className="c1t-common-intro">
                  <p>
                  Basic operators are fundamental building blocks in programming that allow
                  you to perform various operations on data. These operators can manipulate values, 
                  perform mathematical calculations, compare values, and more. Here are some examples of 
                  basic operators:
                  </p>
             </div>
              <div className="c1t-common-container">

                          {/* table one */}
              
                <div className="Arithmetic-Operators">
                 <h3>Arithmetic Operators:</h3>
                 <p>Arithmetic operations in the C programming language involve 
                    performing mathematical calculations on numerical data types. 
                    C provides several operators for arithmetic operations, including
                    addition, subtraction, multiplication, division, and modulus.
                </p>
              <div className="topic6-table-one">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>+</td>
                        <td>Addition: Adds two values together </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>-</td>
                        <td>Subtraction: Subtracts one value from another </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>*</td>
                        <td>Multiplication: Multiplies two values </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>/</td>
                        <td>Division: Divides one value by another </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>%</td>
                        <td>Modulus: Returns the remainder after division </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    <h3>Example :</h3>

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
                </div>
              

                        {/* table two  */}
             <div className="Increment-Decrement">
                <h3>Increment & Decrement :</h3>
                  <p>
                  Certainly! In the C programming language, 
                  the increment <b>(++)</b> and decrement <b>(--)</b> operators are used to 
                  increase or decrease the value of a variable by 1, respectively.
                  </p>

                <div className="topic6-table-two">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>++k</td>
                        <td>Prefix Increment</td>
                      </tr>
                      <tr>
                        <td>k++</td>
                        <td>Postfix Increment</td>
                      </tr>
                      <tr>
                        <td>--k</td>
                        <td>Prefix Decrement</td>
                      </tr>
                      <tr>
                        <td>k--</td>
                        <td>Postfix Decrement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <div className="c1t-common-container">
                 <h3> 
                 Prefix Increment <b>(++k) :</b>
                 </h3>
                 <p>
                 When used as a prefix, <b>++</b>  is placed before 
                 the variable, like  <b>++k</b> It increments the value of <b>k</b> by 1 and then 
                 returns the updated value.
                 </p>
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
          
              <div className="c1t-common-container">
                 <h3> 
                 Postfix Increment <b>(k++) :</b>
                 </h3>
                 <p>
                 When used as a postfix, <b>++</b> is placed after the variable, like <b>k++</b>
                 It increments the value of <b>k</b> by 1 but returns the original value before the increment.
                 </p>
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

            <div className="c1t-common-container">
                 <h3> 
                 Prefix Decrement <b>(--k) :</b>
                 </h3>
                 <p>
                 When used as a prefix, <b>--</b> is placed before the 
                 variable, like <b>--k.</b> It decreases the value of <b>--</b> 
                 by 1 and then returns the updated value.
                 </p>
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
                   <div className="c1t-common-container">
                 <h3> 
                 Postfix Decrement <b>(k--) :</b>
                 </h3>
                 <p>
                 When used as a prefix, <b>--</b> is placed before the 
                 variable, like <b>k--</b>  It decreases the value of <b>k</b> by 1 but 
                 returns the original value before the decrement.
                 </p>
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
                </div>

                          {/* table three */}
          <div className="Assignment-Operators">
            <h3>Assignment Operators:</h3>
            <p>
              Assignment operators are used to assign values to variables. The basic assignment operator is <b>=</b>, which assigns the value on the right-hand side to the variable on the left-hand side.
            </p>
            <div className="topic6-table-three">
              <table>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>=</td>
                    <td>Assignment: Assigns a value to a variable</td>
                  </tr>
                  <tr>
                    <td>+=</td>
                    <td>Compound Assignment: Adds and assigns the value</td>
                  </tr>
                  <tr>
                    <td>-=</td>
                    <td>Compound Assignment: Subtracts and assigns the value</td>
                  </tr>
                  <tr>
                    <td>*=</td>
                    <td>Compound Assignment: Multiplies and assigns the value</td>
                  </tr>
                  <tr>
                    <td>/=</td>
                    <td>Compound Assignment: Divides and assigns the value</td>
                  </tr>
                  <tr>
                    <td>%=</td>
                    <td>Compound Assignment: Modulus and assigns the value</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Example :</h3>
            <div className="code-common-container">
              <SyntaxHighlighter language="java" style={dracula}>
                {codeArr[5].code}
              </SyntaxHighlighter>
              <button
                onClick={() => copyCode(5)}
                className={copiedIndex === 5 ? 'copied' : ''}
              >
                {copiedIndex === 5 ? <LuCopyCheck /> : <TbCopy />}
              </button>
            </div>
          </div>


              {/* table four */}
              <div className="Comparison-Operators">
                <h3>Comparison Operators:</h3>
                <p>
                  Comparison operators are used to compare two values and return a Boolean result. They are commonly used in conditional statements and loops to control the flow of a program based on certain conditions.
                </p>
                <div className="topic6-table-four">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>==</td>
                        <td>Equal to: Checks if two values are equal</td>
                      </tr>
                      <tr>
                        <td>!=</td>
                        <td>Not equal to: Checks if two values are not equal</td>
                      </tr>
                      <tr>
                        <td>{">"}</td>
                        <td>Greater than: Checks if the left value is greater than the right value</td>
                      </tr>
                      <tr>
                        <td>{"<"}</td>
                        <td>Less than: Checks if the left value is less than the right value</td>
                      </tr>
                      <tr>
                        <td>{">="}</td>
                        <td>Greater than or equal to: Checks if the left value is greater than or equal to the right value</td>
                      </tr>
                      <tr>
                        <td>{"<="}</td>
                        <td>Less than or equal to: Checks if the left value is less than or equal to the right value</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>Example:</h3>
                <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                    {codeArr[5].code}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => copyCode(5)}
                    className={copiedIndex === 5 ? 'copied' : ''}
                  >
                    {copiedIndex === 5 ? <LuCopyCheck /> : <TbCopy />}
                  </button>
                </div>
              </div>

              {/* table five */}
              <div className="Logical-Operators">
                <h3>Logical Operators:</h3>
                <p>
                  Logical operators are used to perform logical operations on Boolean values. They are typically used to combine multiple conditions or invert the result of a condition.
                </p>
                <div className="topic6-table-five">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>&&</td>
                        <td>Logical AND: Returns true if both conditions are true</td>
                      </tr>
                      <tr>
                        <td>||</td>
                        <td>Logical OR: Returns true if at least one condition is true</td>
                      </tr>
                      <tr>
                        <td>!</td>
                        <td>Logical NOT: Negates a condition, returns true if the condition is false</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>Example:</h3>
                <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                    {codeArr[6].code}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => copyCode(6)}
                    className={copiedIndex === 6 ? 'copied' : ''}
                  >
                    {copiedIndex === 6 ? <LuCopyCheck /> : <TbCopy />}
                  </button>
                </div>
              </div>

              {/* table six */}
              <div className="Bitwise-Operators">
                <h3>Bitwise Operators:</h3>
                <p>
                  Bitwise operators are used to perform operations on individual bits of binary numbers. They are commonly used in low-level programming, such as working with hardware or manipulating binary data.
                </p>
                <div className="topic6-table-six">
                  <table>
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>&</td>
                        <td>Bitwise AND: Performs a bitwise AND operation</td>
                      </tr>
                      <tr>
                        <td>|</td>
                        <td>Bitwise OR: Performs a bitwise OR operation</td>
                      </tr>
                      <tr>
                        <td>^</td>
                        <td>Bitwise XOR: Performs a bitwise XOR (exclusive OR) operation</td>
                      </tr>
                      <tr>
                        <td>~</td>
                        <td>Bitwise NOT: Performs a bitwise NOT (one's complement) operation</td>
                      </tr>
                      <tr>
                        <td>{"<<"}</td>
                        <td>Left shift: Shifts the bits of a number to the left</td>
                      </tr>
                      <tr>
                        <td>{">>"}</td>
                        <td>Right shift: Shifts the bits of a number to the right</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>Example:</h3>
                <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                    {codeArr[7].code}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => copyCode(7)}
                    className={copiedIndex === 7 ? 'copied' : ''}
                  >
                    {copiedIndex === 7 ? <LuCopyCheck /> : <TbCopy />}
                  </button>
                </div>
              </div>
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