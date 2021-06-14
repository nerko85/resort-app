import React from 'react'
import {Hero as StyledHero} from './Hero.style'

export default function Hero({children, hero, url}) {
    return (
        <StyledHero hero={hero} url={url}>
            <div className="content">
                {children}
            </div>
        </StyledHero>
    )
}
