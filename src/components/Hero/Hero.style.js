import styled from 'styled-components'

const Hero = styled.div`
    height:calc(100vh - 100px);
    display:flex;
    background:${props=>props.hero==="main"? "orange" : `url(${props.hero})`} no-repeat center;
    background-size:cover;
    color:white;

    @media(max-width:${props=>props.theme.mobile}){
        padding:2rem;
    }
    
    `
    
export {Hero}