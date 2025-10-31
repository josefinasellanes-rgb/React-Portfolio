import './App.css';

// Projects Page
export default function Projects() {

    return (
        <div className='wrapper'>
            <h1 className='titleProjects'>Projects</h1>
            <p className='textProjects'>These are some of the projects I have done in the past:</p>
            <ul className='projects'>
                <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 1: I built a car for my Engineering class in grade 11</p>
                        <img className='imageProjects' style={{ marginLeft: '200px' }} src="/car.png"></img>

                    </div>
                </li>
                <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 2: I built a colour sorter for my Engineering class in grade 12</p>
                        <img className='imageProjects' style={{ marginLeft: '65px', height: '250px', width: '200px' }} src="/colorsorter.png"></img>
                    </div>
                </li>
                <li>
                    <div className='divProjects'>
                        <p className='textProjects'>Project 3: I built a webpage for a company for my Web Design class</p>
                        <img className='imageProjects' style={{ marginLeft: '80px' }} src="/WebPage.png"></img>
                    </div>
                </li>
            </ul >
        </div>
    )
}