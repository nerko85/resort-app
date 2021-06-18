import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Logo, Navigation, Header} from './Navbar.style';
import {FaAlignRight} from 'react-icons/fa'
import logo from '../../../images/logo.svg'


export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    
    const handleToggle = ()=>{
        setOpen(!isOpen);
    }

    return (
        <Header>
            <div className="container">
                <div className="content">
                    <Link to='/'>
                        <Logo>
                            <img src={logo} alt="Bonus resort logo"/>
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
