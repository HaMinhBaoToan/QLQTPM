import { Card } from 'antd';
import './styles.scss';
import { formatNumber } from '../../utils';
import React  from 'react';
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

const cardInfo2 = [
  {
    color: '#8BC34A',
    title: 'Tổng giá trị',
  },
  {
    color: '#D32F2F',
    title: 'Số tiền chi',
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
        <h5>{cardInfo2[index].title}</h5>
        <h2>{formatNumber(amount)}</h2>
      </div>
    </Card>
  );
};

export default CardComponent;
