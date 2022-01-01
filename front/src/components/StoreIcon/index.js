
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Avatar } from 'antd';
import style from './storeIcon.module.css';
const StoreIcon = () => {
  const generalAmount = useSelector(state => state.store.generalAmount)
  return (
  
    <Badge className={style.badge} count={generalAmount} overflowCount={10}>
      <i className="fas fa-shopping-basket"></i>
      {/* <Avatar shape="square" size="large" /> */}
    </Badge>

  )
};

export default StoreIcon;