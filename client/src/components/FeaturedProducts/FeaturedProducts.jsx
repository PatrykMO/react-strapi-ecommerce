import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';
import './FeaturedProducts.scss';

const FeaturedProducts = ({type}) => { 
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
 
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Discover our latest collection for men and women, featuring trendy clothing items like graphic tees, hoodies, denim, and dresses. Stay stylish with us!</p>
        </div>

        <div className="bottom">
            {error ? 'Error occurred!' :
            (loading ? 'Loading...' : data.map(item => (<Card item={item} key={item.id}/>)))}
        </div>
    </div>
  )
}

export default FeaturedProducts