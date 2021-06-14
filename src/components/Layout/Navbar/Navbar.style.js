import styled from 'styled-components'


const Header = styled.header`
    padding:1rem 0;

    .content {
        display:flex;
        justify-content:space-between;
    }
`

const Logo = styled.h1`
    display:inline-block;
    margin:0;
    font-size:2rem;
`

const Navigation = styled.nav`
    display:${props => props.mobile ? "none" : "block"};
    ul {
        display:flex;
        gap:2rem;
        list-style:none;

        a {
            text-decoration:none;
            color:$link !important;
        }
    }

`

export {
    Header, Logo, Navigation
}