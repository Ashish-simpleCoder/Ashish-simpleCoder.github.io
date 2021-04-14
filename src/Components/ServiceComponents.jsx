import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImageData } from './ImageData';
export default function ServiceComponents(props) {
    return (
        <div className="services">
            <h1 className="titles">{props.title}</h1>
            <div className="contents">
                {ImageData.map((element, index) => {
                    return (
                        <div className="image-house" key={index} id={element.id}>
                            <img src={element.src} alt="" />
                            <h2>{element.title}</h2>
                            <a href="https://google.com">Read More</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
