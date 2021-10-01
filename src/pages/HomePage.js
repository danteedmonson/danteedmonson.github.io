import React from 'react';
import pPic from '../images/profilePic3.png'


function HomePage() {

    return(
        <div className="HomePageContent">
            <img src={pPic} alt="Logo" style={{ width:"20%"}}/>

            <div style={{color:"white", fontFamily:" 'Roboto', sans-serif", width:"35%", fontSize:20, textAlign:"justify",  fontWeight: 200}}>
                <p> Hi! My name is Dante and I'm a software engineer with a zest for full-stack application development.
                    I'm currently a senior at the University of Central Florida and this is my last semester. I plan to use my 
                    skills and education towards a career that will enable me to develop software at a high degree.
                </p>
            </div>
        
        </div>
    )
}

export default HomePage;