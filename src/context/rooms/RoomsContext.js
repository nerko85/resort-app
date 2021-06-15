import {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'
import items from '../../data'

const RoomsContext = createContext();

function ProvideRooms({children}){
    const data = useProvideRooms();
    return <RoomsContext.Provider value={data}>{children}</RoomsContext.Provider>
}

function useRooms(){
    return useContext(RoomsContext)
}

function useProvideRooms(){
    const [rooms, setRooms] = useState(null);
    const [sortedRooms, setSortedRooms] = useState(null);
    const [featured, setFeatured]  = useState(null);
    const [loading, setLoading]  = useState(true);

    function formatData(items){
        const tempItems = items && items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=> image.fields.file.url);
            let details = {...item.fields, id, images};
            return details;
        })
        setRooms(tempItems)
    }

    useEffect(()=>{
        formatData(items)
    },[])

    return {
        rooms,
        featured,
        sortedRooms,
        loading,
        setLoading
    }

}

export {
    ProvideRooms, useRooms
}