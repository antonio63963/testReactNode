import { useSelector, useDispatch } from 'react-redux';
import { addToStore, decreaseStore, deleteItemFromStore } from '../../reducer/actions';
import { Image, Button, Space } from 'antd';
import style from './storeItem.module.css';

const StoreItem = ({ props }) => {
  const { id, ind } = props;
  const dispatch = useDispatch();
  const selectedProduct = useSelector(state => state.store.items[ind]);
  const {title, price, amount, image, sum } = selectedProduct;
  const onAdd = () => {
    addToStore({id, ind}, dispatch);
  };
  const onDecrease = () => {
    console.log('DECEASE: ', id)
    decreaseStore({id, amount}, dispatch)
  };
  const onDelete = () => {
    console.log('DELETE!!! id: ', id)
    deleteItemFromStore(id, dispatch);
  };
  
  return (
    <Space size={12}>
      <Image
        width={200}
        src={image}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
     <div className={style.bodyCardWrapper}>
        <div>
          <h3 className={style.propName}>Title: </h3>
          <span>{title}</span>
          <h3 className={style.propName}>Price: {price}</h3>
          <span>{price}</span>
          <h3 className={style.propName}>Amount:</h3>
          <span>{amount}</span>
          <h2 className={style.propName}>Sum:</h2>
          <span>{sum}</span>
        </div>
        <div className={style.buttonsWrapper}>
          <Button
            onClick={() => onAdd()}
            className={style.btnAction}
            type="primary"
          >
            Add
          </Button>
          <Button
            onClick={() => onDecrease()}
            className={style.btnAction}
            type="primary"
          >
            Decrease
          </Button>
          <Button
            onClick={() => onDelete()}
            className={style.btnAction}
            type="danger"
          >
            Delete
          </Button>
        </div>
     </div>
    </Space>
  )
};

export default StoreItem;