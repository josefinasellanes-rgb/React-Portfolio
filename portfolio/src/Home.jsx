import './App.css';
import { useLocation } from "react-router-dom";

// Home Page
export default function Home() {
    const location = useLocation();

    return (
        <div className='wrapper'>
            <div>
                <h1>Welcome Home</h1>
            </div>
            <h1 className='titleHome'>
                Welcome to the Home Page!
            </h1>
            <p className='textHome'>I build elegant and accessible web experiences</p>
            <p className='textHome'>My mission: deliver clean, maintainable front-end code that delights users and makes product teams more productive.</p>
        </div>
    );
}