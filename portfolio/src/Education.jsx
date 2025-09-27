import './App.css';

// Education Page
export default function Education() {

    return (
        <div className='wrapper'>
            <div className='divEducation'>
                <h1 className='titleEducation'>Education</h1>
                <p className='textEducation'>This is a history of my education</p>
            </div>

            <div className='lists'>
                <ul className='listEducation'>
                    <li className='subtitle'>Elementary School: </li>
                    <li>School Name: James Robinson</li>
                    <li>Years: 2019-2020</li>
                    <li>Degree: Elementary School Diploma</li>
                </ul>

                <ul className='listEducation'>
                    <li className='subtitle'>Secondary School: </li>
                    <li>Name: Unionville High School</li>
                    <li>Years: 2020-2024</li>
                    <li>Degree: Secondary School Diploma</li>
                </ul>

                <ul className='listEducation'>
                    <li className='subtitle'>Tertiary School:</li>
                    <li>Name: Centennial College</li>
                    <li>Years: Started in 2024, currently in third semester</li>
                    <li>Program: Software Engineering</li>
                </ul>
            </div>
        </div>
    )
}
