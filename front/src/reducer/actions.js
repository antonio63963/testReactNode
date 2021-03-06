import axios from 'axios';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  INIT_APP,
  ADD_TO_STORE,
  DECREASE_STORE,
  DELETE_ITEM_FROM_STORE,
  GET_BY_CATEGORY
} from '../typesAction';


// ACTIONS
const startLoadProduct = async(id) => {
  return ({ 
    type: PRODUCT_LOAD_IN_PROGRESS,
    payload: { id }
  })
};

const resultOfLoadById = async(id) => {
  const result = await axios.get(`/addProdID/${id}`);
  // console.log(result.data)
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


const actionGetByLimit = async () => {
  // console.log('im n limit!!!')
  const result = await axios.get('/api/products');
  // console.log('action by limit: ', result)
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
  const {data} = await axios.get('/api/categories');
  console.log("Categories:++++", data);
  if(data.status !== 'ok') {
    return({ 
      type: PRODUCT_LOAD_FAIL
    })
  };
  return {
    type: INIT_APP,
    payload: { categories: data.payload.categories}
  }

};

const actionAddToStore = (prodData) => {
  const { id, price = 0, title = '', image= '' } = prodData;
  return ({
    type: ADD_TO_STORE,
    payload: {id, price, title, image}
  })
};

const actionDecreaseStore = (prodData) => {
  // {id, ind, amount} = prodData
  return ({
    type: DECREASE_STORE,
    payload: prodData
  })
};

const actionDeleteItemStore = (id) => {
  return ({
    type: DELETE_ITEM_FROM_STORE,
    payload: {id}
  });
};
//GET_CATEGORIES
const actionGetByCategory = async(catName) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/category/${catName}`);
  console.log("Categories: =======", data);
  return {
    type: GET_BY_CATEGORY,
    payload: data
  }
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
  // console.log('products', products);
  const action = await actionCategories();
  action.payload = {...action.payload, products};
  // console.log('action: ', action);
  dispatch(action);
};
const addToStore = (prodData, dispatch) => {
  dispatch(actionAddToStore(prodData));
};
const decreaseStore = (prodData, dispatch) => {
  dispatch(actionDecreaseStore(prodData));
};
const deleteItemFromStore = (id, dispatch) => {
  dispatch(actionDeleteItemStore(id));
};
const getByCategory = async(catName, dispatch, cb) => {
  dispatch(await actionGetByCategory(catName));
  return cb();
}



export {
  getProductById,
  getProductsByLimit,
  initStore,
  addToStore,
  decreaseStore,
  deleteItemFromStore,
  getByCategory
}