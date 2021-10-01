import React, { useState, useEffect } from 'react';

import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';


import ListItemText from '@material-ui/core/ListItemText';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import logo from '../images/logo.svg'

const useStyles = makeStyles({
    paper: {
        background: 'rgba(66, 66, 66, 0.5)',
        color: 'white',
        marginTop: "3.37%",
        backdropFilter: "blur(10px)",

    }
});

function AppDrawer() {
    const styles = useStyles();
    const [drawerState, setDrawerState] = useState(false);

    const buttonStyle =  {
        fontWeight: "bold",
        marginLeft: 10,
      }

    const goStats = () => {
        window.location.href = '/stats';
    }

    const goDash = () => {
        window.location.href = '/dashboard';
    }

    const goHabits = () => {
        window.location.href = '/habits';
    }

    return (
        <>

            <AppBar position="fixed" style={{ backgroundColor: "black" }}>
                <Toolbar style={{ alignItems: "center" }}>
                    <div className="AppBarContent">
                        <div className="AppBarTitle">
                        
                        
                       

                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerState(true)}>
                        <img src={logo} alt="Logo" style={{height:20}}/>
                        </IconButton>
                        </div>
                        <div className="AppBarLinks">
                        <Button className="AppBarButtons" color="inherit" style={buttonStyle}>About Me</Button>
                        <Button className="AppBarButtons" color="inherit" style={buttonStyle}>Projects</Button>
                        <Button className="AppBarButtons" color="inherit" style={buttonStyle}>Resume</Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default AppDrawer;