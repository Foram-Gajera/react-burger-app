import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility"; //we can use these updateObject function to all switch case like used in ADD_INGREDIENT. this is to make switch case liner and understandable

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      addIngredient(state, action);
      break;

    case actionTypes.REMOVE_INGREDIENT:
      removeIngredient(state, action);
      break;

    case actionTypes.SET_INGREDIENT:
      return {
        ...state,
        //not in order. it is in order from database
        // ingredients: action.ingredients,
        //to make it in order
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4, //when it reset then set price default
        error: false,
      };

    case actionTypes.FETCH_INGREDIENT_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
