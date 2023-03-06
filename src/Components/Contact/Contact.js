import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Contact() {
    return (
        <div id="contact" class="contact">
            <SectionTitle title = "Let's Get in Touch"/>
            <Router>
                <Link 
                    to={"mailto:tabethalynnhorn@gmail.com"} target="_blank">
                    <button className='contact'>
                        <EmailIcon />
                        <p>E-mail</p>
                    </button>
                </Link>
                <Link 
                    to={"https://github.com/tlhorn88"} target="_blank">
                    <button  className='contact'>
                        <GitHubIcon />
                        <p>GitHub</p>
                    </button>
                </Link>
                <Link 
                    to={"https://www.linkedin.com/in/tabetha-h-861a3724a/"} target="_blank">
                    <button className='contact'><LinkedInIcon />
                    <p>LinkedIn</p>
                    </button>
                </Link>
            </Router>
{/* 
            <GitHubIcon />
            <h5>https://github.com/tlhorn88</h5>
            <LinkedInIcon />
            <h5>https://www.linkedin.com/in/tabetha-h-861a3724a/</h5> */}
        </div>
    )
}

export default Contact;