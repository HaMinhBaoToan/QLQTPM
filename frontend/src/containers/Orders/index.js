import React, { useState } from 'react';
import Products from './component/Products';
import QuickView from './component/QuickView';

import { Row, Col } from 'antd';
import './orders.scss';

const Orders = () => {
  const [quickViewProduct, setQuickViewProduct] = useState({});

  return (
    <div className="products loading">
      <Row>
        <Col span={18}>
          <Products setQuickViewProduct={setQuickViewProduct} />
          <QuickView productsQuickView={quickViewProduct} />
        </Col>
        <Col span={6}>Updating</Col>
      </Row>
    </div>
  );
};

export default Orders;
