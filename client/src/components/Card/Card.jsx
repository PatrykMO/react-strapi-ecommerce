import React from 'react';
import {Link} from 'react-router-dom';

import './Card.scss';

const Card = ({item}) => {
 
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                <span>{item?.attributes.isNew && <span>New Season</span>}</span>
                <img src={item.attributes?.img?.data?.attributes?.url} alt={item.attributes?.title} className="mainImg" />
                <img src={item.attributes?.img2?.data?.attributes?.url} alt={item.attributes?.title} className="secondImg" />
            </div>

            <h2>{item?.attributes.title}</h2>

            <div className="prices">
                <h3>${item?.attributes.oldPrice || (item?.attributes.price * 1.1).toFixed(2)}</h3>
                <h3>${(item?.attributes.price).toFixed(2)}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card