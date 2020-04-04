import React from 'react';
import classes from './BuildControl.module.css';
import AuthContext from '../../../../context/auth-context';

const BuildControl = ({ label, type, price }) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <AuthContext.Consumer>
                {(context) => {
                    return (
                        <>
                            <button className={classes.Less} onClick={() => context.removeIngredientHandler(type)} disabled={context.disabledInfo[type][0]}>-</button>
                            <button className={classes.More} onClick={() => context.addIngredientHandler(type)} disabled={context.disabledInfo[type][1]}>+</button>
                            <div className={classes.Label}>{context.ingredients[type]}</div>
                        </>
                    );
                }}
            </AuthContext.Consumer>
            <div className={classes.Label}>{price}</div>
        </div>
    );
};

export default BuildControl;