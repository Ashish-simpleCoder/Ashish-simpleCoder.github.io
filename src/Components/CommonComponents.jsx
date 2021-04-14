import React from 'react';

export default function CommonComponents(props) {
    return (
        <div className="home-page">
            <div className="title">
                <h2>
                    {props.h2_1}
                    <em> {props.em}</em>
                    {props.h2_2}
                </h2>

                <a href={props.visit}>
                    {props.a}
                </a>
            </div>
            <div className="image about">
                <img src={props.img} alt="svg" />
            </div>
        </div>
    );
}
