import Header from './Components/Header/Header';
import './App.css';
import Footer from './Components/Footer/Footer';
import ProjectBlock from './Components/ProjectBlock/ProjectBlock';
import TopMenu from './Components/TopMenu/TopMenu';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

function App() {
    
    return <div>
        <TopMenu />
        <Header />
        <About />
        <Skills />
        <ProjectBlock />
        <Contact />
        <Footer />
    </div>;
}

export default App;