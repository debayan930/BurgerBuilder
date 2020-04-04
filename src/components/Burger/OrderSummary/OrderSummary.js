import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(item => {
        return <li key={item}><span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{item}</span>: {props.ingredients[item]}</li>;
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h4>Price: Rs. {props.price}</h4>
            <Button
                buttonType='Danger'
                clicked={props.modalClosed}
            >
                Cancel
            </Button>
            <Button
                buttonType='Success'
                clicked={props.purchaseContinue}
            >
                Checkout
            </Button>
        </Aux>
    );
};

export default OrderSummary;