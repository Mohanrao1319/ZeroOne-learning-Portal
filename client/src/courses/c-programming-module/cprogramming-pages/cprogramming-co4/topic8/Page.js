import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TbCopy } from 'react-icons/tb';
import { LuCopyCheck } from 'react-icons/lu';
import ReactPlayer from 'react-player';

import CprogrammingSidebar from '../../../cprogramming-components/cprogramming-sidebar/CprogrammingSidebar';
import './Page.css';
import '../Common-css/index.css';
import { codeArr } from './Codes';
import videoUrl from '../../../../../assets/queue.mp4'
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
                <h1>Queues using Arrays</h1>
                <p>In this page you will learn Queues using Arrays 
                   in detail
                </p>
            </div>

            <div className="c4t-common-intro">
              <p>In computer science, a queue is an abstract data type that follows the First-In-First-Out <b>(FIFO)</b> principle. It is a collection of elements where elements are added to the back <b>(rear)</b> and removed from the front <b>(front)</b>.</p>
            </div>

            <div className="c4t-common-container">
              <h3>Animated Video :</h3>
            </div>

            <div className="queue-video-container">
              <ReactPlayer 
                url={videoUrl} 
                controls={true}  
                width="38%"
                height="100%" 
              />
              <a href="https://www.instagram.com/worldofivo/"> Video Credits : worldofivo </a>
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


        <div className="queue-ul-container">
            <ul>
                <li> <b>Enqueue:</b>  Adds an element to the rear of the queue.</li>
                <li> <b>Dequeue:</b>  Removes and returns the element from the front of the queue.</li>
                <li> <b>Front:</b>  Returns the element at the front of the queue without removing it.</li>
                <li> <b>Rear:</b>  Returns the element at the rear of the queue without removing it.</li>
                <li> <b>IsEmpty:</b>  Checks if the queue is empty.</li>
                <li> <b>IsFull:</b>  Checks if the queue is full.</li>
          </ul>
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