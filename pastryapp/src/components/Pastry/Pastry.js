import React from 'react';
import PastryIngredients from './PastryIngredient/PastryIngredients';
import cPastry from './Pastry.module.css';

const pastry = props => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return (
          <PastryIngredients key={igKey + i} type={igKey}></PastryIngredients>
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);

  return (
    <div className={cPastry.Pastry}>
      <PastryIngredients type="bread-top" />
      {transformedIngredients}
      <PastryIngredients type="bread-bottom" />
    </div>
  );
};

export default pastry;
