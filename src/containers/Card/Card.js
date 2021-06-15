import React from 'react'
import {Card as StyledCard} from './Card.style'

export default function Card({title, description,icon, img}) {
    return (
        <StyledCard>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            {img&& <img src={img}/>}
        </StyledCard>
    )
}
