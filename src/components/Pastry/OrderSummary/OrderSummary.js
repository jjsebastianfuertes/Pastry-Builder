import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import bStyles from './OrderSummary.module.css';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}><strong>{igKey}: </strong></span>
                    {this.props.ingredients[igKey]}
                </li>
            );
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>TOTAL:</strong> $ {this.props.totalPrice.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <button onClick={this.props.cancelButton} className={[bStyles.Button, bStyles.Success].join(' ')}>Cancel</button>
                <button onClick={this.props.continueButton} className={[bStyles.Button, bStyles.Danger].join(' ')}>Continue</button>
            </Aux>
        );
    };
};


export default OrderSummary;