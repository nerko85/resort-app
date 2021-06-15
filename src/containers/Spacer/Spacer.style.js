import styled from 'styled-components'

const Spacer = styled.div`
    width:${props=>props.size==="small"?"5rem":"10rem"};
    height:4px;
    background:${props=>props.type==="primary"?"#7952b3":"red"};
    margin:2rem auto;
`


export {Spacer}