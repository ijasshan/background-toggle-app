import React from 'react';

const GreetingCard = ({ name, greeting }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <h2>{greeting}, {name}!</h2>
      <p>Thank you for visiting our website.</p>
    </div>
  );
};

export default GreetingCard;
