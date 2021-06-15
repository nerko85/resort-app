import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

export default function SingleRoom(){

        const params = useParams();
        const {slug} = params;

        return (
            <div>
                This is single room page <strong>{slug}</strong>
            </div>
        )

}
