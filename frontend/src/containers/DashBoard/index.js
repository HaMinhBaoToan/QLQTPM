import React from "react";
import { DatePicker } from "antd";
import { Row, Col } from "antd";
import "./styles.scss";
import CardComponent from "../../components/Card";
import moment from "moment";

const { RangePicker } = DatePicker;

const cards = [
  { title: "Tổng số tiền", content: "123,234", color: "#8BC34A" },
  { title: "Giá trị", content: "199,234", color: "#D32F2F" }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Tổng quan</h1>
      <RangePicker
        defaultValue={[moment("2015/01/01"), moment("2015/01/01")]}
      />
      <Row>
        {cards.map(item => (
          <Col xs={24} md={12}>
            <CardComponent {...item}></CardComponent>
          </Col>
        ))}
      </Row>
      <div>Tình hình tăng trưởng và kinh doanh toàn của hàng</div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: '1rem 0' }}>
        <div style={{ flex: 2, height: 200, background: 'white', margin: '2px' }}>Graph</div>
        <div style={{ height: 200, background: 'white' , margin: '2px'}}>Sản phẩm bán chạy</div>
      </div>
    </div>
  );
};

export default Dashboard;
