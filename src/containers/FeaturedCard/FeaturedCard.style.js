import styled from "styled-components"

const FeaturedCard = styled.div`
position:relative;
.img-container {
    position: relative;
  img {
    width: 100%;
    display: block;
    transition: all 0.3s linear;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);

    img {
        opacity: 0.3;
    }

    .price-top {
        opacity: 0;
    }

    .room-link {
    transform: translate(-50%, -50%) scale(1);
    }
  }

  .room-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
    
  }
  
  .btn-primary {
    display: inline-block;
    text-decoration: none;
    letter-spacing: 2px;
    color: #fff;
    font-weight:500;
    padding: 0.4rem 0.9rem;
    border: 3px solid #fff;
    transition: ${props=>props.theme.mainTransition};
    text-transform: uppercase;
    cursor: pointer;
  }
}

.room-info {
  background: ${props=>props.theme.primary};
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  color:#fff;
}
`

const PriceTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: all 0.3s linear;
    
    h6{
    margin:0;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    }

    p{
        margin:0;
    }

`

export {FeaturedCard, PriceTag}