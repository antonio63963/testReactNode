import update from 'immutability-helper';
import { 
  PRODUCT_LOAD_IN_PROGRESS, 
  PRODUCT_LOAD_FAIL, 
  PRODUCT_ADD_BY_ID, 
  GET_PRODUCTS_BY_LIMIT, 
  LOADING,
  INIT_APP,
  ADD_TO_STORE,
  DECREASE_STORE,
  DELETE_ITEM_FROM_STORE,
  GET_BY_CATEGORY

} from '../typesAction';


const initialState = {
  store: {
    items: [], 
    generalAmount: 0,
    total: 0
  }, 
  categories: [],
  products: [],
};
// const initialState = {
//   categories: [],
//   products: [],
//   store: {
//     items: [], 
//     generalAmount: 0,
//     total: 0
//   }
// };


const reducer = (state = initialState, action) => {

  const findFilmIdx = (id, arr) => {
    return arr.findIndex(product => product.id === id);
  };
  const setStoreAmount = (newState) => {
    const { items } = newState.store;
    const { total, generalAmount } = items.reduce((acc, item) => {
      item.sum = item.amount * item.price;
      acc.generalAmount += item.amount;
      acc.total += item.sum;
      return acc;
    }, { total: 0, generalAmount: 0 })

    newState.store.generalAmount = generalAmount;
    newState.store.total = total;
  };


  switch(action.type) {
    case LOADING: 
      return update(state, {
        arrProductStatus: {$set: {LOADING}}
      })
    

    case PRODUCT_LOAD_IN_PROGRESS: {
      const product = {
        id: Number(action.payload.id), status: 'in_progress', 
      };
      return update(state, {products: { $push: [product] }});
    };
      
    // case PRODUCT_LOAD_FAIL: {
    //   const ind = findFilmIdx(action.payload.id, state.items);
    //   return update(state, { 
    //     products: { 
    //       [ind]: { 
    //         status: {$set: 'fail'}
    //       }
    //     }
    //   });
    // };

    // case PRODUCT_ADD_BY_ID: {
    //   const ind = findFilmIdx(action.payload.product.id, state.items);
    //   const res = update(state, { products: {[ind]: {
    //     $set: action.payload.product,
    //   }}});
    //   console.log('add : ', ind, res);
    //   return res;
    // };

    // case LOADING: {
    //   return update(state, {$set:{arrProductStatus: action.payload}})
    // };

    case GET_PRODUCTS_BY_LIMIT: 
    console.log("GET_PRODUCTS_BY_LIMIT: ", state)
      return update(state, {
        products: {$set: action.payload.products}, 
        arrProductStatus: {$set: 'SUCCESS'}})
   
    case INIT_APP: 
    console.log('reducer init app: ', action.payload);
      return update(state, {
        categories: {$set: action.payload.categories},
        products: {$set: action.payload.products},
        arrProductStatus: {$set: 'SUCCESS'}
      })

    // case ADD_TO_STORE: {
    //   const isExist = state.store.items.reduce( (acc, item, ind) => {
    //     if(item.id === action.payload.id) {
    //       acc.ind = ind;
    //       acc.amount = item.amount + 1;
    //     };
    //     return acc;
    //   }, {ind: null, amount: null});
     

    //   if(isExist.ind === null) {
    //     const selectedProduct = {...action.payload, amount: 1 }
    //     const newState = update(state, {
    //       store: {
    //         items: {$push: [selectedProduct]}
    //       }
    //     });

    //     setStoreAmount(newState);
    //     return newState;
    //   } else {
    //     const newState = update(state, { store:
    //       {items: {[isExist.ind]: {amount: {$set: isExist.amount}}}}
    //     });
    //     setStoreAmount(newState);

    //     return newState;
    //   };
    // }

    // case DECREASE_STORE: {
    //   const { id, amount: oldAmount } = action.payload;
    //   const ind = findFilmIdx(id, state.store.items);
    //   if(oldAmount === 1) {
    //     const newState = update(state, {
    //       store: {
    //         items: {$splice: [[ind, 1]]}
    //       }
    //     });
    //     return newState;
    //   }

    //   if(ind !== -1) {
    //     const newState = update(state, { store: {
    //       items: {[ind]: {amount: {$set: oldAmount - 1}}}
    //     }});
    //     setStoreAmount(newState);
    //     console.log('inc state: ', newState)
    //     return newState;
    //   } else {
    //     return state;
    //   }
    // }

    // case DELETE_ITEM_FROM_STORE: {
    //   const { id } = action.payload;
    //   const ind = findFilmIdx(id, state.store.items);
    //   console.log('ind DEL ITEM: ', ind);
    //   if(ind !== -1) {
    //     const newState = update(state, {
    //       store: {
    //         items: {$splice: [[ind, 1]]}
    //       }
    //     });
    //     setStoreAmount(newState);
    //     return newState;
    //   } else {
    //     return state;
    //   }
    // };
    case GET_BY_CATEGORY: {
      console.log(GET_BY_CATEGORY);
      return update(state, {
        products: {$set: action.payload}
      });
    }
    default: 
      return state
  }
};

export default reducer;