import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import './Products.scss';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(199);
  const [sort, setSort] = useState('asc');
  const [selectedSubCategories, setSelectedSubCategories] = useState([])

  const {data} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setSelectedSubCategories(
      checked 
      ? [...selectedSubCategories, value] 
      : selectedSubCategories.filter((item) => item !== value)
    );
  };

  const catImg = [
      'https://images.pexels.com/photos/928060/pexels-photo-928060.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">

          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}

        </div>
        <div className="filterItem">

          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={199} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>

        </div>
        <div className="filterItem">

          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={() => setSort('asc')}/>
            <label htmlFor='asc'>Price (Lowest to Highest)</label>
          </div>

          <div className="inputItem">
            <input type='radio' id='desc' value='desc' name='price' onChange={() => setSort('desc')}/>
            <label htmlFor='desc'>Price (Highest to Lowest)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img 
          src={catImg[catId - 1]} 
          alt="category image" 
          className="catImg" 
        />

        <List catId={catId} maxPrice={maxPrice} sort={sort} subCategories={selectedSubCategories}/>
      </div>
    </div>
  )
}

export default Products