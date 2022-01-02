import { useSelector, useDispatch } from 'react-redux';
import StoreItem from '../../components/StoreItem';


const Store = () => {
  const storeData = useSelector(state => state.store);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Store</h1>
        <div>
          {
            storeData.items.map( item => (
              <StoreItem props={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
};
export default Store;