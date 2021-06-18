import React from 'react'
import {useParams} from 'react-router-dom'
import {useRooms} from '../context/RoomContext'

import Hero from '../components/Hero'
import Button from '../containers/Button'

export default function SingleRoom(){
        const params = useParams();
        const {slug} = params;
        const {getRoom} = useRooms();

        let room = getRoom(slug)

        if(!room){
         return <div className="error">
             <h3>There is no such room</h3>
             <Button url='/'>Return home</Button>
         </div>
        }

        const {name, description, price, type, capacity, size, extras, breakfast, pets, images} = room;

        return (
            <>
                <Hero title={`${name} room`} hero={images[0]}>
                    <Button url='/'>Return Home</Button>  
                </Hero>
               <div className="container">
                    <h1>{name}</h1>
                    <p>{description}</p>
               </div>
            </>
        )

}
