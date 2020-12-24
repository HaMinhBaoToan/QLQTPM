import { Card } from 'antd';
import './styles.scss';

const CardComponent = ({ title, content, color }) => {
  return (
    <Card style={{ backgroundColor: color }}>
      <h5>{title}</h5>
      <h2>{content}</h2>
    </Card>
  )
}

export default CardComponent;