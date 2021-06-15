import React from 'react'
import Hero from '../components/Hero'
import Button from '../containers/Button'
import Services from '../components/Services'
import Featured from '../components/Featured/Featured'

import {useRooms} from '../context/rooms/RoomsContext'

export default function Home() {
    const data = useRooms()
    const {rooms, loading, setLoading} = data;
    
    const details = {
        title:"Bonus resort centar",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta laudantium hic velit iste ullam, est tenetur recusandae reiciendis soluta."
    }

    setTimeout(()=>{
        setLoading(false);
    }, 2000)

    return (
        <>
            <Hero title={details.title} subtitle={details.subtitle}>
                <Button type="primary" url="#">See more</Button>
            </Hero>
            <Services/>
            {
                loading ? "Loading...": <Featured rooms={rooms}/>
            }
            
        </>
    )
}