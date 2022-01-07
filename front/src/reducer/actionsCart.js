import { 
  ADD_TO_CART,
  DECREASE_ITEM_AMOUNT,
  DELETE_CART_ITEM,
  REFRESH_CART 
} from '../typesAction';
import axios from 'axios';


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
const actionRefreshCart = async (prodArr) => {
  const { data } = await axios.post('/api/refreshCart', prodArr);
  console.log('refreshArr', data);
  return {
    type: REFRESH_CART,
    payload: data
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
};
const refreshCart = async(prodArr, dispatch) => {
  dispatch(await actionRefreshCart(prodArr));
};

export {
  addToCart,
  decreaseItemAmount,
  deleteCartItem,
  refreshCart
}