import React from 'react';
import pizza from '../assets/pizza.jpeg';
import food from '../assets/food.jpg';
import burger from '../assets/468.jpeg';

const FoodMenu = () => {
  const containerStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    marginBottom: '20px'
  };

  const itemsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '80%',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: 'calc(50% - 20px)', // 50% width minus the gap
    boxSizing: 'border-box',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px 0'
  };

  const imgStyle = {
    width: '50%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const infoStyle = {
    textAlign: 'center',
    marginTop: '10px'
  };

  const infoTitleStyle = {
    margin: '10px 0'
  };

  const infoParagraphStyle = {
    margin: '5px 0'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Food Menu</h2>
      <div style={itemsContainerStyle}>
        <div style={itemStyle}>
          <img src={pizza} alt="Pizza" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>Special burger</h3>
            <p style={infoParagraphStyle}>1000</p>
            <p style={infoParagraphStyle}></p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
        <div style={itemStyle}>
          <img src={food} alt="Food" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>Pizza</h3>
            <p style={infoParagraphStyle}>900</p>
            <p style={infoParagraphStyle}>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
        <div style={itemStyle}>
          <img src={burger} alt="Burger" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>Smoky Burger</h3>
            <p style={infoParagraphStyle}>1500</p>
            <p style={infoParagraphStyle}>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
        <div style={itemStyle}>
          <img src={pizza} alt="Pizza" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>burger</h3>
            <p style={infoParagraphStyle}>2000</p>
            <p style={infoParagraphStyle}>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
        <div style={itemStyle}>
          <img src={food} alt="Food" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>Pizza</h3>
            <p style={infoParagraphStyle}>1500</p>
            <p style={infoParagraphStyle}>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
        <div style={itemStyle}>
          <img src={burger} alt="Burger" style={imgStyle} />
          <div style={infoStyle}>
            <h3 style={infoTitleStyle}>Smoky Burger</h3>
            <p style={infoParagraphStyle}>2000</p>
            <p style={infoParagraphStyle}>Main ingredients: Chicken, Italian Sauce, and vegetables</p>
            <button style={buttonStyle}>Order Now</button>
          </div>
        </div>
      </div>
      <p>See All Foods</p>
    </div>
  );
};

export default FoodMenu;
