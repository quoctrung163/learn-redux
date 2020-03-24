import './App.css';
import React from 'react';

import FoodContainer from '../containers/food-list';
import FoodDetailContainer from '../containers/food-details';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h2>Welcome to React with Redux project</h2>
        <h2>List of foods: </h2>
        <FoodDetailContainer />
        <hr />
        <h2>Food details: </h2>
        <FoodContainer />
      </div>
    </div>
  );
}

export default App;
