import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports Here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../Common-css/index.css'
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
import CNavbar from '../../../C-programming-nav/Cnavbar';
import CourseFooter from '../../../../../components/course_footer/CourseFooter';

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
                <h1>Increment | decrement operators</h1>
                <p>In this page you will learn about Increment | decrement operators
                   in detail
                </p>
            </div>
            <div className="c2t-common-intro">
                  <p>
                  Certainly! In the C programming language, 
                  the increment <b>(++)</b> and decrement <b>(--)</b> operators are used to 
                  increase or decrease the value of a variable by 1, respectively.
                  </p>
               </div>
                <div className="c2t-common-container">
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
              <div className="c2t-common-container">
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
                            {codeArr[3].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(3)}
                          className={copiedIndex === 3 ? 'copied' : ''}
                        >
                          {copiedIndex === 3 ?  <LuCopyCheck/> : <TbCopy/> }
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