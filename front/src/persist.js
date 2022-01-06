import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import shop_reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  shop: shop_reducer
});
const persistedReducer = persistReducer( persistConfig, rootReducer );
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
// export default {
//   store,
//   persistor
// };
