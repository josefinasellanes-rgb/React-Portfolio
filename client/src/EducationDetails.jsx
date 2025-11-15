import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, getEducationById, createEducation, updateEducation } from "./api.js";

export default function EducationDetails({ refreshEducation }) {
    const navigate = useNavigate();

    const [education, setEducation] = useState({
        title: "",
        image: "",
    });
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchEducationById = async () => {
                const token = getToken();
                if (!token) {
                    navigate("/");
                    return;
                }

                const data = await getEducationById(id);
                if (data) {
                    setEducation({
                        title: data.title || "",
                        image: data.image || "",
                    });
                } else {
                    navigate("/");
                }
            }

            fetchEducationById();
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEducation(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) return;

        const educationData = {
            ...education,
        };

        const data = id ? await updateEducation(id, educationData) : await createEducation(educationData);

        if (data) {
            if (refreshEducation) refreshEducation();
            navigate("/education");
        } else {
            navigate("/");
        }
    };

    return (
        <div className='wrapper'>
            <div className='div'>
                <h2>{id ? "Update" : "Create"} Education</h2>
                <form className='formProjects' onSubmit={handleSubmit}>
                    <p className="project">Add your education</p>
                    <div className='inputsProjects'>
                        <input
                            className='descriptionProjects'
                            type="text"
                            name="title"
                            placeholder="Description"
                            value={education.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='imagesProjects'
                            type="text"
                            name="image"
                            placeholder="Image"
                            value={education.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='button' type="submit">
                        {id ? "Update" : "Create"} Education
                    </button>
                </form >
            </div>
        </div>
    );
}