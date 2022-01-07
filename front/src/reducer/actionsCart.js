import { 
  ADD_TO_CART,
  DECREASE_ITEM_AMOUNT,
  DELETE_CART_ITEM 
} from '../typesAction';


// ACTIONS
const actionAddToCart = (prodData) => {
  const { id, price = 0, title = '', image= '' } = prodData;
  return {
    type: ADD_TO_CART,
    payload: {id, price, title, image}
  }
};
const actionDecreaseAmount = (id, amount) => {
  return {
    type: DECREASE_ITEM_AMOUNT,
    payload: {id, amount}
  }
};
const actionDeleteItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: {id}
  }
};

//ACTION CREATOR
const addToCart = (id, dispatch) => {
  dispatch(actionAddToCart(id));
};
const decreaseItemAmount = (decreaseData, dispatch) => {
  const {id, amount} = decreaseData;
  dispatch(actionDecreaseAmount(id, amount));
};
const deleteCartItem = (id, dispatch) => {
  dispatch(actionDeleteItem(id));
}

export {
  addToCart,
  decreaseItemAmount,
  deleteCartItem
}