import React from "react";

import './ProjectBlock.css';
import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectBlock = () => {
    const info = [
        {
            id: 5,
            title: "Book List",
            content: "Basic application of props in React",
            photo: require('../../Images/pdas.png'),
            color: 'red',
            link: 'https://griderpdas.netlify.app',
            tech: 'React, HTML, CSS, JSON'
        },
        {
            id: 4,
            title: "API Image Search",
            content: "Makes a request to an external API and displays results based on user input.",
            photo: require('../../Images/image_search.png'),
            link: 'https://apiimagesearch.netlify.app',
            tech: 'React, HTML, CSS'
        },
        {
            id: 1,
            title: "Animals",
            content: "Displays a random animal svg from an array on button click.  On clicking animal image, associated heart increases in size.",
            photo: require('../../Images/animals.png'),
            color: 'orange',
            link: 'https://grideranimals.netlify.app',
            tech: 'React, HTML, CSS'
        },
        {
            id: 3,
            title: "User Manual Book Club",
            content: "Provides basic information for a book club.  This was a project for a college course.",
            photo: require('../../Images/book_club.png'),
            link: 'https://usermanualbookclub.netlify.app',
            tech: 'HTML, CSS'
        },
        {
            id: 2,
            title: "PDA Display",
            content: "Basic application of props in React",
            photo: require('../../Images/pdas.png'),
            color: 'red',
            link: 'https://griderpdas.netlify.app',
            tech: 'React, HTML, CSS'
        },


    ];

    return (
        <div>
            <SectionTitle title = "Projects" id='portfolio'/>
            <div id ="portfolio" className="card-container">
                <ul className="projects">
                    {info.map((cow) => (
                        <Card 
                        key={cow.id}
                        title={cow.title} 
                        content={cow.content} 
                        photo={cow.photo}
                        color={cow.color}
                        link={cow.link}
                        tech={cow.tech}
                        />
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectBlock;