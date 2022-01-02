import axios from 'axios';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  LOADING,
  INIT_APP,
  ADD_TO_STORE,
  INCREASE_STORE
} from '../typesAction';


// ACTIONS
const startLoadProduct = async(id) => {
  return ({ 
    type: PRODUCT_LOAD_IN_PROGRESS,
    payload: { id }
  })
};

const resultOfLoadById = async(id) => {
  // const url = `https://fakestoreapi.com/products/${ id }`;
  const result = await axios.get(`/addProdID/${id}`);
  console.log(result.data)
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL,
      payload: { id }
    })
  };
  const action = {
    type: PRODUCT_ADD_BY_ID,
    payload: { product: result.data.payload}
  };
  // const action = ifStatusOk(result)
  return action;
};



const startLoading = () => {
  return ({
    type: LOADING
  })
}
const actionGetByLimit = async () => {
  console.log('im n limit!!!')
  // const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const result = await axios.get('/api/products');
  console.log('action by limit: ', result)
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL, 
    })
  };
  const action = {
    type: GET_PRODUCTS_BY_LIMIT,
    payload: { products: result.data.payload}
  };
  return action;
};

const actionCategories = async () => {
  const result = await axios.get('https://fakestoreapi.com/products/categories');
  if(result.status !== 200) {
    return({ 
      type: PRODUCT_LOAD_FAIL
    })
  };
  const action = {
    type: INIT_APP,
    payload: { categories: result.data}
  }
  return action;
};

const actionAddToStore = (prodData) => {
  const { id, price = 0, title = '', image= '' } = prodData;
  return ({
    type: ADD_TO_STORE,
    payload: {id, price, title, image}
  })
}
const actionDecreaseStore = (prodData) => {
  // {id, ind, amount} = prodData
  return ({
    type: INCREASE_STORE,
    payload: prodData
  })
}
// COMPOSITONS
const getProductById = async(id, dispatch) => {
  dispatch(await startLoadProduct(id));
  dispatch(await resultOfLoadById(id));
};
const getProductsByLimit = async(dispatch) => {
  // dispatch(startLoading());
  dispatch(await actionGetByLimit());
};
const initStore = async(dispatch) => {
  // dispatch(startLoading())
  const { payload } = await actionGetByLimit();
  const { products } = payload;
  console.log('products', products);
  const action = await actionCategories();
  action.payload = {...action.payload, products};
  console.log('action: ', action);
  dispatch(action);
};
const addToStore = (prodData, dispatch) => {
  dispatch(actionAddToStore(prodData));
};
const decreaseStore = (prodData, dispatch) => {
  dispatch(actionDecreaseStore(prodData));
}




export {
  getProductById,
  getProductsByLimit,
  initStore,
  addToStore,
  decreaseStore
}