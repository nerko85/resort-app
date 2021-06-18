import React from 'react'
import {useRooms} from '../../context/RoomContext'
import FeaturedCard from '../../containers/FeaturedCard';
import {List} from './RoomList.style'
import Title from '../../containers/Title'

export default function RoomList() {
    const {rooms} = useRooms();
    
    return (
        <List className="container">
            <Title title="Our apartmants"/>
            <div className="cards">
                {rooms && rooms.map(room=><FeaturedCard key={room.id} room={room}/>)}
            </div>
        </List>
    )
}

// <FeaturedRooms>
//             <div className="container">
//                 <Title title="Featured Rooms"/>
//                 <div className="cards">
//                     {loading? <Spinner/> : rooms}
//                 </div>
//             </div>
//         </FeaturedRooms>
