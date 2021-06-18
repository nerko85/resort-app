import React from 'react'
import Hero from '../components/Hero'
import Button from '../containers/Button'
import Services from '../components/Services'
import Featured from '../components/Featured/Featured'

import defaultBcg from '../images/defaultBcg.jpeg'

// import {useRooms} from '../context/rooms/RoomsContext'

export default function Home() {
    const details = {
        title:"Bonus resort centar",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laudantium hic velit iste ullam, est tenetur recusandae reiciendis soluta."
    }

    return (
        <>
            <Hero title={details.title} subtitle={details.subtitle} hero={defaultBcg}>
                <Button type="primary" url="#">See more</Button>
            </Hero>
            <Services/>
            <Featured/>
            
        </>
    )
}