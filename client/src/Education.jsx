import './App.css';
import { useNavigate } from "react-router-dom";
import { deleteEducation } from "../src/api.js";
import { useState, useEffect } from "react";

// Education Page
export const Education = ({ user, education = [], refreshEducation }) => {
    const navigate = useNavigate();

    const handleCreateEducation = () => {
        navigate("/education-details/");
    }

    const handleUpdateEducation = (id) => {
        navigate(`/education-details/${id}`);
    }

    const handleDeleteEducation = async (id) => {
        const data = await deleteEducation(id);
        if (data) if (refreshEducation) refreshEducation();
    }


    return (
        <div className='wrapper'>
            <div className='projectdiv'>
                <h1 className='titleProjects'>Education</h1>
                {user && user.role === "admin" && (
                    <button className="buttonProjects" onClick={handleCreateEducation}>Create Education</button>
                )}
            </div>
            <p className='textProjects'>This is a history of my education</p>
            <ul className='projects'>

                {
                    education.length > 0 ? (
                        education.map((p, index) => (
                            <li key={index}>
                                <div className='divProjects'>
                                    <p className='textProjects'>{p.title}</p>
                                    <img className='imageProjects' style={{ marginLeft: '200px' }} src={p.image}></img>
                                    {user && user.role === "admin" && (
                                        <div>
                                            <button className='buttonProjects1' onClick={() => handleUpdateEducation(p._id)}>Edit</button>
                                            <button className='buttonProjects1' onClick={() => handleDeleteEducation(p._id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    ) : (
                        <div>
                            <p>No education found</p>
                        </div>

                    )
                }

                {/* //             <ul className='listEducation'>
    //                 <li className='subtitle'>Elementary School: </li>
    //                 <li>School Name: James Robinson</li>
    //                 <li>Years: 2019-2020</li>
    //                 <li>Degree: Elementary School Diploma</li>
    //             </ul>

    //             <ul className='listEducation'>
    //                 <li className='subtitle'>Secondary School: </li>
    //                 <li>Name: Unionville High School</li>
    //                 <li>Years: 2020-2024</li>
    //                 <li>Degree: Secondary School Diploma</li>
    //             </ul>

    //             <ul className='listEducation'>
    //                 <li className='subtitle'>Tertiary School:</li>
    //                 <li>Name: Centennial College</li>
    //                 <li>Years: Started in 2024, currently in third semester</li>
    //                 <li>Program: Software Engineering</li>
    //             </ul>
    //         </div> */}
            </ul>
        </div>
    )

}
export default Education;
