import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import './Product.scss';
import { addToCart } from '../../redux/cartReducer';


const Product = () => {
  const productId = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img'); 
  const [quantity, setQuantity] = useState(1);

  const {data, loading, error} = useFetch(`/products/${productId}?populate=*`);
  const dispatch = useDispatch();
  return (
    <div className='product'>
        {error ? 
          'Error occurred!'
         : ((loading || !data || !data.attributes) ? 
          'Loading...' : 
          (<>
            <div className="left">
              <div className="images">
                <img 
                  src={data?.attributes?.img?.data?.attributes?.url} 
                  alt={data?.attributes?.title} 
                  onClick={() => setSelectedImg('img')}/>
                <img 
                  src={data?.attributes?.img2?.data?.attributes?.url} 
                  alt={data?.attributes?.title}  
                  onClick={() => setSelectedImg('img2')}/>
              </div>

              <div className="mainImg">
                <img src={data?.attributes[selectedImg]?.data?.attributes?.url} alt={data?.attributes?.title}  />
              </div> 

            </div>

            <div className="right">
              <h1>{data?.attributes?.title} </h1>
              <span className='price'>${data?.attributes?.price} </span>
              <p>{data?.attributes?.desc} </p>
              
              <div className="quantity">
                <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                {quantity}
                <button onClick={() => setQuantity(prev => prev+ 1)}>+</button>
              </div>

              <button className="add" onClick={() => dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                quantity,
                img: data.attributes.img.data.attributes.url,
              }))}>

                <AddShoppingCartIcon />
                <span>ADD TO CART</span>
              </button>

              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon />
                  <span>ADD TO WISH LIST</span>
                </div>

                <div className="item">
                  <BalanceIcon />
                  <span>ADD TO COMPARE</span>
                </div>
              </div>

              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>

              <div className="details">
                <span>DESCRIPTION</span>
                <div><hr/></div>
                <span>ADDITIONAL INFORMATION</span>
                <div><hr/></div>
                <span>FAQ</span>
              </div>

            </div>
          </>))}
    </div>
  )
}

export default Product