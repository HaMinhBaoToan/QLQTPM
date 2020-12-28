import React, { useEffect, useState } from "react";
import Products from "./component/Products";
import QuickView from "./component/QuickView";

import { Row, Col } from "antd";
import "./orders.scss";

const Orders = () => {
  // const [products, setProducts] = useState([]);
  const [addProductToCart, setAddProductToCart] = useState({});
  const carttemp = [];
  const [cart, setAddtoCart] = useState([]);

  function checkProduct(productID) {
    cart.forEach(function (item, index) {
      if (item.id === productID.id) {
        return true;
      } else {
        return false;
      }
    });
  }
  useEffect(() => {
    console.log(addProductToCart);
    carttemp.forEach(function (item, index) {
      if (item.id === addProductToCart.id) {
        console.log("object");
      } else {
        console.log("qq");
      }
    });
    // console.log(cart);
    // if (()=>checkProduct(addProductToCart)) {
    //   console.log("trùng");

    // } else {
    //   console.log("khác");
    //   setAddtoCart(carttemp.push(addProductToCart));
    // }
  }, [addProductToCart]);

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
            <div className="detail">
              <div class="item">
                <div class="image">
                  <img src={process.env.PUBLIC_URL + "product/1.jpg"} alt="" />
                </div>

                <div class="description">
                  <span>Common Projects</span>
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

                <div class="total-price">$549</div>
                <div class="buttons">
                  <span class="delete-btn">X</span>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src={process.env.PUBLIC_URL + "product/1.jpg"} alt="" />
                </div>

                <div class="description">
                  <span>Common Projects</span>
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

                <div class="total-price">$549</div>
                <div class="buttons">
                  <span class="delete-btn">X</span>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src={process.env.PUBLIC_URL + "product/1.jpg"} alt="" />
                </div>

                <div class="description">
                  <span>Common Projects</span>
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

                <div class="total-price">$549</div>
                <div class="buttons">
                  <span class="delete-btn">X</span>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src={process.env.PUBLIC_URL + "product/1.jpg"} alt="" />
                </div>

                <div class="description">
                  <span>Common Projects</span>
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

                <div class="total-price">$549</div>
                <div class="buttons">
                  <span class="delete-btn">X</span>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src={process.env.PUBLIC_URL + "product/1.jpg"} alt="" />
                </div>

                <div class="description">
                  <span>Common Projects</span>
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

                <div class="total-price">$549</div>
                <div class="buttons">
                  <span class="delete-btn">X</span>
                </div>
              </div>
            </div>
            <div className="action-block">
              <button type="button" className=" ">
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
