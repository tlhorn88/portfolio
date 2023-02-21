import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
 } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
    return (
        <div>
            <Router>
                <Link to={props.link} target="_blank">
                    <div 
                        className="card"
                        style={{
                            backgroundImage:`url(${props.photo})`,
                            backgroundSize: 'cover'
                    }}>
                        <p className="technologyUsed">
                            {props.tech}
                        </p>
                        <h1 className="title">
                            {props.title}
                        </h1>
                        <p className="content">
                            {props.content}
                        </p>
                    </div>
                </Link>
            </Router>
        </div>
        
    )
}

export default Card;