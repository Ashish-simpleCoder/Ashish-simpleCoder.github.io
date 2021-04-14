import React from 'react';
import web from './happy-man.svg';
import CommonComponents from './CommonComponents';
export default function Home() {
    return (
        <>
            <CommonComponents
                img={web}
                h2_1="Make any websites with"
                em=" React.js "
                h2_2="very easily."
                a='Get started'
                visit='/service'
            />
            {/* <div className="home-page">
                <div className="title">
                    <h2>
                        Make any website with
                        <em> React.js </em>
                        very easily.
                    </h2>

                    <a href="" className="">
                        Get started
                    </a>
                </div>
                <div className="image">
                    <img src={web} alt="svg" />
                </div>
            </div> */}
        </>
    );
}
