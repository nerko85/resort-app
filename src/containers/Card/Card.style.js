import styled from 'styled-components'

const Card = styled.div`
    span {
        display:inline-block;
        color:${props=>props.theme.primary};
        font-size:2.5rem;
        margin-bottom:1rem;
    }

    h3 {
        letter-spacing:1px;
        text-transform:capitalize;
    }
      
`

export {Card}