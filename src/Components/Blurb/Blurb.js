import './Blurb.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Blurb() {
    const link = "https://google.com"
    return (
        <div className='blurb'>
            <p>
                Hello, I'm Tabetha and I'm a junior front end developer with proficiency in HTML, CSS, JavaScript, and React.
            </p>
            <Router>
                <Link to={"mailto:tabethalynnhorn@gmail.com"} target="_blank">
                    <button>send me an email
                    </button>
                </Link>
                {/* <AnchorLink href='#portfolio'>
                    <p className='seeMyWork'>see my work</p>
                </AnchorLink> */}
            </Router>
        </div>
    )}

export default Blurb;