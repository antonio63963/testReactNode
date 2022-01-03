import { useSelector } from "react-redux";

import { Card, Col, Row } from 'antd';

export default function CategoryCard() {
  const categories = useSelector(store => store.categories);
  return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      { categories.map((cat, ind) => (
      <Col span={8} style={{marginBottom: '20px'}} key={ind}>
        <Card title={cat} bordered={false}>
          Card content
        </Card>
      </Col>

      )) }

    </Row>
  </div>
  )
}