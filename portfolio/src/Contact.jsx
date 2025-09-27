import { useState } from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";

// Contact Me Page
export default function Contact() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        navigate("/home", { state: { flash: "Thanks! Your message was captured — I'll be in touch soon." } });
    };

    return (
        <div className='wrapper'>
            <div className='div'>
                <div>
                    <h1 className='titleContact'>
                        Get In Touch!
                    </h1>
                    <p className='textContact'>Please feel free to contact me</p>
                    <p className='textContact'>Email: josefina@gmail.com</p>
                    <p className='textContact'>Phone Number: 416 765 4321</p>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <p className='contact'>Contact Me</p>
                    <div className='inputs'>
                        <input
                            className='name'
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='lastname'
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='email'
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className='number'
                            type="number"
                            name="number"
                            placeholder="Phone Number"
                            value={formData.number}
                            onChange={handleChange}
                        />

                        <textarea
                            className='textarea'
                            name="message"
                            placeholder="Type Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <button className='button' type="submit">
                        Submit
                    </button>
                </form >
            </div>
        </div>
    );
}