import React from 'react';
import { NavLink } from 'react-router-dom';
export default function NavLinks() {
    return (
        <>
            {/* <div className='card'> */}
            <nav>
                <NavLink exact to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to="/about" activeClassName="active">
                    About Us
                </NavLink>
                <NavLink exact to="/contact" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink exact to="/service" activeClassName="active">
                    Service
                </NavLink>
            </nav>

            {/* </div> */}
        </>
    );
}
