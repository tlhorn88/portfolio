import React from "react";

import './Card.css';

const Card = (props) => {
    return (
        <div>
            <div 
                className="card"
                style={{
                    backgroundImage:`url(${props.photo})`,
                    backgroundSize: 'cover'
            }}>
                <h1 className="title">
                    {props.title}
                </h1>
                <p className="content">
                    {props.content}
                </p>
            </div>
        </div>
        
    )
}

export default Card;