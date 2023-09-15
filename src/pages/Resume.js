import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/Resume.pdf';
import '../styles/Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div className="resume">
            <Document file={resume}>
                <Page 
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    customTextRenderer={false}
                    pageNumber={1}
                />
            </Document>
            <div className="download-resume">
                <h2>Download Resume:</h2>            
                <a href={resume} download="Resume.pdf" class="button" data-tooltip="Size: 80.5KiB">
                    <div class="button-wrapper">
                        <div class="text">Resume</div>
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Resume;