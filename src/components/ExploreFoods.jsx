import React from 'react';
import pizza from '../assets/pizza.jpeg';
import food from '../assets/food.jpg';
import './ExploreFoods.css'; // Correct CSS file import

const ExploreFoods = () => {
  return (
    <div className='explore-foods'>
      <h2 className="text-center">Explore Foods</h2>
      <div className='categories'>
        <div className='category'>
          <img src={pizza} alt="Pizza" />
          <h3>Pizza</h3>
        </div>
        <div className='category'>
          <img src={food} alt="Food" />
          <h3>Food</h3>
        </div>
        <div className='category'>
          <img src={pizza} alt="Pizza" /> {/* Assuming you meant another pizza image */}
          <h3>Pizza</h3>
        </div>
      </div>
    </div>
  );
}

export default ExploreFoods;
