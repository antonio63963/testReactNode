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
      navigate('/products')
    });
  }
  return (
    <div className="site-card-wrapper">
    <Row justify={'center'} gutter={16}>
      { categories.map((cat, ind) => (
      <Col xs={22} sm={12} lg={10}  key={ind}>
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