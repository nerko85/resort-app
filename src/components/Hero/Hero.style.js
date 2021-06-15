import styled from 'styled-components'

const Hero = styled.div`
    height:calc(100vh - 100px);
    padding:2rem;
    display:flex;
    background:${props=>props.hero==="main" ? "red": "orange"};
    color:white;

`

export {Hero}