import React from 'react';
import { NavLink } from 'react-router-dom';
export default function NavLinks() {
    return (
        <>
            {/* <div className='card'> */}
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName="active">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/service" activeClassName="active">
                            Service
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* </div> */}
        </>
    );
}
