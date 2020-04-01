import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(item => {
        return <li key={item}><span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}</li>;
    })
    
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <button>Continue to Checkout</button>
        </Aux>
    );
};

export default OrderSummary;