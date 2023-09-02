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
import videoUrl from '../../../../../assets/bubblesort.mp4';
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
                <h1>Bubble Sort</h1>
                <p>In this page you will learn about Bubble Sort
                   in detail
                </p>
            </div>
            <div className="c3t-common-container">
              <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It is called Bubble Sort because the smaller elements "bubble" to the top of the list.</p>
              <h3>Animated Video :</h3>
            </div>
 
            <div className='bubble-video-container'>
            <ReactPlayer 
              url={videoUrl} 
              controls={true}  
              width="38%"
              height="100%" 
              />
              <a href="https://www.instagram.com/worldofivo/"> Video Credits : worldofivo </a>
             </div>


<div className="bubble-container">

          <div className="bubble-box">
            <h4>Array</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td>13</td>
                    <td>5</td>
                    <td>10</td>
                    <td>55</td>
                    <td>22</td>
                 </tr>
                </tbody> 
              </table>
            </div>

                      <h3>Pass 1 :</h3>
            <div className="bubble-box">
              <h4>Swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">13</td>
                    <td>10</td>
                    <td>55</td>
                    <td>22</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="bubble-box">
              <h4>Swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td >5</td>
                    <td id="bubble-color">10</td>
                    <td id="bubble-color">13</td>
                    <td >55</td>
                    <td>22</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="bubble-box">
             <h4>NO Swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td >5</td>
                    <td >10</td>
                    <td id="bubble-color" >13</td>
                    <td id="bubble-color" >55</td>
                    <td>22</td>
                 </tr>
                </tbody> 
              </table>
            </div>


            <div className="bubble-box">
             <h4>Swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td >13</td>
                    <td >5</td>
                    <td>10</td>
                    <td id="bubble-color" >22</td>
                    <td id="bubble-color" >55</td>
                 </tr>
                </tbody> 
              </table>
            </div>


                        <h3>Pass 2:</h3>

            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">10</td>
                    <td>13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="bubble-box">
              <h4>NO swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td>5</td>
                    <td id="bubble-color">10</td>
                    <td id="bubble-color">13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td >5</td>
                    <td >10</td>
                    <td id="bubble-color">13</td>
                    <td id="bubble-color">22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>


            <h3>Pass 3:</h3>


            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">10</td>
                    <td>13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td >5</td>
                    <td id="bubble-color">10</td>
                    <td id="bubble-color">13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <h3>Pass 4:</h3>

            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">10</td>
                    <td >13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

            <h3>Pass 5:</h3>

            <div className="bubble-box">
              <h4> No swap</h4>
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">10</td>
                    <td >13</td>
                    <td>22</td>
                    <td>55</td>
                 </tr>
                </tbody> 
              </table>
            </div>

                  <h3>Final sorted Array</h3>

        <div className="bubble-box">
          <h4> No swap</h4>
          <table className='bubble-box-table'>
            <tbody> 
              <tr> 
                <td >5</td>
                <td >10</td>
                <td >13</td>
                <td>22</td>
                <td>55</td>
            </tr>
            </tbody> 
          </table>
        </div>
     </div>

     <div className="c3t-common-container">
        <h3>Pass 1:</h3>
          <p>Iteration 1: [5, 13, 10, 55, 22]</p>
          <p>Iteration 2: [5, 10, 13, 55, 22]</p>
          <p>Iteration 3: [5, 10, 13, 55, 22]</p>
          <p>Iteration 4: [5, 10, 13, 22, 55]</p>

          <h3>Pass 2:</h3>
          <p>Iteration 1: [5, 10, 13, 22, 55]</p>
          <p>Iteration 2: [5, 10, 13, 22, 55]</p>
          <p>Iteration 3: [5, 10, 13, 22, 55]</p>

          <h3>Pass 3:</h3>
          <p>Iteration 1: [5, 10, 13, 22, 55]</p>
          <p>Iteration 2: [5, 10, 13, 22, 55]</p>

          <h3>Pass 4:</h3>
          <p>Iteration 1: [5, 10, 13, 22, 55]</p>

          <h3>Pass 5:</h3>
          <p>Iteration 1: [5, 10, 13, 22, 55]</p>
          <h3>Final Sorted Array</h3>

          <div className="bubble-box">
              <table className='bubble-box-table'>
                <tbody> 
                  <tr> 
                    <td id="bubble-color">5</td>
                    <td id="bubble-color">10</td>
                    <td >13</td>
                    <td>22</td>
                    <td>55</td>
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