import React from 'react';
import CommonComponents from './CommonComponents';
import man from './manpush.svg';

export default function About() {
    return (
        <CommonComponents
            img={man}
            h2_1="Hello i am"
            em=" Ashish Prajapati "
            h2_2=""
            a="See my awesome work"
            visit="/service"
        />
    );
}
