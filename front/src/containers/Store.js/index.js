import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StoreItem from '../../components/StoreItem';


const Store = () => {
  const navigate = useNavigate();
  const storeData = useSelector(state => state.store);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Store</h1>
        <div>
          {
            storeData.items.map( item => (
              <StoreItem product={item} />
            ))
          }
        </div>
        <hr></hr>
        <h2 style={{margin: 0}}>Total:</h2>
        <h3>{storeData.total}</h3>
        <button onClick={() => navigate('/products')}>Сontinue shopping</button>
      </div>
    </>
  )
};
export default Store;