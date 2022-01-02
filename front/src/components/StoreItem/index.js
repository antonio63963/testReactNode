import { Image, Button, Space } from 'antd';
import style from './storeItem.module.css';

const StoreItem = ({props}) => {
  const {title, id, price, amount, image} = props;
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
          <h3>Title: </h3>
          <span>{title}</span>
          <h3>Price: {price}</h3>
          <span>{price}</span>
          <h3>Amount:</h3>
          <span>{amount}</span>
        </div>
        <div className={style.buttonsWrapper}>
          <Button
            type="primary"
          >
            Add
          </Button>
          <Button
            type="primary"
          >
            Decrease
          </Button>
        </div>
     </div>
    </Space>
  )
};

export default StoreItem;