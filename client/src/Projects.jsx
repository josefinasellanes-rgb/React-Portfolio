import './App.css';
import { useNavigate } from "react-router-dom";
import { deleteProject } from "../src/api.js";
import { useState, useEffect } from "react";

// Projects Page
export const Projects = ({ user, projects = [], refreshProjects }) => {
    const navigate = useNavigate();

    const handleCreateProject = () => {
        navigate("/project-details/");
    }

    const handleUpdateProject = (id) => {
        navigate(`/project-details/${id}`);
    }

    const handleDeleteProject = async (id) => {
        const data = await deleteProject(id);
        if (data) if (refreshProjects) refreshProjects();
    }

    return (

        <div className='wrapper'>
            <div className="projectdiv">
                <h1 className='titleProjects'>Projects</h1>
                {user && user.role === "admin" && (
                    <button className="buttonProjects" onClick={handleCreateProject}>Create Project</button>
                )}
            </div>
            <p className='textProjects'>These are some of the projects I have done in the past:</p>
            <ul className='projects'>
                {
                    projects.length > 0 ? (
                        projects.map((p, index) => (
                            <li key={index}>
                                <div className='divProjects'>
                                    <p className='textProjects'>{p.title}</p>
                                    <img className='imageProjects' style={{ marginLeft: '200px' }} src={p.image}></img>
                                    {user && user.role === "admin" && (
                                        <div>
                                            <button className='buttonProjects1' onClick={() => handleUpdateProject(p._id)}>Edit</button>
                                            <button className='buttonProjects1' onClick={() => handleDeleteProject(p._id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    ) : (
                        <div>
                            <p>No projects found</p>
                        </div>
                    )
                }
                {/* <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 1: I built a car for my Engineering class in grade 11</p>
                        <img className='imageProjects' style={{ marginLeft: '200px' }} src="/car.png"></img>

                    </div>
                </li>
                <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 2: I built a colour sorter for my Engineering class in grade 12</p>
                        <img className='imageProjects' style={{ marginLeft: '65px', height: '250px', width: '200px' }} src="/colorsorter.png"></img>
                    </div>
                </li>
                <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 3: I built a webpage for a company for my Web Design class</p>
                        <img className='imageProjects' style={{ marginLeft: '80px' }} src="/WebPage.png"></img>
                    </div>
                </li> */}
            </ul >
        </div>
    )

}

export default Projects;