import styled from 'styled-components'

const Services = styled.div`
    padding:5rem 0;
    text-align:center;
    background:#ede0ca;

    .cards {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 50px;
    }
`

export {Services}