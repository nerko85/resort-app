import React from 'react'
import {Hero as StyledHero} from './Hero.style'
import Banner from '../Banner'

export default function Hero({children, hero, title, subtitle}) {
    return (
        <StyledHero hero={hero}>
            <Banner title={title} subtitle={subtitle}>
                {children}  
            </Banner>
        </StyledHero>
    )
}

Hero.defaultProps= {
    hero:"main"
}
