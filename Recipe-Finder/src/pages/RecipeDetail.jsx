import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No recipe selected. <button onClick={() => navigate('/')}>Go Back</button></p>;
  }

  const { name, ingredients, method, image } = state;

  return (
    <div className="detail-page">
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: '300px' }} />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h3>Method</h3>
      <p>{method}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default RecipeDetail;
