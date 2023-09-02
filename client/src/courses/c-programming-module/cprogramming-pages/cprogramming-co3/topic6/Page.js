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
import videoUrl from '../../../../../assets/linear.mp4'
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
                <h1>Linear Search</h1>
                <p>In this page you will learn about Linear Search
                   in detail
                </p>
            </div>
            <div className="c3t-common-container">
              <p>linear search can be implemented using a loop to iterate through an array or a list and compare each element with the target value. Here's an example of a linear search algorithm implemented in C:</p>
              <h3>Algorithm :</h3>
            </div>

            <div className='linear-video-container'>
            <ReactPlayer 
              url={videoUrl} 
              controls={true}  
              width="38%"
              height="100%" 
              />
              <a href="https://www.instagram.com/worldofivo/"> Video Credits : worldofivo </a>
             </div>

<div className="linear-container">

          <div className="linear-box">
            <h4>Array</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                    <td>9</td>
                    <td>1</td>
                    <td>12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="linear-box">
              <h4>Not found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                    <td id="linear-color" >9</td>
                    <td>1</td>
                    <td>12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="linear-box">
              <h4>Not found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                    <td >9</td>
                    <td  id="linear-color" >1</td>
                    <td>12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="linear-box">
             <h4>Not found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                    <td >9</td>
                    <td>1</td>
                    <td id="linear-color" >12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>


            <div className="linear-box">
             <h4>Not found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                    <td >9</td>
                    <td>1</td>
                    <td >12</td>
                    <td id="linear-color" >6</td>
                    <td>5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>


            <div className="linear-box">
              <h4>Not found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                  <td >9</td>
                    <td>1</td>
                    <td >12</td>
                    <td >6</td>
                    <td id="linear-color" >5</td>
                    <td>3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>
       

        <div className="linear-box">
              <h4>found</h4>
              <table className='linear-box-table'>
                <tbody> 
                  <tr> 
                  <td >9</td>
                    <td>1</td>
                    <td >12</td>
                    <td >6</td>
                    <td >5</td>
                    <td  id="linear-color" >3</td>
                    <td>7</td>
                 </tr>
                </tbody> 
              </table>
            </div>
        </div>
             

     <div className="c3t-common-container">
        <h3>Code :</h3>
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
      </div>
      </div>
                <div className="topic-footer">
                   <CourseFooter/>
                  </div>
</div>
  )
}

export default Page