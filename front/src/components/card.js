import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { addToStore } from '../reducer/actions';
import { addToCart } from '../reducer/actionsCart'
import { Card, Button } from 'antd';
import style from './card.module.css'
const { Meta } = Card;


export default function CardProduct({product}) {
  const dispatch = useDispatch();
  const {id = 0, title = 'some title', price = 1, image, description = 'some description'} = product;
  const prodData = { id, title, price, image };

  const [ isHover, setIsHover ] = useState(false);
  const onAddToStore = (prodData, dispatch) => {
    addToStore(prodData, dispatch);
    addToCart( prodData, dispatch)
    // console.log('onAddToStore: ', storeData);
  };
  return (
   <div className={style.card}>
      <Card 
        onMouseOver={(e) => {
          // if(e.target.closest.classList.contains())
          setIsHover(true)
        }}
        
        hoverable
        style={{ width: 240 }}
        cover={
        <div className={style.imgWrapper}>
          <img alt="example" className={style.imgCard} src={image} />
        </div>
      }
      >
      <Meta title={ title } />
        ${price}
        <div>
        <Button type="primary" onClick={() => onAddToStore(prodData, dispatch)}>Add to store</Button>
      </div>
      </Card>

      {/* <Card 
      onMouseOut={() => setIsHover(false)}
      className={isHover ? style.focussedCard : style.dispNone}
      hoverable
      style={{ width: 240 }}
      cover={
      <div className={style.imgWrapper}>
        <img alt="example" className={style.imgCard} src={image} />
      </div>
    }
    >
      <Meta title={ title } />
      ${price}
     
      <hr/>
      <p>{description}</p>
    </Card> */}
   </div>
  
  )
}


// export default function Card({ product }) {
//    const {id = 0, title = 'some title', price = 1, image} = product;
// console.log(product)
//   return (
//     <>
//     <h1>Helle</h1>
//       <span>id: { id }</span>
//       <h2>{ title }</h2>
//       <p>{ price }</p>
//       <img src={ image } alt="product img" />
//     </>
//   )
// }