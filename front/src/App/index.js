import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'antd/dist/antd.css';
import style from './App.module.css';
import AppLayout from '../containers/AppLayout';
import Categories from '../containers/Categories';
import Products from '../containers/Products';
import ActionCard from '../components/ActionCard'
import { useDispatch } from 'react-redux';
import { initStore } from '../reducer/actions';

import Store from '../containers/Store.js';


function App() {
  const dispatch = useDispatch();

  console.log('App init')
  useEffect(() => {
   initStore(dispatch);
    
  });
  return (
  <div className={style.app}>
      <AppLayout>
        <Routes>
          <Route exact path='/' element={ <ActionCard /> } />
          <Route exact path='/categories' element={ <Categories /> } />
          <Route exact path='/products' element={ <Products /> } />
          <Route exact path='/store' element={<Store />} />
        </Routes>
      </AppLayout>
  </div>
  );
}

export default App;
