import React from "react";

import './ProjectBlock.css';
import Card from "../Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectBlock = () => {
    const info = [
        {
            id: 4,
            title: "Project 4",
            content: "This is content for D",
            photo: require('../../Images/cow4.jpg'),
            link: 'https://apiimagesearch.netlify.app',
            tech: 'React, HTML, CSS'
        },
        {
            id: 1,
            title: "Animals",
            content: "Displays a random animal svg from an array on button click.  On clicking animal image, associated heart increases in size.",
            photo: require('../../Images/cow1.jpg'),
            color: 'orange',
            link: 'https://grideranimals.netlify.app',
            tech: 'React, HTML, CSS'
        },
        {
            id: 3,
            title: "User Manual Book Club",
            content: "This is content for C",
            photo: require('../../Images/cow3.jpg'),
            link: 'https://usermanualbookclub.netlify.app',
            tech: 'HTML, CSS'
        },
        {
            id: 2,
            title: "PDA Display",
            content: "Basic application of props in React",
            photo: require('../../Images/cow2.jpg'),
            color: 'red',
            link: 'https://griderpdas.netlify.app',
            tech: 'React, HTML, CSS'
        },
        {
            id: 5,
            title: "Project 5",
            content: "This is content for E",
            photo: require('../../Images/cow5.jpg'),
            link: '',
            tech: 'HTML, CSS'
        },
        {
            id: 6,
            title: "Project 6",
            content: "This is content for F",
            photo: require('../../Images/cow6.jpg'),
        },
        {
            id: 7,
            title: "Project 7",
            content: "This is content for G",
            photo: require('../../Images/cow7.jpg'),
        },
        {
            id: 8,
            title: "Project 8",
            content: "This is content for H",
            photo: require('../../Images/cow8.jpg'),
        },
        {
            id: 9,
            title: "Project 9",
            content: "This is content for I",
            photo: require('../../Images/cow9.jpg'),
        },
        {
            id: 10,
            title: "Project 10",
            content: "This is content for J",
            photo: require('../../Images/cow9.jpg'),
        },
    ];

    return (
        <div className="card-container">
            <SectionTitle title = "Portfolio"/>
            <ul>
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
    )
}

export default ProjectBlock;