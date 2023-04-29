import React from 'react';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

import './List.scss';

const List = ({ subCategories, catId, maxPrice, sort}) => {
   
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCategories.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);

  return (
    <div className='list'>
        {error 
          ? 'Error occurred!'
            : (loading 
              ? 'Loading...'
              : (data.map((item) => (
                <Card item={item} key={item.id}/>
        ))))}
    </div>
  )
}

export default List