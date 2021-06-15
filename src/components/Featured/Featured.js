import React, {useState} from 'react'
import Card from '../../containers/Card';
import Title from '../../containers/Title'
import {FeaturedRooms} from './Featured.style'

export default function Featured({rooms}) {
    const featuredRooms = rooms.filter(room=>room.featured);
    return (
        <FeaturedRooms>
            <div className="container">
                <Title title="Featured Rooms"/>
                <div className="cards">
                    {featuredRooms && featuredRooms.map(room =>(
                        <Card key={room.id} title={room.name} img={room.images[0]} />
                    ))}
                </div>
            </div>
        </FeaturedRooms>
    )
}
