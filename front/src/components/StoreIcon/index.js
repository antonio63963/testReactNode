
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import style from './storeIcon.module.css';
const StoreIcon = () => {
  const generalAmount = useSelector(state => state.store.generalAmount)
  return (
  
    <Badge className={style.badge} count={generalAmount} overflowCount={10}>
      <i style={{fontSize: '30px', color: 'white'}} className="fas fa-shopping-basket"></i>
    </Badge>

  )
};

export default StoreIcon;