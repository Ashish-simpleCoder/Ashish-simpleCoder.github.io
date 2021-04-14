import React, { useState } from 'react';
export default function Contact() {
    const [state, setState] = useState({
        fName: '',
        email: '',
        phone: '',
        content: '',
    });

    function handleChange(e) {
        const { value, name } = e.target;
        setState((initial_val) => {
            return { ...initial_val, [name]: value };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`your full name is ${state.fName}`);
    }
    return (
        <>
            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: 'green',
                }}
            >
                Contact Form
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="detail">
                    <label htmlFor="fName">Full Name</label>
                    <input
                        type="text"
                        name="fName"
                        onChange={handleChange}
                        value={state.fName}
                        id="fName"
                        autoComplete="off"
                    />
                </div>
                <div className="detail">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={state.email}
                        id="email"
                        autoComplete="off"
                    />
                </div>
                <div className="detail">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="phone"
                        name="phone"
                        onChange={handleChange}
                        value={state.phone}
                        autoComplete="off"
                    />
                </div>
                <div className="detail text">
                    <label htmlFor="content">Message</label>
                    <textarea
                        id="content"
                        name="content"
                        onChange={handleChange}
                        value={state.content}
                        placeholder="type your message here"
                    />
                </div>
                <button type="submit">submit</button>
            </form>
        </>
    );
}
