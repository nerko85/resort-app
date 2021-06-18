import React from 'react'
import FeaturedCard from '../../containers/FeaturedCard';
import Title from '../../containers/Title'
import Spinner from '../../containers/Spinner'
import {FeaturedRooms} from './Featured.style'
import {useRooms} from '../../context/RoomContext'

export default function Featured() {
    const {featuredRooms, loading} = useRooms()
    const rooms = featuredRooms && featuredRooms.map(room =>(
        <FeaturedCard key={room.id} room={room} />
    ));
    return (
        <FeaturedRooms>
            <div className="container">
                <Title title="Featured Rooms"/>
                <div className="cards">
                    {loading? <Spinner/> : rooms}
                </div>
            </div>
        </FeaturedRooms>
    )
}
