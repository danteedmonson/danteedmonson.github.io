import React from 'react';
import pPic from '../images/profilePic3.png';
import ToolBar from '../components/ToolBar';
import habitPic from '../images/habit-tracker.png';
import qrPic from '../images/qrdocentpicture.png';
import jotfoxPic from '../images/jotfoxpicture.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, IconButton } from "@material-ui/core";
import Fade from 'react-reveal/Fade';




function HomePage() {

    return (
        <div className="HomePageContent">
            <ToolBar />
            <div className="AboutMe">
                <img className="picture" src={pPic} alt="Dante" style={{ height: "50vh", maxHeight:350 }} />

                <div className="desc" style={{ color: "white", fontFamily: " 'Roboto', sans-serif", width: "35%", fontSize: 20, textAlign: "justify", fontWeight: 200 }}>
                    <p> Hi! My name is Dante, I'm a software engineer with a passion for full-stack web development.
                        I'm currently a senior at the University of Central Florida and this is my last semester. I plan to use my
                        skills and education towards a career that will enable me to develop software at a high degree.
                    </p>
                </div>
            </div>

            <Fade bottom><h4>Some Cool Things I've Made</h4></Fade>


            <div className="Habeuro">
                <Fade left><img src={habitPic} alt="Habeuro.com" /></Fade>
                <Fade right>

                <div className="HabeuroDesc">
                    <h5>Habeuro: Habit-Tracker</h5>
                    <p className="projectDesc">
                        A habit tracker that keeps users engaged with a stylistic design and customizable features.
                        With Habeuro users will have access to substantial data regarding their habit tracking.

                    </p>
                    <br />
                    <p className="techStack">
                        MongoDB | React JS | Node JS | Express | Digital Ocean
                    </p>
                    <div className="gitLink">
                        <IconButton aria-label="Github" >
                            <GitHubIcon style={{ color: "white" }} />
                        </IconButton>
                    </div>
                </div>
                </Fade>
            </div>



            <div className="QrDocent">
            <Fade left>
                <div className="QrDocentDesc">
                    <h5>Qr Docent</h5>
                    <p className="projectDesc">
                        A mobile QR scanning application that is made for music musuems. With QR Docent, users will be able
                        to scan exhibits and generate a spotify playlist based on what they scan. We achieved this with the use
                        of the Spotify API. Once we have access to a user's spotify account, the application will be able to create
                        playlist and add songs to playlist. The mobile app will also show exhibit information, such as a biography,
                        videos, and external links. Musuems are able to customize exhibit information from the admin website.
                    </p>
                    <br />
                    <p className="techStack">
                        PostgreSQL | React JS | React Native | Node JS | Vercel | Digital Ocean
                    </p>
                    <div className="gitLink">
                        <IconButton aria-label="Github" >
                            <GitHubIcon style={{ color: "white" }} />
                        </IconButton>
                    </div>
                </div>
            </Fade>
                <Fade right><img src={qrPic} alt="QrDocent.com" style={{ zIndex: -1 }} /></Fade>

            </div>


            <div className="Habeuro">
                <Fade left><img src={jotfoxPic} alt="Habeuro.com" /></Fade>
                <Fade right>

                <div className="HabeuroDesc">
                    <h5>JotFox: Note-Taking</h5>
                    <p className="projectDesc">
                        A note-taking application that gives users the ultimate organization. With Jot Fox, users are able to create and
                        organize notes by placing them into a category or adding tags. They are also able to give the note a priority, which
                        is based on color. This gives users the option to filter or sort notes based on different properties (categories, tags, priority)
                    </p>
                    <br />
                    <p className="techStack">
                        MySQL | React JS | Node JS | Express | Google Cloud
                    </p>
                    <div className="gitLink">
                        <IconButton aria-label="Github" >
                            <GitHubIcon style={{ color: "white" }} />
                        </IconButton>
                    </div>
                </div>
                </Fade>
            </div>

            <div style={{ marginBottom: "11%" }} />
            <Fade bottom><h4>What I'm Good At</h4></Fade>


        </div>
    )
}

export default HomePage;