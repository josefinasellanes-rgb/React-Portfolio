import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, getProjectById, createProject, updateProject } from "./api.js";

export default function ProjectDetails({ refreshProjects }) {
    const navigate = useNavigate();

    const [project, setProject] = useState({
        title: "",
        image: "",
    });
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProjectById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getProjectById(id);
                if (data) {
                    setProject({
                        title: data.title || "",
                        image: data.image || "",
                    });
                } else {
                    navigate("/");
                }
            }

            fetchProjectById();
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const projectData = {
            ...project,
        };

        const data = id ? await updateProject(id, projectData) : await createProject(projectData);

        if (data) {
            if (refreshProjects) refreshProjects();
            navigate("/projects");
        } else {
            navigate("/");
        }
    };

    return (
        <div className='wrapper'>
            <div className='div'>
                <h2>{id ? "Update" : "Create"} Project</h2>
                <form className='formProjects' onSubmit={handleSubmit}>
                    <p className="project">Add your project</p>
                    <div className='inputsProjects'>
                        <input
                            className='descriptionProjects'
                            type="text"
                            name="title"
                            placeholder="Description"
                            value={project.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='imagesProjects'
                            type="text"
                            name="image"
                            placeholder="Image"
                            value={project.image}
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