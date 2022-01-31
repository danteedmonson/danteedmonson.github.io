import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../components/Dante_Edmonson_Resume2021.pdf';
import Fade from 'react-reveal/Fade';
import { useLocation } from "react-router-dom";


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", height: "100%", marginTop: 100 }}>

            <div style={{ color: "white", }}>
                <Document
                    file={resume}

                >
                    <Fade bottom><Page pageNumber={1} scale={1.5} /></Fade>

                </Document>
            </div>
        </div>
    )
}

export default ResumePage;