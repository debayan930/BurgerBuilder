import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    const controls = [
        { label: 'Veggie', type: 'veggie', price: 20 },
        { label: 'Cheese', type: 'cheese', price: 10 },
        { label: 'Chicken', type: 'chicken', price: 30 },
        { label: 'Mutton', type: 'mutton', price: 40 }
    ];

    return(
        <div className={classes.BuildControls}>
            <p>Total: <strong>{props.price}</strong></p>
            {controls.map(control => {
                return <BuildControl
                            key={control.label}
                            label={control.label}
                            type={control.type}
                            price={control.price}
                        />
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.buyable}
                onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;