import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import NavLinks from './NavLinks';
import Footer from './Footer';

export default function App() {
    return (
        <>
            <div className="overlay"></div>
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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/service" component={Service} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </>
    );
}
