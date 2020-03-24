import foodsReducer from './foods-reducer';
import usersReducer from './users-reducer';
import activeFoodReducer from './active-food-reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  foods: foodsReducer,
  users: usersReducer,
  activeFood: activeFoodReducer
});

export default allReducers;