import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { initStore } from '../../reducer/actions.js'
import Card from '../../components/card.js';
import Sprinner from '../../components/Sprinner.js';
import style from './products.module.css';

function Products() {

  const store = useSelector( state => state.shop);
  const dispatch = useDispatch();
  console.log('Productd_out')
  useEffect(() => {
    if(!store.products) {
      initStore(dispatch);
    };
    console.log('Productd')
  }, []);
  useEffect(() => {
    console.log(store)

  }, [store])
  const isLoading = store.arrProductStatus !== 'SUCCESS';


  return (
    <div >
      {isLoading ?
      (<div className={style.prodWrapper}>
        <Sprinner className={style.spinner} style={{position: 'absolute', bottom: '50px'}}/>
      </div>) :
        <Row justify={"center"} gutter={16} >
          {store.products.map(prod =>  (
            <Col xs={22}  md={11} lg={8} xl={6} xxl={4} key={prod.id} className={style.card_margin}>
              <Card product={prod} />
            </Col>
          ))}
        </Row>
      }
    </div>
  );
}

export default Products;