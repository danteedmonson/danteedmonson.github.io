import React from "react";
import { Button, IconButton } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TranslateIcon from '@mui/icons-material/Translate';


function ToolBar () {

    return(
       
        <div className="ToolBar" style={{display:"flex", position:"fixed", bottom:0, left:0, zIndex:999}}>
            <IconButton onClick={()=> window.open("https://github.com/danteedmonson")} aria-label="Github" className="Github">
                <GitHubIcon  style={{color:"white", width:40, height:40}} />
            </IconButton>
            <IconButton onClick={()=> window.open(" https://www.linkedin.com/in/danteedmonson/")} aria-label="LinkedIn" className="LinkedIn"  >
                <LinkedInIcon  style={{color:"white", width:40, height:40}} />
            </IconButton>
            <IconButton aria-label="Translate"  className="Translate">
                <TranslateIcon  style={{color:"white", width:40, height:40}} />
            </IconButton>

        </div>
    
    )
}

export default ToolBar;