import React from 'react';
import { useState } from 'react';
import './App.css';

export default function Projects() {

    return (
        <>
            <h1 className='titleProjects'>Projects</h1>
            <p className='textProjects'>These are some of the projects I have done in the past:</p>

            <div className='projects'>
                <p className='textProjects'>Project 1: build a car</p>
                {/* <img className='imageProjects' src="https://img.freepik.com/vector-gratis/estrella-metal-3d-aislada_1308-117760.jpg?semt=ais_hybrid&w=740&q=80"></img> */}

            </div>

            <div className='projects'>
                <p className='textProjects'>Project 2:build a color sorter</p>
                {/* <img className='imageProjects' src="https://howtodrawforkids.com/wp-content/uploads/2022/07/Draw-a-flower-step-9.jpg"></img> */}
            </div>

            <div className='projects'>
                <p className='textProjects'>Project 3: create a complete web page</p>
                {/* <img className='imageProjects' src="https://img.freepik.com/vector-gratis/estrella-metal-3d-aislada_1308-117760.jpg?semt=ais_hybrid&w=740&q=80"></img> */}

            </div>
        </>
    )
}