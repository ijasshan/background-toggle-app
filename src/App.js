import React from 'react';
import GreetingCard from './GreetingCard';
import BackgroundColorToggle from './BackgroundColorToggle';

function App() {
  return (
    <div>
      <h1>Welcome to our Website!</h1>
      <GreetingCard name="Jashan" greeting="Hello" />
      <GreetingCard name="Guys" greeting="Hi" />
    </div>
  );
}

export default App;

