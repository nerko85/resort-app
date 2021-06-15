import React from 'react'
import Spacer from '../Spacer'
import {Title as StyledTitle} from './Title.style'

export default function Title({title}) {
    return (
        <StyledTitle>
            <h4>{title}</h4>
            <Spacer size="small" type="primary"/>
        </StyledTitle>
    )
}
