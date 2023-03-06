import Blurb from '../Blurb/Blurb';
import ProjectBlock from '../ProjectBlock/ProjectBlock';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import "./Grid2.css";
import Picture from '../Picture/Picture';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'; 


function Grid2() {
    return (
        <div className="parent">
            <div className="div1">
                <Header />
            </div>
            <div className='gridDiv'>
                <div className='quadA'>
                    <Picture />
                </div>
                <div className='quadB'>
                    <Blurb />
                </div>
            </div>
            <div className='projectBlock'>
                <ProjectBlock />
            </div>
            <div className='gridDiv'>
                <div className='quadC'>
                    <About />
                </div>
                <div className='quadD'>
                    <Contact />
                </div>
            </div>
            <div className="div6">
                <Footer />
                <h1>6</h1>
            </div>
        </div>
        
    );
}

export default Grid2;