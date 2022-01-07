import { 
  ADD_TO_CART,
  DECREASE_ITEM_AMOUNT 
} from '../typesAction';

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
}


const addToCart = (id, dispatch) => {
  dispatch(actionAddToCart(id));
};
const decreaseItemAmount = (decreaseData, dispatch) => {
  const {id, amount} = decreaseData;
  dispatch(actionDecreaseAmount(id, amount));
}

export {

  addToCart,
  decreaseItemAmount,

}