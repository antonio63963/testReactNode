import { ADD_TO_CART } from '../typesAction';

const actionAddToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {id}
  }
};

const addToCart = (id, dispatch) => {
  dispatch(actionAddToCart(id));
};

export {

  addToCart,
}