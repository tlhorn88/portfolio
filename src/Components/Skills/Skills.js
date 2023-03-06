import './Skills.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function Skills() {
    return (
        <div id="skills">
            <SectionTitle title="Skills"/>
            <div class = "skill_container" 
            >
                <div>
                    <p>HTML</p>

                    <div class="container">
                        <div class="skills html">90%</div>
                    </div>

                    <p>CSS</p>
                    <div class="container">
                        <div class="skills css">80%</div>
                    </div>

                    <p>JavaScript</p>
                    <div class="container">
                        <div class="skills js">65%</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;