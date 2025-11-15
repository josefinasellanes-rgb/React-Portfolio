import './App.css';
import { useNavigate } from "react-router-dom";
import { deleteServices } from "../src/api.js";
import { useState, useEffect } from "react";

// Services Page

export const Services = ({ user, services = [], refreshServices }) => {
    const navigate = useNavigate();

    const handleCreateServices = () => {
        navigate("/services-details/");
    }

    const handleUpdateServices = (id) => {
        navigate(`/services-details/${id}`);
    }

    const handleDeleteServices = async (id) => {
        const data = await deleteServices(id);
        if (data) if (refreshServices) refreshServices();
    }


    return (
        <div className='wrapper'>
            <div className='projectdiv'>
                <h1 className='titleProjects'>Services</h1>
                {user && user.role === "admin" && (
                    <button className="buttonProjects" onClick={handleCreateServices}>Create Services</button>
                )}
                <p className='textProjects'>These are my services</p>
            </div>

            <div className='projects'>
                {
                    services.length > 0 ? (
                        services.map((p, index) => (
                            <li key={index}>
                                <div className='divProjects'>
                                    <p className='textProjects'>{p.title}</p>
                                    <img className='imageProjects' style={{ marginLeft: '200px' }} src={p.image}></img>
                                    {user && user.role === "admin" && (
                                        <div>
                                            <button className='buttonProjects1' onClick={() => handleUpdateServices(p._id)}>Edit</button>
                                            <button className='buttonProjects1' onClick={() => handleDeleteServices(p._id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    ) : (
                        <div>
                            <p>No services found</p>
                        </div>

                    )
                }
                {/*                 
            <p className='textServices'>These are some of my services:</p>
            <ul className='services'>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Web Development (React)</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s"></img>

                    </div>
                </li>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Website Redesigning</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6Jb3clG95sdtwXGU_azHeajBaMm6OHLFAQ&s" style={{ marginLeft: '170px' }}></img>
                    </div>
                </li>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Performance optimization</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcfwbXIuqi9DyUNc-AmLenXES3aHbJXdxdQnqszKWL9ebrDMe14vSEG7s1f9kDa1fPoQ&usqp=CAU"></img>
                    </div>
                </li>
            </ul > */}
            </div>
        </div >
    )
}
export default Services;
