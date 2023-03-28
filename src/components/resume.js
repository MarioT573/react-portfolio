import React from 'react';
import resumeFile from '../files/marioResume.pdf';

export default function Resume() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resumeFile).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resumeFile.download;
                alink.click();
            })
        })
    }
    return (
        <section id="resume" className='my-5'>
            <div className='justify-center shadow-xl  p-4'>
            <object data={resumeFile} type="application/pdf" width="100%" height="1000px" className="">
                <p className="text-xl text-white font-bold">Your web browser doesn't have a PDF plugin.
                Instead you can 
                <button onClick={onButtonClick} className="text-xl text-white font-bold">click here to
                download the PDF file.</button></p>
            </object>
            </div>
        </section>
      );
};

