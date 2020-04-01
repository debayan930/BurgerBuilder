import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import AuthContext from '../../context/auth-context';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    veggie: 20,
    cheese: 10,
    chicken: 30,
    mutton: 40
};

const BASE_PRICE = 50;

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            veggie: 0,
            cheese: 0,
            chicken: 0,
            mutton: 0,
        },
        totalPrice: BASE_PRICE,
        buyable: false
    }

    addIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients};
            let addedPrice = 0;
            if(updatedIngredients[type] === 2){
                return;
            }else{
                updatedIngredients[type] = updatedIngredients[type] + 1;
                addedPrice = INGREDIENT_PRICES[type];
            }
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice + addedPrice,
                buyable: true,
                buyMode: false
            }
        });
    }

    removeIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedIngredients = {...prevState.ingredients};
            let removedPrice = 0;
            if(updatedIngredients[type] === 0){
                return;
            }else{
                updatedIngredients[type] = updatedIngredients[type] - 1;
                removedPrice = INGREDIENT_PRICES[type];
            }
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice - removedPrice,
                buyable: !(prevState.totalPrice - removedPrice === BASE_PRICE)
            }
        });
    }

    buyHandler = () => {
        this.setState({ buyMode: true });
    }
    
    render(){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = [disabledInfo[key] === 0, disabledInfo[key] === 2];
        }

        return(
            <Aux>
                <Modal ordered={this.state.buyMode}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <AuthContext.Provider
                    value={
                        {
                            addIngredientHandler: this.addIngredientHandler,
                            removeIngredientHandler: this.removeIngredientHandler,
                            disabledInfo: disabledInfo,
                            ingredients: this.state.ingredients
                        }
                    }
                >
                    <BuildControls
                        price={this.state.totalPrice}
                        buyable={this.state.buyable}
                        ordered={this.buyHandler}
                    />
                </AuthContext.Provider>
            </Aux>
        );
    }
};

export default BurgerBuilder;