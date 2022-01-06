
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import style from './storeIcon.module.css';
const StoreIcon = () => {
  const generalAmount = useSelector(state => state.shop.store.generalAmount)
  console.log(useSelector(state => state.shop))
  return (
  
    <Badge className={style.badge} count={generalAmount} overflowCount={10}>
      <i style={{fontSize: '30px', color: 'white'}} className="fas fa-shopping-basket"></i>
    </Badge>

  )
};

export default StoreIcon;