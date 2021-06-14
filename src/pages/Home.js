import React from 'react'
import Hero from '../components/Hero'
import Button from '../containers/Button'
import {Spacer} from '../components/Hero/Hero.style'

export default function Home() {
    return (
        <div>
            <Hero hero="main">
                <h1>Bonus resort center</h1>
                <Spacer/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laudantium hic velit iste ullam, est tenetur recusandae reiciendis soluta.</p>
                <Button type="primary">See more</Button>
            </Hero>
            <div className="container">Test aplikacija</div>
            
        </div>
    )
}
