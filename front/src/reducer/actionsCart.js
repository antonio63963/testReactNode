import { ADD_TO_CART } from '../typesAction';

const actionAddToCart = (prodData) => {
  const { id, price = 0, title = '', image= '' } = prodData;
  return {
    type: ADD_TO_CART,
    payload: {id, price, title, image}
  }
};

const addToCart = (id, dispatch) => {
  dispatch(actionAddToCart(id));
};

export {

  addToCart,
}