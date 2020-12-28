import React, { useEffect, useState } from "react";
import Products from "./component/Products";
import QuickView from "./component/QuickView";

import { Row, Col } from "antd";
import "./orders.scss";

const Orders = () => {
  // const [products, setProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState({});



  return (
    <div className="products loading">
      <Row>
        <Col span={18}>
          <Products   setQuickViewProduct={setQuickViewProduct}  />
          <QuickView   productsQuickView={quickViewProduct}/>
        </Col>
        <Col span={6}>ahihi</Col>
      </Row>
    </div>
  );
};

export default Orders;
