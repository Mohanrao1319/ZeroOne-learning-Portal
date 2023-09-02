import React, {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// imports files here
import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css'
import '../common-css/index.css'
import CourseFooter from '../../../../../components/course_footer/CourseFooter';
import CNavbar from '../../../C-programming-nav/Cnavbar';

// import icons here
import { TbCopy } from "react-icons/tb";
import { LuCopyCheck } from "react-icons/lu";
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
                <h1>Primary Data Types</h1>
                <p>In this page you will learn about Primary Data Types
                   in detail
                </p>
            </div>
            <div className="c1t-intro">
                  <p>
                  In programming, primary data types, also known 
                  as primitive data types, are the basic building 
                  blocks for representing and manipulating data. 
                  The specific set of primary data types available 
                  can vary depending on the programming language you are 
                  using, but I'll provide you with a common set of primary data 
                  types found in many programming languages:
                  </p>
             </div>
                               {/* code one */}
          <div className="c1t-common-container">
            <p>1.Integer <b>(int):</b> Represents whole numbers without any fractional or decimal parts.</p>
              <h3> For example :</h3>

                       
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

                          {/* code two */}
              <p>2.Floating-point <b>(float or double):</b>  Represents numbers with fractional parts. These types are used to store real numbers.</p>   
                <h3> For example :</h3>     
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


                        {/* code three */}

            <p>3. Character <b> (char): </b>  Represents a single character, such as a letter, digit, or special symbol.</p>   
                <h3> For example :</h3>     
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


                        {/* code four */}
              <p>4. Boolean <b>(bool):</b>  Represents a logical value that can be either true or false. It is often used in conditional statements or logical operations.</p>
                <h3> For example :</h3>     
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

                        {/* code five */}

            <p>5.String: Represents a sequence of characters. It is used to store textual data, such as names, sentences, or even whole documents. Strings are typically represented using double quotes.</p>   
                <h3> For example :</h3>     
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
                        {/* code six */}

            <p>6.Array: Represents a collection of elements of the same data type. Arrays allow you to store multiple values under a single variable name.</p>   
                <h3> For example :</h3>     
                 <div className="code-common-container">
                   <SyntaxHighlighter language="java" style={dracula}>
                            {codeArr[5].code}
                    </SyntaxHighlighter>
                      <button
                          onClick={() => copyCode(5)}
                          className={copiedIndex === 5 ? 'copied' : ''}
                        >
                          {copiedIndex === 5 ?  <LuCopyCheck/> : <TbCopy/> }
                      </button>
                </div>      
            <p>These are some of the primary data types 
               commonly found in programming languages. 
               Some languages may provide additional data 
               types or variations of these types. It's important 
               to note that the specific names and characteristics of these 
               data types may vary slightly across different programming languages.
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