import React from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const BurgerIngredient = ({ type }) => {
    let ingredient = null;

    switch(type){
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case 'chicken':
            ingredient = <div className={classes.Chicken}></div>;
            break;

        case 'veggie':
            ingredient = <div className={classes.Veggie}></div>;
            break;

        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>;
            break;

        case 'mutton':
            ingredient = <div className={classes.Mutton}></div>;
            break;

        default:
            ingredient = null;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;