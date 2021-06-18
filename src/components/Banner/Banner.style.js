import styled from 'styled-components';

const Banner = styled.div`
    max-width:600px;
    padding:2rem 3rem;
    margin:auto;
    background:red;
    text-align:center;
    background:rgba(0,0,0,.3);

    @media(max-width:${props=>props.theme.mobile}){
        padding:2rem;
    }

    h1 {
        margin-top:0;
        font-size:2.7rem;
        letter-spacing:1px;
        text-transform:capitalize;
    }
`
export {Banner}