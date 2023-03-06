import React from "react";
import './Footer.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">


                <div className='footer'>
                    <Router>
                        <ul>
                            <li>
                                <Link to={"mailto:tabethalynnhorn@gmail.com"} target="_blank">
                                    <EmailIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/tlhorn88"} target="_blank">
                                    <GitHubIcon />
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://www.linkedin.com/in/tabetha-h-861a3724a/"} target="_blank">
                                    <LinkedInIcon />
                                </Link>
                            </li>
                        </ul>
                    </Router>
                </div>
        </div>
    )
}

export default Footer;