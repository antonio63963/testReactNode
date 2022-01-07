import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StoreItem from '../../components/StoreItem';
import { refreshCart } from '../../reducer/actionsCart';

const Store = () => {

  const navigate = useNavigate();
  const data = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const onRefreshCart = (prodArray) => {
    console.log('refresh')
    refreshCart(prodArray, dispatch);
  };
  useEffect(() => {
    console.log('STORE:', data)

  }, [data])

  return (
    <>
      <div>
        <h1>Cart</h1>
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
        <button type="primary" onClick={() => navigate('/products')}>Сontinue shopping</button>
        {
          data.length > 0 ? 
          (<button type="dashed" onClick={() => onRefreshCart(data)}>Refresh cart</button>) : 
          (<button>Cart is empty</button>)
        } 
      </div>
    </>
  )
};
export default Store;