import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FoodDetail extends React.Component {
  render() {
    const { activeFood } = this.props;

    if (!activeFood) {
      return (
        <React.Fragment>
          <h2>Select a food</h2>
        </React.Fragment>
      );
    }
    return (
      <div>
        <img
          src={activeFood.imageUrl}
          height={activeFood.imageUrl ? 200 : 0}
          width={activeFood.imageUrl ? 200 : 0}
          alt='img'
        />
        <p>Name: {activeFood.name}</p>
        <p>Description: {activeFood.description}</p>
      </div>
    );
  }
}

FoodDetail.propTypes = {
  activeFood: PropTypes.array
};

function mapStateToProps(state) {
  return {
    activeFood: state.activeFood
  };
}

const FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;