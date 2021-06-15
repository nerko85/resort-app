import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Logo, Navigation, Header} from './Navbar.style';
import {FaAlignRight} from 'react-icons/fa'


export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    
    const handleToggle = ()=>{
        setOpen(!isOpen);
        console.log(isOpen)
    }

    return (
        <Header>
            <div className="container">
                <div className="content">
                    <Link to='/'>
                        <Logo>
                            <img src='/images/logo.svg' alt="Bonus resort logo"/>
                        </Logo>
                    </Link>
                    <Navigation open={isOpen}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rooms">Rooms</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </Navigation>
                        <button className="hamburger" onClick={handleToggle}>
                            <FaAlignRight/>
                        </button>
                </div>
            </div>
        </Header>
    )
}
