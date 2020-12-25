import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './component/Products';
import { Row, Col } from 'antd';
import './orders.scss';

const Orders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:4000/api/products';
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="products loading">
      <Row>
        <Col span={18}>
          <Products productsList={products} />
        </Col>
        <Col span={6}>ahihi</Col>
      </Row>
    </div>
  );
};

export default Orders;
