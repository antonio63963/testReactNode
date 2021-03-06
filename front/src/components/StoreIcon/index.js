import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import style from './storeIcon.module.css';


const StoreIcon = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cart.items);
  const generalAmount = cartData.reduce((acc, item) => {
    acc += item.amount;
    return acc;
  }, 0)

  return (
  
    <Badge 
      className={style.badge} 
      count={generalAmount} 
      overflowCount={10}
      onClick={() => navigate('/store')}
    >
      <i style={{fontSize: '30px', color: 'white'}} className="fas fa-shopping-basket"></i>
    </Badge>

  )
};

export default StoreIcon;