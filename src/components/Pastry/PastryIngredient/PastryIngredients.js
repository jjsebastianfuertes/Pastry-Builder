import React, { Component } from 'react';
import cPastryIngredient from './PastryIngredient.module.css';
import PropTypes from 'prop-types';

class PastryIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={cPastryIngredient.BreadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={cPastryIngredient.BreadTop}>
            <div className={cPastryIngredient.Seeds1}></div>
            <div className={cPastryIngredient.Seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={cPastryIngredient.Meat}></div>;
        break;
      case 'cheese':
        ingredient = <div className={cPastryIngredient.Cheese}></div>;
        break;
      case 'bacon':
        ingredient = <div className={cPastryIngredient.Bacon}></div>;
        break;
      case 'salad':
        ingredient = <div className={cPastryIngredient.Salad}></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

// verify that exists a prop inside switch conditional
// it must be a string
PastryIngredients.props = {
  type: PropTypes.string.isRequired
};

export default PastryIngredients;
