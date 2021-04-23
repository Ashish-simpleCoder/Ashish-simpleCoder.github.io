import React from 'react';

const Footer = () => {
    const data = new Date().getFullYear();
    return (
        <footer>
            Ashish Prajapati ©️ {data}
        </footer>
    );
};

export default Footer;
