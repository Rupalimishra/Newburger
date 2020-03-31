import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 15,
    meat: 12,
    bacon: 17
};

class BurgerBuilder extends Component {
    state = {
        ingredients : null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false
    }
 componentDidMount () {
     axios.get('https://burgerbuilder-bb850.firebaseio.com/ingredients.json')
     .then(Response => {
       this.setState({ingredients :Response.data});
     });
 }
    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
        this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( Response => {
                console.log(Response)
            } )
            .catch( error => {
               
                console.log(Response)
            } );
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if ( this.state.ingredients ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

//         const disabledInfo = {
//             ...this.state.ingredients
//         };
//         for ( let key in disabledInfo ) {
//             disabledInfo[key] = disabledInfo[key] <= 0
//         }
//         let burger = (
//             <Aux>
//         <Burger ingredients={this.state.ingredients} />
//         <BuildControls
//                     ingredientAdded={this.addIngredientHandler}
//                     ingredientRemoved={this.removeIngredientHandler}
//                     disabled={disabledInfo}
//                     purchasable={this.state.purchasable}
//                     ordered={this.purchaseHandler}
//                     price={this.state.totalPrice} />
//                     </Aux>);
//         return (
//             <Aux>
//                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
//                     <OrderSummary 
//                         ingredients={this.state.ingredients}
//                         price={this.state.totalPrice}
//                         purchaseCancelled={this.purchaseCancelHandler}
//                         purchaseContinued={this.purchaseContinueHandler} />
//                 </Modal>
//                 {/* <Burger ingredients={this.state.ingredients} /> */}
//                 {/* <BuildControls
//                     ingredientAdded={this.addIngredientHandler}
//                     ingredientRemoved={this.removeIngredientHandler}
//                     disabled={disabledInfo}
//                     purchasable={this.state.purchasable}
//                     ordered={this.purchaseHandler}
//                     price={this.state.totalPrice} /> */}
//             </Aux>
//         );
//     }
// }

export default BurgerBuilder;