import styled from 'styled-components'

const Button =styled.a`
    display:inline-block;
    margin-top:1rem;
    background:${props=>props.type==="primary"? "#7952b3":"gray"};
    color:${props=>props.type==="primary"? "#fff":"#000"};
    padding:1rem 3rem;
    text-transform:uppercase;
    cursor:pointer;
    border-radius: .3rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover, &:active {
        color: #fff;
        background-color: #61428f;
        border-color: #61428f;
    }
`

export {Button}