import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StoreItem from '../../components/StoreItem';

const initCart = () => {
  
}

const Store = () => {
  const navigate = useNavigate();
  // const storeData = useSelector(state => state.shop.store);
  const data = useSelector(state => state.cart.items);
  
  useEffect(() => {
    console.log('STORE:', data)

  }, [data])

  return (
    <>
      <div>
        <h1>Store</h1>
        <div>
          {
            data.map( (item, ind) => (
              <StoreItem props={{id:item.id, ind}} key={`sotoreItem${ind}`} />
            ))
          }
        </div>
        <hr></hr>
        <h2 style={{margin: 0}}>Total:</h2>
      <h3>
        { 
          data.reduce(( acc, item ) => {
            acc += item.amount * item.price;
            return acc;
          }, 0).toFixed(2) 
        }
      </h3>
        <button onClick={() => navigate('/products')}>Сontinue shopping</button>
      </div>
    </>
  )
};
export default Store;