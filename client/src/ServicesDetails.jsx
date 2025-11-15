import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, getServicesById, createServices, updateServices } from "./api.js";

export default function ServicesDetails({ refreshServices }) {
    const navigate = useNavigate();

    const [services, setServices] = useState({
        title: "",
        image: "",
    });
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchServicesById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getServicesById(id);
                if (data) {
                    setServices({
                        title: data.title || "",
                        image: data.image || "",
                    });
                } else {
                    navigate("/");
                }
            }

            fetchServicesById();
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setServices(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const servicesData = {
            ...services,
        };

        const data = id ? await updateServices(id, servicesData) : await createServices(servicesData);

        if (data) {
            if (refreshServices) refreshServices();
            navigate("/services");
        } else {
            navigate("/");
        }
    };

    return (
        <div className='wrapper'>
            <div className='div'>
                <h2>{id ? "Update" : "Create"} Services</h2>
                <form className='formProjects' onSubmit={handleSubmit}>
                    <p className="project">Add your services</p>
                    <div className='inputsProjects'>
                        <input
                            className='descriptionProjects'
                            type="text"
                            name="title"
                            placeholder="Description"
                            value={services.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='imagesProjects'
                            type="text"
                            name="image"
                            placeholder="Image"
                            value={services.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='button' type="submit">
                        {id ? "Update" : "Create"} Project
                    </button>
                </form >
            </div>
        </div>
    );
}