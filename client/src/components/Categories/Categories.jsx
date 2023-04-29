import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/14742161/pexels-photo-14742161.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                <button>
                    <Link className='link' to='/products/1'>WOMAN</Link>    
                </button>            
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/15031645/pexels-photo-15031645.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                <button>
                    <Link className='link' to='/products/2'>MEN</Link>    
                </button>    
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                <button>
                    <Link className='link' to='/products/3'>KIDS</Link>    
                </button>    
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                        <button>
                            <Link className='link' to='/products/1'>Sale</Link>    
                        </button>    
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                        <button>
                            <Link className='link' to='/products/1'>Shoes</Link>    
                        </button>    
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='categories-img'/>
                <button>
                    <Link className='link' to='/products/2'>Accessories</Link>    
                </button>    
            </div>
        </div>
    </div>
  )
}

export default Categories