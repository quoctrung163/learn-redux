import React, { Component } from 'react';
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';
import {selectFood} from '../actions/index';

class FoodList extends Component {
  createFoodListItems() {
    let listItem = this.props.foods.map(
      (eachFood) => {
        return (
          <li key={eachFood.id}
            onClick={     
              () => {
                this.props.selectFood(eachFood);
              }
            }
          >
            Food's name: {eachFood.name}
          </li>
        );
      }
    );
    return listItem;
  }
  render() {
    return (
      <ul>
        {
          this.createFoodListItems()
        }
      </ul>
    );
  }
}

// map state (redux) to props (react) for using
function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

// map dispatch (redux) to props for using
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectFood: selectFood
  }, dispatch);
} 

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;