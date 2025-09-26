import React from 'react';
import { useState } from 'react';
import './App.css';

export default function Education() {

    return (
        <div className='wrapper'>
            <h1 className='titleEducation'>Education</h1>
            <p className='textEducation'>This is a history of my education</p>
            <p className='textEducation'>Elementary School: </p>
            <ul className='listEducation'>
                <li>School Name: James Robinson</li>
                <li>Years: 2019-2020</li>
                <li>Degree: Elementary School Diploma</li>
            </ul>
            <p className='textEducation'> Secondary School:</p>
            <ul className='listEducation'>
                <li>Name: Unionville High School</li>
                <li>Years: 2020-2024</li>
                <li>Degree: Secondary School Diploma</li>
            </ul>
            <p className='textEducation'>Tertiary School:</p>
            <ul className='listEducation'>
                <li>Name: Centennial College</li>
                <li>Years: Started in 2024, currently in third semester</li>
                <li>Program: Software Engineering</li>
            </ul>
        </div>
    )
}
