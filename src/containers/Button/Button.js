import React from 'react'
import {Button as StyledButton} from './Button.style'
import {Link} from 'react-router-dom'

export default function Button({children, type, url}) {
    return (
        <StyledButton type={type}>
            <Link to={url}>{children}</Link>
        </StyledButton>
    )
}
