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
                    <div className="card">
                        <img 
                            src={props.photo}
                        />
                        <h2>{props.title}</h2>
                        <div class="img__description_layer">
                        <p className="content">
                            {props.content}
                        </p>
                        <h5>{props.tech}</h5> 
                        </div>    
                    </div>
                </Link>
            </Router>
            
        </div>
        
    )
}

export default Card;