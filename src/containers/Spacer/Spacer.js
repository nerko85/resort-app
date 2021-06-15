import React from 'react'
import {Spacer as StyledSpacer} from './Spacer.style'

export default function Spacer({type, size}) {
    return (
        <StyledSpacer type={type} size={size}></StyledSpacer>
    )
}
