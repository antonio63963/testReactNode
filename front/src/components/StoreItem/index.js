
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseItemAmount, deleteCartItem } from '../../reducer/actionsCart';
import { Image, Button } from 'antd';
import style from './storeItem.module.css';

const StoreItem = ({ props }) => {
  const { id, ind } = props;

  const dispatch = useDispatch();
  const selectedProduct = useSelector(state => state.cart.items[ind]);
  console.log('SELECTED PROD: ', props)
  const {title, price, amount, image } = selectedProduct;
  const onAdd = () => {
    addToCart({id, ind}, dispatch);
  };
  const onDecrease = () => {
    decreaseItemAmount({id, amount}, dispatch)
  };
  const onDelete = () => {
    console.log('DELETE!!! id: ', id)
    deleteCartItem(id, dispatch);
  };
  
  return (
    <div className={style.space} >
      <div className={style.imageWrapper} >
      <Image
        // width={200}
        src={image}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            // width={200}
          />
        }
      />
      </div>
     <div className={style.bodyCardWrapper}>
        <div>
          <div className={style.cardLine}>
            <h3 className={style.propName}>Title: </h3>
            <p style={{textAlign: 'center'}}>{title}</p>
          </div>
         <div className={style.cardLine}>
            <h3 className={style.propName}>Price</h3>
            <span>${price}</span>
         </div>
          <div className={style.cardLine}>
            <h3 className={style.propName}>Amount:</h3>
            <span>{amount}</span>
          </div>
          <div className={style.cardLine}>
            <h2 className={style.propName}>Sum:</h2>
            <span>${amount * price}</span>
          </div>
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
    </div>
  )
};

export default StoreItem;