import styled from "styled-components";

const List = styled.div`
  padding: 5rem 0;

  .cards{
    max-width:100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 40px;
    
    @media screen and (min-width: ${props=>props.theme.tablet}) {
        width: 90vw;
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }
  }
  
`

export { List}