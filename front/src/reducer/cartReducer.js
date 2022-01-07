import update from 'immutability-helper';
import { 
  ADD_TO_CART, 
  DECREASE_ITEM_AMOUNT, 
  DELETE_CART_ITEM,
  REFRESH_CART
 } from '../typesAction';

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

  case DECREASE_ITEM_AMOUNT: {
    const {id, amount: oldAmount} = action.payload;
    const idx = findIdxById(id);
    if(oldAmount === 1) {
      const newState = update(state, {  
        items: {$splice: [[idx, 1]]} 
      });
      return newState;
    };
    
    if(idx !== -1) {
      const newState = update(state, {
        items: {[idx]: {amount: {$set: oldAmount - 1}}}
      });
      return newState;
    } else {
      console.log('Элемент не найден')
    }
  };
  
  case DELETE_CART_ITEM: {
    const {id} = action.payload;
    
    console.log('delllll: ', state.items)
    const idx = findIdxById(id);
    if(idx !== -1) {
      const newState = update(state, {  
        items: {$splice: [[idx, 1]]} 
      });
      return newState;
    } else {
      return state;
    };
  };

  case REFRESH_CART: {
    if(action.payload.status !== 'ok') return state;
    const newState = update(state, {
      items: {$set: [action.payload.payload.refreshCart]}
    })
  };

  default: 
    return state;
 };

};


export default reducer;
