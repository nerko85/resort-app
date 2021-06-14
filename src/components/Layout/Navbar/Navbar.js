import React from 'react'
import {Link} from 'react-router-dom'
import {Logo, Navigation, Header} from './Navbar.style'

export default function Navbar() {
    return (
        <Header>
            <div className="container">
                <div className="content">
                    <Logo>
                        Bonus Resort
                    </Logo>
                    <Navigation>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rooms">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </Navigation>
                </div>
            </div>
        </Header>
    )
}
