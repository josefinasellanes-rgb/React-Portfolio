import './App.css';

// About Me Page
export default function AboutMe() {

    return (
        <div className='wrapper'>
            <div className='divAbout'>
                <h1 className='titleAbout'>About Me</h1>
                <img className='imageAbout' src="Picture.png"></img>
            </div>
            <p className='textAbout'>My name is Josefina Sellanes</p>
            <p className='textAbout'>I am a front-end developer based in Toronto with experience building web applications using React. I enjoy creating interfaces that are easy to use and simple to maintain.</p>
            <p className='textAbout'>Here is the link to my resume:  <a className='resume' href='Resume.pdf'>resume link</a></p>
        </div>
    )
}