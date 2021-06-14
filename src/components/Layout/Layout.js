import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'

export default function Layout({children}) {
    return (
        <div className="page">
            <div className="wrapp">
                <Navbar/>
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
}
