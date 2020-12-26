import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import './styles.scss';
import CardComponent from '../../components/Card';
import LineChart from './component/Chart';

const { RangePicker } = DatePicker;

// data trả về mảng gồm [{số đơn order: 234, tổng giá trị: 234 }, {tồn kho: 234, tổng giá trị: 234234}]
const cards = [
  {
    totalPrice: 12323434,
    totalItems: 1231,
    color: '#8BC34A',
    title: 'Số đơn hàng',
  },
  {
    totalPrice: 7777779,
    totalItems: 60,
    color: '#D32F2F',
    title: 'Vật liệu tồn kho',
  },
];

const topItemsData = [
  {
    title: 'Trà sữa trân châu đường đen',
    totalPrice: 1456234,
    totalOrders: 120,
  },
  { title: 'Trà sữa matcha', totalPrice: 1256234, totalOrders: 100 },
  { title: 'Trà chanh đào', totalPrice: 1156234, totalOrders: 90 },
  { title: 'Machiato Caramel', totalPrice: 1056234, totalOrders: 98 },
  { title: 'Cà phê đen', totalPrice: 926234, totalOrders: 180 },
  { title: 'Tiramisu', totalPrice: 556234, totalOrders: 60 },
  { title: 'Soda việt quất bạc hà', totalPrice: 444234, totalOrders: 50 },
  { title: 'Latte', totalPrice: 356567, totalOrders: 50 },
  { title: 'Phô mai chanh dây', totalPrice: 140000, totalOrders: 30 },
  { title: 'Mousse cacao', totalPrice: 130000, totalOrders: 6 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Tổng quan</h1>
      <div>
        <RangePicker
          defaultValue={[moment('01/01/2017'), moment('01/01/2020')]}
          format={'DD/MM/YYYY'}
        />
      </div>

      <Row className="dashboard-card" gutter={[16, 16]}>
        {cards.map((item, idx) => (
          <Col md={24} lg={12} key={idx}>
            <CardComponent {...item}></CardComponent>
          </Col>
        ))}
      </Row>
      <div className="title-metric-infor">
        Tình hình tăng trưởng và kinh doanh toàn của hàng
      </div>
      <Row className="metricInfor" gutter={[16, 16]}>
        <Col className="chartItem" md={24} lg={18}>
          <LineChart />
        </Col>
        <Col className="topItems" md={24} lg={6}>
          <div>
            <div className="title-topItems">Sản phẩm bán chạy</div>
            {topItemsData.map((item, idx) => (
              <div className="content" key={idx}>
                <div className="info">
                  <p>{item.title}</p>
                  <p>{item.totalPrice?.toLocaleString()}đ</p>
                </div>
                <span className="totalOrders">{item.totalOrders} lần đặt</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
