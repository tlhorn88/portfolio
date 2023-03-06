import SectionTitle from "../SectionTitle/SectionTitle";
import './About.css';

function About() {
    return (
        <div id="about" class = "about">
            <SectionTitle title="About Me"/>
            <div className="about-block">
                <p>
                    Hello and welcome to my portfolio!  My name is Tabetha Horn and I am a junior front end developer with a passion for creating beautiful and functional websites.  My degree is in an unrelated field (music education), but I have always been interested in web development and I have been teaching myself the necessary skills to be successful in the field.
                </p>
                <p>
                    I am highly motivated and I have a strong desire to continue learning and growing my skills.  Although I do not have any related job experience, I have worked on personal projects that have allowed me to hone my skills and demonstrate my abilities as a developer.  I believe that my experience as a music educator have helped me to develop strong communication, leadership, and time management skills.
                </p>
                <p>
                    My technical skills include proficiency in HTML, CSS, JavaScript, and React.  I am familiar with version control systems, such as Git.
                </p>
                <p>
                    I am excited to take the next step in my career and I am actively seeking opportunities to further develop my skills as a front end developer.  Thank you for taking the time to review my portfolio, and I look forward to connecting with you!
                </p>
            </div>
        </div>
    )
}

export default About;