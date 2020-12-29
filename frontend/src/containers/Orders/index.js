import React, { useEffect, useState } from "react";
import Products from "./component/Products";

import { Row, Col, Input } from "antd";
import "./orders.scss";
import axios from "axios";

const Orders = () => {
  // const [products, setProducts] = useState([]);
  const [addProductToCart, setAddProductToCart] = useState({});
  var carttemp =[];
  const [order, setOders] = useState([]);
  const [soHD, SetSoHD] = useState();

// var soHD =0;
//  useEffect(() => {
//     let url = "http://localhost:4000/api/orders";
//     axios.get(url).then((response) => {
//       SetSoHD(response.data.length);
//       // sortByKey(response.data, "Product_Name");
//     });
//   }, []);

  console.log(soHD);
  const saveOrders = () => {
    let url = `http://localhost:4000/api/orders`;
    axios.post(url, addProductToCart).then((response) => {
      // setData(response.data);
    });
  };

  return (
    <div className="products loading">
      <Row>
        <Col span={18}>
          <Products setAddProductToCart={setAddProductToCart} />
          {/* <QuickView productsQuickView={quickViewProduct} /> */}
        </Col>
        <Col span={6}>
          <div className="cart-detail">
            <div class="title">Hoá Đơn</div>
            <div>
              <Input addonBefore="Họ và Tên:     " defaultValue=" "   required/>
              <Input addonBefore="SĐT:            " defaultValue=" "  type="number"/>
              <Input addonBefore="Số hoá đơn: "  disabled="true" defaultValue={soHD} />


            </div>
            <div className="detail">
              {Object.keys(addProductToCart).length && (
                <div class="item">
                  <div class="image">
                    <img
                      src={process.env.PUBLIC_URL + "product/1.jpg"}
                      alt=""
                    />
                  </div>

                  <div class="description">
                    <span>Latte</span>
                  </div>

                  <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                      +
                    </button>
                    <input type="text" name="name" value="1" />
                    <button class="minus-btn" type="button" name="button">
                      -
                    </button>
                  </div>

                  <div class="total-price">37,000 vnđ</div>
                  <div class="buttons">
                    <span class="delete-btn">X</span>
                  </div>
                </div>
              )}
            </div>
            <div className="action-block">
              <button type="button" className=" "  onClick={saveOrders}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
