import React, { useEffect } from 'react';
import habitPic from '../images/habit-tracker.png';
import qrPic from '../images/qrdocenthomepage.png';
import jotfoxPic from '../images/jotfoxpicture.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import {  IconButton } from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import { useLocation } from "react-router-dom";




function ProjectsPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div style={{ marginTop: 70 }}>
            <div className="Project">
                <h5>Habeuro: habit-tracker</h5>
                <img src={habitPic} alt="Habeuro.com" />
                <Fade bottom>

                    <div className="DefaultDesc">
                        <p className="projectDesc">
                            A habit tracker that keeps users engaged with a stylistic design and customizable features.
                            With Habeuro users will have access to substantial data regarding their habit tracking.

                        </p>
                        <p style={{ paddingLeft: "3%" }}>Check it out <a href="https://habeuro.com">here</a></p>
                        <p className="techStack">
                            MongoDB | React JS | Node JS | Express | Digital Ocean
                        </p>
                        <div className="gitLink">
                            <IconButton aria-label="Github" onClick={() => window.location.href = "https://github.com/danteedmonson/habit-tracking"}>
                                <GitHubIcon style={{ color: "white" }} />
                            </IconButton>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="Project">
                <h5>Qr Docent</h5>
                <img src={qrPic} alt="QrDocent.com" />
                <Fade bottom>

                    <div className="DefaultDesc">
                        <p className="projectDesc">
                            A mobile QR scanning application that is made for music musuems. With QR Docent, users will be able
                            to scan exhibits and generate a spotify playlist based on what they scan. We achieved this with the use
                            of the Spotify API. Once we have access to a user's spotify account, the application will be able to create
                            playlist and add songs to playlist. The mobile app will also show exhibit information, such as a biography,
                            videos, and external links. Musuems are able to customize exhibit information from the admin website.

                        </p>
                        <p style={{ paddingLeft: "3%" }}>Check it out <a href="https://qrdocent.com">here</a></p>
                        <p className="techStack">
                            PostgreSQL | React JS | React Native | Node JS | Vercel | Digital Ocean
                        </p>
                        <div className="gitLink">
                            <IconButton aria-label="Github" onClick={() => window.location.href = "https://github.com/Mayank-Patel1/QRdocent"}>
                                <GitHubIcon style={{ color: "white" }} />
                            </IconButton>
                        </div>
                    </div>
                </Fade>
            </div>



            <div className="Project">
                <h5>JotFox: Note-Taking</h5>
                <img src={jotfoxPic} alt="Habeuro.com" />
                <Fade bottom>

                    <div className="DefaultDesc">
                        <p className="projectDesc">
                            A note-taking application that gives users the ultimate organization. With Jot Fox, users are able to create and
                            organize notes by placing them into a category or adding tags. They are also able to give the note a priority, which
                            is based on color. This gives users the option to filter or sort notes based on different properties (categories, tags, priority)
                        </p>
                        <p style={{ paddingLeft: "3%" }}>Check it out <a href="https://github.com/FourScript/notetakingapp">here</a></p>
                        <p className="techStack">
                            MySQL | React JS | Node JS | Express | Google Cloud
                        </p>
                        <div className="gitLink">
                            <IconButton aria-label="Github" onClick={() => window.location.href = "https://github.com/FourScript/notetakingapp"}>
                                <GitHubIcon style={{ color: "white" }} />
                            </IconButton>
                        </div>
                    </div>
                </Fade>
            </div>





        </div>
    )
}

export default ProjectsPage;