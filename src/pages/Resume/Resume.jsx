import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

import resume from '../Contact/ResumeDoc.pdf';

function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('ResumeDoc.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ResumeDoc.pdf';
                alink.click();
            })
        })
    }

    return (
        <div>
            <h1>View my resume!</h1>
            <button onClick={onButtonClick}>
                Download PDF
            </button>
            <Document
                file={resume}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    )
}

export default Resume;