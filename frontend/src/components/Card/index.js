import { Card } from 'antd';
import './styles.scss';

const CardComponent = ({ title, totalPrice, totalItems, color }) => {
  return (
    <Card className="card" style={{ backgroundColor: color }}>
      <div>
        <h5>{title}</h5>
        <h2>{totalItems?.toLocaleString()}</h2>
      </div>
      <div>
        <h5>Tổng giá trị</h5>
        <h2>{totalPrice?.toLocaleString()}</h2>
      </div>
    </Card>
  );
};

export default CardComponent;
