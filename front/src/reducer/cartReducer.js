import update from 'immutability-helper';
import { ADD_TO_CART } from '../typesAction';

const initialState = {
    items: [], 
    // generalAmount: 0,
    // total: 0
  
};


const reducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_TO_CART: { 
    // const addedProd = {...action.payload, amount: 1}
    const newState = update(state, {
      items: {$push: [action.payload], amount: {$set: 1}}
    });
    return newState;
  };

  default: 
    return state;
 }

};
 export default reducer;