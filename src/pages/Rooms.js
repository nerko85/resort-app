import React from 'react'
import Hero from '../components/Hero';
import Button from '../containers/Button';


export default function Rooms() {
    return (
        <div>
            <Hero hero="rooms" title="Bonus resort center" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laudantium hic velit iste ullam, est tenetur recusandae reiciendis soluta.">
                <Button type="primary">See more</Button>
            </Hero>
        </div>
    )
}
