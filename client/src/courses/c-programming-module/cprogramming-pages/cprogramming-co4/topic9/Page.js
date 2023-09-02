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
import videoUrl from '../../../../../assets/linked.mp4'
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
                <h1>Single Linked List (with structures)</h1>
                <p>In this page you will learn Single Linked List (with structures) 
                   in detail
                </p>
            </div>

            <div className="c4t-common-intro">
              <p>A linked list is a common data structure in computer science used to store and organize a collection of elements. It consists of a sequence of nodes, where each node contains data and a reference (or pointer) to the next node in the sequence. The last node in the list typically has a null reference to indicate the end.</p>
            </div>

            <div className="c4t-common-container">
              <h3>Animated Video :</h3>
            </div>

            <div className="linked-video-container">
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


        <div className="linked-ul-container">
            <ul>
                <li><b>append():</b> This function appends a new node at the end of the linked list. It takes input from the user for the data of the new node and inserts it at the end of the list.</li>
                <li><b>insert_begin():</b> This function inserts a new node at the beginning of the linked list. It takes input from the user for the data of the new node and inserts it at the beginning of the list.</li>
                <li><b>length_linked():</b> This function calculates and returns the length of the linked list. It traverses the entire list and increments a counter for each node encountered.</li>
                <li><b>insert_pos():</b> This function inserts a new node at a specified position in the linked list. It takes input from the user for the position and data of the new node and inserts it at the specified position.</li>
                <li><b>delete_begin():</b> This function deletes the first node of the linked list.</li>
                <li><b>delete_pos():</b> This function deletes a node from a specified position in the linked list. It takes input from the user for the position of the node to be deleted and removes it from the list.</li>
                <li><b>delete_last():</b> This function deletes the last node of the linked list.</li>
                <li><b>display():</b> This function displays the contents of the linked list. It traverses the entire list and prints the data of each node.</li>
                <li><b>reverse():</b> This function reverses the linked list by swapping the data of nodes. It uses two pointers to traverse the list in opposite directions and swaps the data of corresponding nodes until the middle of the list is reached.</li>
                <li><b>sum():</b> This function calculates and prints the sum of all the data elements in the linked list.</li>
                <li><b>product():</b> This function calculates and prints the product of all the data elements in the linked list.</li>
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