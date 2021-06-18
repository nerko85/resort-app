import React from 'react'
import PropTypes from 'prop-types';
import {FeaturedCard as Card, PriceTag} from './FeaturedCard.style'
import defaultImage from '../../images/room-1.jpeg'
import {Link} from 'react-router-dom'

export default function FeaturedCard({room}) {
    const {name,slug,images,price}=room;
    return (
        <Card>
            <div className="img-container">
                <img src={images[0] || defaultImage} alt={slug} />
                <PriceTag>
                    <h6>${price}</h6>
                    <p>per night</p>
                </PriceTag>
                <Link to={`/rooms/${slug}`} className="room-link btn-primary">Features</Link>
            </div>
            <div className="room-info">{name}</div>
        </Card>
    )
}

FeaturedCard.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}
