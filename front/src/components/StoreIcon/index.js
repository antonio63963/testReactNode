
import { useSelect, useDispatch } from 'react-redux';
import { Badge, Avatar } from 'antd';
import style from './storeIcon.module.css';
const StoreIcon = () => {
  
  return (
  
    <Badge className={style.badge} count={99} overflowCount={10}>
      <i className="fas fa-shopping-basket"></i>
      {/* <Avatar shape="square" size="large" /> */}
    </Badge>

  )
};

export default StoreIcon;