import React from 'react';
import { Switch as Switchs, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import NavLinks from './NavLinks';
import Footer from './Footer';
import Switch from '@material-ui/core/Switch';
import Light from '@material-ui/icons/WbSunnySharp';

export default function App() {
    return (
        <>
            <header>
                <h1>Ashish Prajapati</h1>
                <div className="hamburger">
                    <div className="line1 lines"></div>
                    <div className="line2 lines"></div>
                    <div className="line3 lines"></div>
                </div>
                <NavLinks />
            </header>
            <main>
                <div className="toggler">
                    <Light />
                    <Switch
                        value=""
                        inputProps={{ 'aria-label': '' }}
                        onClick={() => {
                            document.body.classList.toggle('dark-theme');
                        }}
                    />
                </div>
                <Switchs>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/service" component={Service} />
                    <Redirect to="/" />
                </Switchs>
            </main>
            <Footer />
        </>
    );
}
