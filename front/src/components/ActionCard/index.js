
import { Card, Typography  } from 'antd';
const { Title } = Typography;

export default function ActonCard() {

  return (
    <Card title="Actions">
    <Card type="inner" title="Action 1" >
      <Title level={2}>Buy a hot dog for the price of two hot dogs and get the second one absolutely free!!!!</Title>
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Action 2"
      
    >
      <Title level={2}>You don't know how to get money? Just buy something from us and sell it on OLX!!!</Title>
      
    </Card>
  </Card>
  )
}