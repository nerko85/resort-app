import styled from 'styled-components'

const Hero = styled.div`
    width:100%;
    height:calc(100vh - 100px);
    padding:2rem;
    display:flex;
    background:${props=>props.hero==="main" ? "red": "black"};
    color:white;
    
    .content {
        max-width:600px;
        padding:2rem;
        margin:auto;
        background:red;
        text-align:center;
        background:rgba(0,0,0,.3);

        h1 {
            margin-top:0;
            font-size:2.7rem;
            letter-spacing:1px;
        }
    }
`

const Spacer = styled.div`
    width:200px;
    height:4px;
    background:#7952b3;
    margin:0 auto;
`

export {Hero, Spacer}