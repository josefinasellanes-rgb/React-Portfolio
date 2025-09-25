import React from 'react';
import { useState } from 'react'
import { Link } from 'react'
import './App.css'


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
                {/* <Link to="/Home">Home</Link> */}
                <p className="linksNav">link 1</p>
                <p className="linksNav">link 1</p>
                <p className="linksNav">link 1</p>
                <p className="linksNav">link 1</p>
                <p className="linksNav">link 1</p>
                <p className="linksNav">link 1</p>
            </div>
        </div >
    );
}

const StarLogoSymbol = ({ size = '150px', color = 'gold' }) => (
    <span style={{ fontSize: size, color: color }}>
        ★
    </span>
);