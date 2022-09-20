import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

import resume from '../Contact/ResumeDoc.pdf';

function Contact() {
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div id="contact">
            {/* contact section */}
            <div className="contact-section">
                <h2>Contact Me</h2>
                <p>Phone Number: 425-420-6466</p>
                <p>Email: Kiriko.Anthony@gmail.com</p>
                <p><a href="https://www.linkedin.com/in/KiriAnthony" id="p">Linkedin: https://www.linkedin.com/in/kiri-anthony</a></p>
                <p><a href="https://github.com/KiriAnthony" id="p">GitHub: https://github.com/KiriAnthony</a></p>
                <p>View my resume!</p>
                <Document file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={{ workerSrc: pdfjsWorker }}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </div>
    );
}

export default Contact;