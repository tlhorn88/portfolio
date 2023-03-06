import Blurb from '../Blurb/Blurb';
import ProjectBlock from '../ProjectBlock/ProjectBlock';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import "./ContentGrid.css";
import Picture from '../Picture/Picture';

function ContentGrid() {
    return (
        <div className="parent">
            <div className="div1">
                <Picture />
            </div>
            <div className="div2">
                <Blurb />
            </div>
            <div className="div3">
                <ProjectBlock />
            </div>
            <div className="div4">
                <About />
            </div>
            <div className="div5">
                <Contact />
            </div>
        </div>
    );
}

export default ContentGrid;