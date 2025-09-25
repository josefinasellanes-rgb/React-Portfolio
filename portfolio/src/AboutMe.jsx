import React from 'react';
import { useState } from 'react';
import './App.css';
// import myPdf from '../documents';
//  import myImage from './assets/images/my-image.jpg';

export default function AboutMe() {

    return (
        <>
            <div className='divAbout'>
                <h1 className='titleAbout'>About Me</h1>
                <img className='imageAbout' src="https://img.freepik.com/vector-gratis/estrella-metal-3d-aislada_1308-117760.jpg?semt=ais_hybrid&w=740&q=80"></img>
            </div>
            <p className='textAbout'>My name is Josefina Sellanes</p>
            <p className='textAbout'>I am based in Toronto, currently in my second year in the Software Engineering Program at Centennial College</p>
            <p className='textAbout'>Here is the link to my resume:</p>
            {/* <a target="_blank">href=""</a> */}
        </>
    )
}