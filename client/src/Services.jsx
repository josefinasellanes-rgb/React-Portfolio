import './App.css';

// Services Page
export default function Services() {

    return (
        <div className='wrapper'>
            <h1 className='titleServices'>Services</h1>
            <p className='textServices'>These are some of my services:</p>
            <ul className='services'>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Web Development (React)</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s"></img>

                    </div>
                </li>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Website Redesigning</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6Jb3clG95sdtwXGU_azHeajBaMm6OHLFAQ&s" style={{ marginLeft: '170px' }}></img>
                    </div>
                </li>
                <li>
                    <div className='divServices'>
                        <p className='textServices'>Performance optimization</p>
                        <img className='imageServices' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcfwbXIuqi9DyUNc-AmLenXES3aHbJXdxdQnqszKWL9ebrDMe14vSEG7s1f9kDa1fPoQ&usqp=CAU"></img>
                    </div>
                </li>
            </ul >
        </div>
    )
}
