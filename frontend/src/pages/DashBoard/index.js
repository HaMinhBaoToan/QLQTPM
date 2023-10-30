import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker, Row, Col } from 'antd';
import './styles.scss';
import CardComponent from '../../components/Card';
import LineChart from './components/Chart';
import axios from 'axios';
import { formatDate, formatNumber } from '../../utils';

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [data, setData] = useState({ infor: [], chartData: [], topItemsData: [] });
  const [dates, setDates] = useState({ fromDate: dayjs("2020-12-01"), toDate: dayjs() });

  useEffect(() => {
    let url = `http://localhost:4000/api/dashboard?fromDate=${formatDate(dates.fromDate)}&toDate=${formatDate(dates.toDate.add(1, 'days'))}`;
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [dates]);

  const handleDate = (data) => {
    if (data) {
      const fromDate = dayjs(data[0]);
      const toDate = dayjs(data[1]);
      let url = `http://localhost:4000/api/dashboard?fromDate=${formatDate(fromDate)}&toDate=${formatDate(toDate)}`;
      axios.get(url).then((response) => {
        setData(response.data);
        setDates({ fromDate, toDate })
      });
    }
  }

  return (
    <div className="dashboard">
      <div>
        <h1>Tổng quan</h1>
        <div>
          <RangePicker
            onChange={handleDate}
            value={[dayjs(dates.fromDate), dayjs(dates.toDate)]}
            format={'DD/MM/YYYY'}
          />
        </div>
      </div>

      <Row className="dashboard-card" gutter={[16, 16]}>
        {data.infor.map((item, idx) => (
          <Col sm={24} md={24} lg={12} key={idx}>
            <CardComponent index={idx} {...item}></CardComponent>
          </Col>
        ))
        }
      </Row>
      <div className="title-metric-infor">
        Tình hình tăng trưởng và kinh doanh toàn của hàng
      </div>
      <Row className="metricInfor" gutter={[16, 16]}>
        <Col className="chartItem" md={24} lg={18}>
          <LineChart chartData={data.chartData} />
        </Col>
        <Col className="topItems" md={24} lg={6}>
          <div>
            <div className="title-topItems">Sản phẩm bán chạy</div>
            {data.topItemsData.map((item, idx) => (
              <div className="content" key={idx}>
                <div className="info">
                  <p>{item.name}</p>
                  <p>{formatNumber(item.amount)}đ</p>
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
