import { Link } from 'react-router-dom';
import './App.css';

// Navigation bar
export default function NavBar({ user, handleLogout }) {
    return (
        <div className="navBar">
            <div className="topNav">
                <StarLogoSymbol />
                <h1 className="titleNav">
                    Personal Portfolio - Josefina Sellanes
                </h1>
            </div>

            <div className="linkNav">
                {user && <Link to="/logout" className={"links"} onClick={handleLogout}>Logout</Link>}
                <Link to="./Home" className='links'>Home</Link >
                <Link to="./About" className='links'>About Me</Link>
                <Link to="./Projects" className='links'>Projects</Link>
                <Link to="./Education" className='links'>Education</Link>
                <Link to="./Services" className='links'>Services</Link>
                <Link to="./Contact" className='links'>Contact Me</Link>
                <Link to="./Login" className='links'>Login</Link>
                <Link to="./Register" className='links'>Register</Link>
            </div>
        </div>
    );
}

// Logo for Website
const StarLogoSymbol = ({ size = '150px', color = 'white' }) => (
    <span style={{ fontSize: size, color: color }}>
        ★
    </span>
);