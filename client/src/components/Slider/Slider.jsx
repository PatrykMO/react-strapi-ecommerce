import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

import './Slider.scss'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.pexels.com/photos/923229/pexels-photo-923229.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3178875/pexels-photo-3178875.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/865580/pexels-photo-865580.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt='fashion'/>
        <img src={data[1]} alt='fashion'/>
        <img src={data[2]} alt='fashion'/>
        <img src={data[3]} alt='fashion'/>
      </div>

      <div className="icons">
        <div className="icon" onClick={() => {setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)}}>
          <WestOutlinedIcon />
        </div>

        <div className="icon" onClick={() => {setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)}}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider