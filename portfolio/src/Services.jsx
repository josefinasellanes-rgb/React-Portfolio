import React from 'react';
import { useState } from 'react';
import './App.css';

export default function Services() {

    return (
        <>
            <h1 className='titleServices'>Services</h1>
            <p className='textServices'>These are some of my services:</p>

            <div className='services'>
                <p className='textServices'>Service 1: Web Development (React)</p>
                {/* <img className='imageServices' src="https://img.freepik.com/vector-gratis/estrella-metal-3d-aislada_1308-117760.jpg?semt=ais_hybrid&w=740&q=80"></img> */}

            </div>

            <div className='services'>
                <p className='textServices'>Service 2: Python</p>
                {/* <img className='imageServices' src="https://howtodrawforkids.com/wp-content/uploads/2022/07/Draw-a-flower-step-9.jpg"></img> */}
            </div>

            <div className='services'>
                <p className='textServices'>Service 3: create a complete web page</p>
                {/* <img className='imageServices' src="https://pngimg.com/d/circle_PNG4.png"></img> */}

            </div>
        </>
    )
}
