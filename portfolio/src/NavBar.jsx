import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


export default function NavBar() {
    return (
        <div className="navBar">

            <div className="topNav">
                <StarLogoSymbol />
                <h1 className="titleNav">
                    Personal Portfolio - Josefina Sellanes
                </h1>
            </div>

            <div className="linkNav">
                <Link to="./Home" className='links'>Home</Link >
                <Link to="./About" className='links'>About Me</Link>
                <Link to="./Project" className='links'>Projects</Link>
                <Link to="./Education" className='links'>Education</Link>
                <Link to="./Services" className='links'>Services</Link>
                <Link to="./Contact" className='links'>Contact Me</Link>
            </div>
        </div>
    );
}

const StarLogoSymbol = ({ size = '150px', color = 'gold' }) => (
    <span style={{ fontSize: size, color: color }}>
        ★
    </span>
);