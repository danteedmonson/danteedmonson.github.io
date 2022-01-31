import React, { useState } from 'react';

import { AppBar, Toolbar, IconButton, makeStyles, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import logo from '../images/logo.svg'


function AppDrawer(props) {
    const navigate = useNavigate();

    const buttonStyle =  {
        fontWeight: "bold",
        marginLeft: 10,
      }

   
 
    


    return (
        <>

            <AppBar position="fixed" style={{ backgroundColor: "black" }} className="AppBar">
                <Toolbar style={{ alignItems: "center" }}>
                    <div className="AppBarContent">
                        <div className="AppBarTitle">
                        
                        
                       
                        <IconButton edge="start" color="inherit" aria-label="menu"  onClick={()=> navigate("/")}>
                        <img src={logo} alt="Logo" style={{height:20}}/>
                        </IconButton>
                        </div>
                        <div className="AppBarLinks">
                        <Button className="AppBarButtons" color="inherit" onClick={()=> navigate("/")} style={buttonStyle}>About Me</Button>
                        <Button className="AppBarButtons" color="inherit" onClick={()=> navigate("/Projects")} style={buttonStyle}>Projects</Button>
                        <Button className="AppBarButtons" color="inherit" onClick={()=> navigate("/Resume")} style={buttonStyle}>Resume</Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default AppDrawer;