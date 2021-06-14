import React from 'react'
import {Button as StyledButton} from './Button.style'

export default function Button({children, type}) {
    return (
        <StyledButton type={type}>{children}</StyledButton>
    )
}
