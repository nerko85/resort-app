import React from 'react'
import { Spacer } from '../../containers/Spacer/Spacer.style'
import {Banner as BannerStyled} from './Banner.style'


export default function Banner({title, subtitle, children}) {
    return (
        <BannerStyled>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Spacer type="primary"/>
            {children}
        </BannerStyled>
    )
}
