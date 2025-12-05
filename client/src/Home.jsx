import './App.css';
import { useLocation } from "react-router-dom";

// Home Page
export default function Home({ user, projects, education = [] }) {
    const location = useLocation();

    return (
        <div className='wrapper'>
            <div>
                <h1>Welcome Home</h1>
            </div>
            <h1 className='titleHome'>
                Welcome to the Home Page!
            </h1>
            {user && <p className="textHome"> I hope you enjoy the page, {user.username}!</p>}
            <p className='textHome'> This is a new update for CI/CD demonstration</p>
            <p className='textHome'>I build elegant and accessible web experiences</p>
            <p className='textHome'>My mission: deliver clean, maintainable front-end code that delights users and makes product teams more productive.</p>
        </div>
    );
}