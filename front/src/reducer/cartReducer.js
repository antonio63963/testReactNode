import update from 'immutability-helper';
import { ADD_TO_CART } from '../typesAction';

const initialState = {
    items: [], 
    // generalAmount: 0,
    // total: 0
  
};


const reducer = (state = initialState, action) => {
  const findIdxById = (id) => {
    return state.items.findIndex(item => item.id === id);
  };

  switch (action.type) {
  case ADD_TO_CART: { 
    const idx = findIdxById(action.payload.id);
    console.log('cart add: ', idx);
    if(idx === -1) {
      const newState = update(state, {
        items: {$push: [{...action.payload, amount: 1}]},
      });
      return newState;
    }else {
      const newAmount = state.items[idx].amount + 1;
      const newState = update(state, {
        items: { [idx]: { amount: {$set: newAmount}}}
      });
      return newState;
    }
  };

  default: 
    return state;
 }

};


export default reducer;
