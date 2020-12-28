import { Card } from 'antd';
import './styles.scss';
import { formatNumber } from '../../utils';

const cardInfo = [
  {
    color: '#8BC34A',
    title: 'Số đơn hàng',
  },
  {
    color: '#D32F2F',
    title: 'Vật liệu tồn kho',
  },
];

const CardComponent = ({ amount, totalItems, index }) => {
  return (
    <Card className="card" style={{ backgroundColor: cardInfo[index].color }}>
      <div>
        <h5>{cardInfo[index].title}</h5>
        <h2>{formatNumber(totalItems)}</h2>
      </div>
      <div>
        <h5>Tổng giá trị</h5>
        <h2>{formatNumber(amount)}</h2>
      </div>
    </Card>
  );
};

export default CardComponent;
