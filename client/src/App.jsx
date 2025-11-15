import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import EducationDetails from './EducationDetails';
import ServicesDetails from './ServicesDetails';
import Education from './Education';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import { getProjects } from "./api.js";
import { getEducation } from "./api.js";
import { getServices } from "./api.js";


export default function App() {
  const getUserFromStorage = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return token && username ? { username, role: role || "user" } : null;
  }

  const [user, setUser] = useState(getUserFromStorage());
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
      })

      if (!response.ok) throw new Error("Failed to logout");

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      setUser(null);
      setProjects([]);
      setEducation([]);
      setServices([]);
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  useEffect(() => {
    setUser(getUserFromStorage());
  }, [])


  const fetchProjects = async () => {
    const data = await getProjects();
    if (data) setProjects(data);
  }

  const fetchEducation = async () => {
    const data = await getEducation();
    if (data) setEducation(data);
  }

  const fetchServices = async () => {
    const data = await getServices();
    if (data) setServices(data);
  }

  useEffect(() => {
    fetchProjects();
  }, [navigate]);

  useEffect(() => {
    fetchEducation();
  }, [navigate]);

  useEffect(() => {
    fetchServices();
  }, [navigate]);

  return (
    <>
      <div className='App'>
        <NavBar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home user={user} projects={projects} education={education} services={services} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects user={user} projects={projects} refreshProjects={fetchProjects} />} />
          <Route path="/project-details/:id?" element={<ProjectDetails refreshProjects={fetchProjects} />} />
          <Route path="/education" element={<Education user={user} education={education} refreshEducation={fetchEducation} />} />
          <Route path="/education-details/:id?" element={<EducationDetails refreshEducation={fetchEducation} />} />
          <Route path="/services" element={<Services user={user} services={services} refreshServices={fetchServices} />} />
          <Route path="/services-details/:id?" element={<ServicesDetails refreshServices={fetchServices} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="*" element={<Home user={user} projects={projects} education={education} services={services} />} />
        </Routes >
        <Footer />
      </div>
    </>
  );
}






