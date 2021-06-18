import React, { Component,createContext, useContext} from 'react'
import items from '../data'

const RoomsContext = createContext();

class RoomsProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }

    componentDidMount(){
       let rooms = this.formatData(items);
       let featuredRooms = rooms.filter(room=>room.featured);
       this.setState({rooms, featuredRooms})

       setTimeout(()=>{
            this.setState({loading:false})
        }, 2000)

    }
 
    formatData(items){
        let tempItems =items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=> image.fields.file.url);
            let details = {...item.fields, id, images};
            return details;
        })
        return tempItems;
    }

    getRoom = slug => {
        const rooms = [...this.state.rooms];
        let tempRoom = rooms.find(room=>room.slug===slug)
        return tempRoom;
    }

    render() {
        return (
            <RoomsContext.Provider value={{...this.state,getRoom:this.getRoom}}>
                {this.props.children}
            </RoomsContext.Provider>
        )
    }
}

function useRooms(){
    return useContext(RoomsContext)
}

export {
    RoomsProvider,
    useRooms,
}
