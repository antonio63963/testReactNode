import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { getByCategory } from '../../reducer/actions';
import { Card, Col, Row, Image } from 'antd';
import style from './categories.module.css';


export default function CategoryCard() {
  const navigate = useNavigate();
  const state = useSelector(store => store.shop);
  const categories = state.categories;
  const dispatch = useDispatch();
  const onCategory = (cat) => {
    console.log(cat);
    const isGet = getByCategory(cat, dispatch, () => {
      console.log('Categor: ', state);
      return true;
    });
    if(isGet) navigate('/products')
  }
  return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      { categories.map((cat, ind) => (
      <Col span={8} style={{marginBottom: '20px', maxWidth: '405px'}} key={ind}>
        <Card className={style.card} onClick={() => onCategory(cat.category)} title={cat.title} bordered={false}>
        <div className={style.imgWrapper}>
          <Image
            preview={false}
            src={cat.img}
          />
        </div>
        </Card>
      </Col>

      )) }

    </Row>
  </div>
  )
}