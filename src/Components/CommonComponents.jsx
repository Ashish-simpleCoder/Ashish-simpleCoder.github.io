import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CommonComponents(props) {
    return (
        <div className="home-page">
            <div className="title">
                <h2>
                    {props.h2_1}
                    <em> {props.em}</em>
                    {props.h2_2}
                </h2>

                <NavLink to={props.visit} className="home-btn">
                    {props.a}
                </NavLink>
            </div>
            <div className="image about">
                {props.img ? (
                    <img src={props.img} alt="svg" className="img1" />
                ) : null}
                {props.img2 ? (
                    <img src={props.img2} alt="svg" className="img2" />
                ) : null}
            </div>
        </div>
    );
}
