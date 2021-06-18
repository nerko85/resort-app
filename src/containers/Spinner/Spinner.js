import React from 'react'
import {Loading} from './Spinner.style'

import loadingGif from '../../images/gif/loading-arrow.gif'

export default function Spinner() {
    return (
        <Loading>
            <h4>Rooms are loading...</h4>
            <img src={loadingGif} alt="Loading"/>
        </Loading>
    )
}
