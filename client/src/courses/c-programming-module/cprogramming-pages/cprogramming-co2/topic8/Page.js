import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';


import { codeArr } from './Codes';

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
          <h1>Operator Precedency</h1>
          <p>
            In this page you will learn about Operator Precedency in detail.
          </p>
        </div>
        <div className="c2t-common-intro">
          <p>
          Operator precedence in C determines the order in which operators are evaluated within an expression. It ensures that the expressions are evaluated consistently and produces the expected results. Here is a list of operators in C, ordered from highest to lowest precedence:
          </p>
          </div>
          
          <div className="c2t-common-container">
                <h3>Parentheses: ( )</h3>
                <p>
                  Parentheses are used to group expressions and enforce a specific evaluation order. 
                  Expressions inside parentheses are evaluated first.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Postfix Operators: ++ --</h3>
                <p>
                  Postfix increment (++) and postfix decrement (--) operators. They are applied to a variable after its value has been used.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Prefix Operators: ++ -- + - ! ~</h3>
                <p>
                  Prefix increment (++), prefix decrement (--), unary plus (+), unary minus (-), logical NOT (!), 
                  and bitwise NOT (~) operators. These operators are applied to a variable before its value is used.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Multiplicative Operators: * / %</h3>
                <p>
                  Multiplication (*), division (/), and modulus (%) operators. They perform arithmetic operations on numeric operands.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Additive Operators: + -</h3>
                <p>
                  Addition (+) and subtraction (-) operators. They perform arithmetic operations on numeric operands.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Shift Operators: &#60;&#60; &gt;&gt;</h3>
                <p>
                  Left shift (&#60;&#60;) and right shift (&gt;&gt;) operators. They perform bitwise shifting operations.
                </p>
              </div>

              <div className="c2t-common-container">
                  <h3>Relational and Equality Operators: &lt; &gt; &lt;= &gt;= == !=</h3>
                  <p>
                    Less than (&amp;lt;), greater than (&amp;gt;), less than or equal to (&amp;lt;=), greater than or equal to (&amp;gt;=),
                    equality (==), and inequality (!=) operators. They compare values and produce a Boolean result.
                  </p>
                </div>

              <div className="c2t-common-container">
                <h3>Bitwise AND Operator: &</h3>
                <p>
                  Bitwise AND operator performs a bitwise logical AND operation.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Bitwise Exclusive OR (XOR) Operator: ^</h3>
                <p>
                  Bitwise XOR operator performs a bitwise logical XOR operation.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Bitwise OR Operator: |</h3>
                <p>
                  Bitwise OR operator performs a bitwise logical OR operation.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Logical AND Operator: &&</h3>
                <p>
                  Logical AND operator performs a logical AND operation on Boolean operands.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Logical OR Operator: ||</h3>
                <p>
                  Logical OR operator performs a logical OR operation on Boolean operands.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Conditional (Ternary) Operator: ? :</h3>
                <p>
                  The conditional operator, also known as the ternary operator, allows for conditional expressions. 
                  It has the form condition ? expression1 : expression2. If the condition is true, expression1 is evaluated; 
                  otherwise, expression2 is evaluated.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Assignment Operators: = += -= *= /= %= &#60;=  &gt;= &= ^= |=</h3>
                <p>
                  Assignment operators are used to assign values to variables. 
                  Examples include assignment (=), addition assignment (+=), subtraction assignment (-=), 
                  multiplication assignment (*=), division assignment (/=), modulus assignment (%=), 
                  left shift assignment (&#60;=), right shift assignment (&gt;=), bitwise AND assignment (&=), 
                  bitwise XOR assignment (^=), and bitwise OR assignment (|=).
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Precedence rules and parentheses</h3>
                <p>
                  The precedence rules ensure that expressions are evaluated correctly. 
                  However, it's important to use parentheses when necessary to override the default precedence 
                  and explicitly specify the desired evaluation order.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Example 1:</h3>
                <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                  {codeArr[0].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(0)} className={copiedIndex === 0 ? 'copied' : ''}>
                    {copiedIndex === 0 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>
                <p>
                  In this example, the expression <code>5 + 3 * 2</code> involves addition and multiplication operators. 
                  According to operator precedence, the multiplication operator <code>*</code> has higher precedence than the addition operator <code>+</code>. 
                  Therefore, the multiplication is evaluated first: <code>3 * 2 = 6</code>. 
                  Then, the addition is performed: <code>5 + 6 = 11</code>. 
                  The result is assigned to the variable <code>result</code>, so <code>result</code> will have the value <code>11</code>.
                </p>
              </div>

              <div className="c2t-common-container">
                <h3>Example 2:</h3>
                <div className="code-common-container">
                  <SyntaxHighlighter language="java" style={dracula}>
                    {codeArr[1].code}
                  </SyntaxHighlighter>
                  <button onClick={() => copyCode(1)} className={copiedIndex === 1 ? 'copied' : ''}>
                    {copiedIndex === 1 ? <LuCopyCheck/> : <TbCopy/>}
                  </button>
                </div>
                <p>
                  In this example, the expression <code>x / (y - 2)</code> involves division and subtraction operators. 
                  According to operator precedence, the subtraction operator <code>-</code> has higher precedence than the division operator <code>/</code>. 
                  Therefore, <code>y - 2</code> is evaluated first, resulting in a value of <code>3</code>. 
                  Then, the division is performed: <code>x / 3</code>. 
                  The final result depends on the value of <code>x</code>, but the division itself follows the precedence rules.
                </p>
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
