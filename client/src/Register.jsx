import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = ({ setUser }) => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })

            if (!response.ok) throw new Error("Register failed");

            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.username);
            localStorage.setItem("role", data.user.role || "user");

            if (setUser) setUser({ username: data.user.username, role: data.user.role || "user" });
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="wrapper">

            <div className="divRegister">

                {error && (
                    <div className="textRegister">
                        <p className="textRegister">{error}</p>
                    </div>
                )}

                <form className="formRegister" onSubmit={onSubmit}>
                    <p className="register">Register</p>
                    <div className="inputsRegister">
                        <input className="nameRegister" name="username" type="text" placeholder="Username" value={form.username} onChange={onChange} required />
                        <input className="emailRegister" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
                        <input className="passwordRegister" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>


        </div>
    );
}

export default Register;