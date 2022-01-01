import update, { extend } from 'immutability-helper';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  LOADING,
  INIT_APP,
  ADD_TO_STORE
} from '../typesAction';


const initialState = {
  categories: [],
  products: [],
  store: []
};


const reducer = (state = initialState, action) => {

  const findFilmIdx = (id) => {
    return state.products.findIndex(product => product.id == id);
  };

  switch(action.type) {
    case LOADING: {
      return update(state, {
        arrProductStatus: {$set: {LOADING}}
      })
    };
    case PRODUCT_LOAD_IN_PROGRESS: {
      const product = {
        id: Number(action.payload.id), status: 'in_progress', 
      };
      return update(state, {products: { $push: [product] }});
    };
      
    case PRODUCT_LOAD_FAIL: {
      const ind = findFilmIdx(action.payload.id);
      return update(state, { 
        products: { 
          [ind]: { 
            status: {$set: 'fail'}
          }
        }
      });
    };

    case PRODUCT_ADD_BY_ID: {
      const ind = findFilmIdx(action.payload.product.id);
      const res = update(state, { products: {[ind]: {
        $set: action.payload.product,
      }}});
      console.log('add : ', ind, res);
      return res;
    };

    case LOADING: {
      return update(state, {$set:{arrProductStatus: action.payload}})
    };
    case GET_PRODUCTS_BY_LIMIT : {

      return update(state, {
        products: {$set: action.payload.products}, 
        arrProductStatus: {$set: 'SUCCESS'}})
    };

    case INIT_APP: {
      return update(state, {
        categories: {$set: action.payload.categories},
        products: {$set: action.payload.products},
        arrProductStatus: {$set: 'SUCCESS'}
      })
    };

    case ADD_TO_STORE: {
      // const ind = state.store.findIndex( product  => product.id === action.payload.id );
    
      const isExist = state.store.reduce( (acc, item, ind) => {
        if(item.id === action.payload.id) {
          acc.ind = ind;
          acc.amount = item.amount + 1;
        };
        return acc;
      }, {ind: null, amount: null});
console.log('REDUCE: ', isExist)

      if(isExist.ind === null) {
        const selectedProduct = {...action.payload, amount: 1}
        return update(state, {
          store: {$push: [selectedProduct]}
        });
      } else {
        return update(state, { store:
          {[isExist.ind]: {amount: {$set: isExist.amount}}}
        })
      }
    }

    default: 
     return state
  }
};

export default reducer;