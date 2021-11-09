import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../components/Dante_Edmonson_Resume2021.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage() {

    const [file, setFile] = useState('../components/Dante_Edmonson_Resume2021.pdf');

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", height: "100%", marginTop:100}}>
          
            <div style={{ color: "white",}}>
                <Document
                    file={resume}
        
                >
                            <Page pageNumber={1} scale={1.5} />

                </Document>
            </div>
        </div>
    )
}

export default ResumePage;