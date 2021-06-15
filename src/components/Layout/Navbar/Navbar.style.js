import styled from 'styled-components'

const Header = styled.header`
    padding:1rem 0;
    width:100%;

    .content {
        display:flex;
        justify-content:space-between;
        position:relative;

        .hamburger {
            position:absolute;
            display:none;
            top:10px;
            right:0px;
            padding:0;
    
            @media(max-width:568px){
                display:block;
                background:none;
                border:none;
                font-size:1.5rem;
                color:#7952b3;
            }
        }

        @media(max-width:568px){
            flex-direction:column;

                li {
                    padding-top:1rem;

                    &:first-child{
                        padding-top:0;
                    }
                }
        }
    }
`

const Logo = styled.h1`
    display:inline-block;
    margin:0;
    font-size:2rem;
`

const Navigation = styled.nav`
    display:flex;
    align-items:center;

    ul {
        display:flex;
        gap:2rem;
        list-style:none;

        a {
            text-decoration:none;
            color:black;
            font-weight:bolder;
            transition:color .3s ease;

            &:hover {
                color:#7952b3;
            }
        }

        @media(max-width:568px){
            display:${props=>props.open?"block":"none"};
        }

    }
`

export {
    Header, Logo, Navigation
}