import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { Row, Col, Input, notification } from "antd";
import "./orders.scss";
import axios from "axios";
import _ from "lodash";

var dateFormat = require("dateformat");
const Orders = () => {
  const [products, setProducts] = useState({});
  const [soHD, SetSoHD] = useState();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const clearState = () => {
    setName("toan");
    setPhone("TOAN");
    setProducts({});
    let url = "http://localhost:4000/api/orders";
    axios.get(url).then((response) => {
      SetSoHD(response.data[response.data.length - 1].Order_ID + 1);
    });
  };
  useEffect(() => {
    let url = "http://localhost:4000/api/orders";
    axios.get(url).then((response) => {
      SetSoHD(response.data[response.data.length - 1].Order_ID + 1);
    });
  }, []);

  const saveOrders = () => {
    let url_Order = `http://localhost:4000/api/orders`;
    let url_DetailOrder = `http://localhost:4000/api/order-detail`;

    var order = {
      Order_EmployeesID: 1,
      Order_Description: Phone,
      Order_Name: Name,
      Order_Status: "Done",
      Order_OrderDate: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
      Order_Discount: 0,
      Order_BranchID: 1,
      Order_QuantityAmount: quantityAmount(products),
      Order_PriceAmont: priceAmount(products),
    };

    axios
      .post(url_Order, order)
      .then((response) => {
        openNotificationWithIcon("success", response.data.Order_ID);
        axios
          .post(url_DetailOrder, [response.data.Order_ID, products])
          .then((response2) => {
            clearState();
          });
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
  };
  const openNotificationWithIcon = (type, idDonHang) => {
    notification[type]({
      message: "Hoàn Tất Thanh Toán",
      description: `Bạn vừa thanh toán thành công đơn hàng ${idDonHang}`,
    });
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function handleAdd(product) {
    if (_.has(products, product.Product_ID)) {
      const data = _.cloneDeep(products); //
      data[product.Product_ID].Quantity = data[product.Product_ID].Quantity + 1;
      data[product.Product_ID].total =
        data[product.Product_ID].Quantity * data[product.Product_ID].price;

      setProducts(data);
    } else {
      setProducts({
        ...products,
        [product.Product_ID]: {
          image: product.Product_Image,
          name: product.Product_Name,
          price: parseInt(product.Product_NewPrice),
          ProductID: product.Product_ID,
          Quantity: 1,
          total: parseInt(product.Product_NewPrice),
        },
      });
    }
  }

  const inputChangedHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    if (_.has(products, id)) {
      const data = _.cloneDeep(products); //
      data[id].Quantity = value;
      data[id].total = data[id].Quantity * data[id].price;
      setProducts(data);
    }
  };
  function handlebtnIncrease(product) {
    if (_.has(products, product.ProductID)) {
      const data = _.cloneDeep(products); //
      data[product.ProductID].Quantity = data[product.ProductID].Quantity + 1;
      data[product.ProductID].total =
        data[product.ProductID].Quantity * data[product.ProductID].price;
      setProducts(data);
    }
  }
  function handlebtnReduce(product) {
    if (_.has(products, product.ProductID)) {
      const data = _.cloneDeep(products); //
      data[product.ProductID].Quantity =
        parseInt(data[product.ProductID].Quantity) - 1;
      data[product.ProductID].total =
        data[product.ProductID].Quantity * data[product.ProductID].price;
      setProducts(data);
    }
  }
  function handleDelete(id) {
    console.log(id);
    if (_.has(products, id)) {
      var data = _.cloneDeep(products); //
      data = _.omit(data, id);
      // products.splice(id);
      console.log("data", data);
      setProducts(data);
    }
  }
  const quantityAmount = (product) => {
    var amount = 0;
    for (const property in product) {
      amount = amount + product[property].Quantity;
    }
    return amount;
  };

  const priceAmount = (product) => {
    var amount = 0;
    for (const property in product) {
      amount = amount + product[property].total;
    }
    return amount;
  };
  // console.log("products", products);

  return (
    <div className="products loading">
      <Row>
        <Col span={17}>
          <Products handleAdd={handleAdd} />
          {/* <QuickView productsQuickView={quickViewProduct} /> */}
        </Col>
        <Col span={7}>
          <div className="cart-detail">
            <div className="title">Hoá Đơn</div>
            <div>
              <Input
                addonBefore="Họ và Tên:     "
                disabled={_.isEmpty(products)}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                addonBefore="SĐT:            "
                disabled={_.isEmpty(products)}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
              />
              <Input addonBefore="Số hoá đơn: " disabled={true} value={soHD} />
            </div>
            <div className="detail">
              {Object.keys(products).map((idx) => {
                return (
                  <div className="item" key={products[idx].ProductID}>
                    <div className="image">
                      <img
                        src={products[idx].image}
                        alt=""
                      />
                    </div>

                    <div className="description">
                      <span>{products[idx].name}</span>
                    </div>

                    <div className="quantity">
                      <button
                        className="plus-btn"
                        type="button"
                        onClick={() => handlebtnIncrease(products[idx])}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={products[idx].Quantity}
                        onChange={(event) => inputChangedHandler(event)}
                        id={products[idx].ProductID}
                      />
                      <button
                        className="minus-btn"
                        type="button"
                        onClick={() => handlebtnReduce(products[idx])}
                      >
                        -
                      </button>
                    </div>

                    <div className="total-price">
                      {numberWithCommas(products[idx].total)} vnđ
                    </div>
                    <div className="buttons">
                      <span
                        className="delete-btn"
                        onClick={() => handleDelete(products[idx].ProductID)}
                      >
                        X
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="action-block">
              <Row className="amount">
                <Col span={5}>Tổng:</Col>
                <Col span={9}>Số Lượng: {quantityAmount(products)}</Col>
                <Col span={9}>
                  Giá: {numberWithCommas(priceAmount(products))} vnđ
                </Col>
              </Row>
              <button
                type="button"
                className={
                  _.isEmpty(Name) || _.isEmpty(Phone) || _.isEmpty(products)
                    ? "diablebtnCheckout"
                    : "btnCheckout"
                }
                disabled={
                  _.isEmpty(Name) || _.isEmpty(Phone) || _.isEmpty(products)
                }
                onClick={saveOrders}
              >
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
