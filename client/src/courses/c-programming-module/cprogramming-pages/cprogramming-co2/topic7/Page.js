import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                <h1>Expression Evaluation Rules</h1>
                <p>In this page you will learn about Expression Evaluation Rules
                   in detail
                </p>
            </div>
          <div className="c2t-common-container">
            <p>In the C programming language, expression evaluation
               follows a set of rules and precedences. The rules determine the 
               order in which operators and operands are evaluated within an expression. 
               Here are the key rules for expression evaluation in C:
           </p>
           </div>
           <div className="c2t-common-container">
            <h3>Operator Precedence :</h3>
            <p>C follows a set of predefined operator precedences that determine the order in which operators are evaluated. For example, the multiplication (*) and division (/) operators have higher precedence than addition (+) and subtraction (-) operators. Parentheses can be used to override the default precedence and explicitly </p>
           </div>

           <div className="c2t-common-container">
            <h3>Associativity :</h3>
            <p>Operators with the same precedence level may associate either from left to right (left-associative) or from right to left (right-associative). For example, the addition (+) and subtraction (-) operators are left-associative, meaning they evaluate operands from left to right. On the other hand, the assignment operator (=) is right-associative, evaluating operands from right to left.</p>
           </div>

           <div className="c2t-common-container">
            <h3>Side Effects :</h3>
            <p>Expressions may have side effects, which are modifications or interactions with variables or objects. Side effects can include assignments, function calls, or other operations that change the state of the program. The order of evaluation of expressions with side effects is unspecified, meaning the compiler can choose the order in which they are evaluated.</p>
           </div>

           <div className="c2t-common-container">
            <h3>Sequence Points :</h3>
            <p>C defines certain points in a program called sequence points. At a sequence point, all previous evaluations are completed, and all side effects are applied before proceeding further. Common sequence points include the semicolon at the end of a statement, the logical AND (&&) and logical OR (||) operators, and the comma operator (,).</p>
           </div>


           <div className="c2t-common-container">
            <h3>Short-Circuit Evaluation :</h3>
            <p>Certain operators, such as logical AND (&&) and logical OR (||), support short-circuit evaluation. In a logical AND expression, if the left operand evaluates to false, the right operand is not evaluated because the overall result will be false regardless. Similarly, in a logical OR expression, if the left operand evaluates to true, the right operand is not evaluated because the overall result will be true regardless.</p>
           </div>

           <div className="c2t-common-container">
              <p>By following these rules, C ensures proper evaluation of expressions and maintains consistency in program execution. It's important to understand these rules to write correct and efficient C programs.</p>
            </div>

            <h3>Example 1 :</h3>

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

           <div className="c2t-common-container">
                  <p>In this example, the expression 5 + 3 * 2 involves addition and multiplication operators. According to operator precedence, the multiplication operator (*) has higher precedence than the addition operator (+). Therefore, the multiplication is evaluated first: 3 * 2 = 6. Then, the addition is performed: 5 + 6 = 11. The result is assigned to the variable result, so result will have the value 11.</p>
            </div>

                <h3>Example 2 :</h3>
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


            <div className="c2t-common-container">
              <p>Here, we have an expression involving multiple operators and parentheses. The expression (y - 2) is evaluated first, resulting in 3 since y - 2 = 5 - 2 = 3. Then, the division operator (/) is applied: x / 3 = 10 / 3. In integer division, the fractional part is discarded, so the result is 3. Finally, the result is assigned to the variable z, so z will have the value 3.</p>
            </div>

                <h3>Example 3 :</h3>
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



            <div className="c2t-common-container">
              <p>In this example, the expression a++ * b-- involves post-increment (++) and post-decrement (--) operators. The post-increment operator increments the value of a after it is used in the expression, while the post-decrement operator decrements the value of b after it is used. So, the expression is evaluated as 5 * 10, resulting in 50. After the evaluation, a becomes 6 due to the post-increment, and b becomes 9 due to the post-decrement. Therefore, a will have the value 6, b will have the value 9, and c will have the value 50.</p>
            </div>


                <h3>Example 4 :</h3>
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



            <div className="c2t-common-container">
              <p>In this example, the expression (d = 5, e += 2, d + e) involves the comma operator (,). The comma operator evaluates multiple expressions and returns the result of the last expression. Here, the comma operator is used to evaluate three expressions sequentially: d = 5, e += 2, and d + e. </p>
              <ul>
                <li>First, d is assigned the value 5.</li>
                <li>Next, e is incremented by 2, so e becomes 12.</li>
                <li>Finally, d + e is evaluated, resulting in 5 + 12 = 17.</li>
              </ul>
              <p>The result of the entire expression is 17, which is then assigned to the variable f.</p>
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