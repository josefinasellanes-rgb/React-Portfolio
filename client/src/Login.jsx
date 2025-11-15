import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = ({ setUser }) => {
    const [form, setForm] = useState({ email: "", password: "" });
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
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })

            if (!response.ok) throw new Error("Login failed");

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
            {error && (
                <div className="textLogin">
                    <p className="textLogin">{error}</p>
                </div>
            )}

            <div className="divLogin">
                <form className="formLogin" onSubmit={onSubmit}>
                    <p className="login">Login</p>
                    <div className="inputsLogin">
                        <input className="emailLogin" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
                        <input className="passwordLogin" name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} required />
                    </div>
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );

}

export default Login;