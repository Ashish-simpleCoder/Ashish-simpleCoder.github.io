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
        </>
    );
}
