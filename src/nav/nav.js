import React, {useEffect, useState} from 'react';
import './Nav.css'

const Nav = () => {
    const [show, handleShow ] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.addEventListener("scroll")
        };
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src="//upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/300px-Netflix_logo.svg.png"
                alt="Netflix logo"
                className='nav__logo'
            />
            <img className='nav__logo__avatar'
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="Netflix-avatar"/>
        </div>

    );
};

export default Nav;