import React, { useEffect, useState } from "react";
import { Modal, Button, Space } from "antd";
const Product = ({ product, openModal, setQuickViewProduct }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // const [added, setIsAdded] = useState([
  //   { selectedProduct: {}, quickViewProduct: {} }
  // ]);

  const quickView = (product) => {
    setQuickViewProduct({
      image: product.Product_Image,
      name: product.Product_Name,
      price: product.Product_NewPrice,
      id: product.Product_ID,
    });
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // console.log(Added);
  return (
    <div className="product">
      <div>
        <div className="product-image">
          <img
            src={
              process.env.PUBLIC_URL +
              "product/" +
              product.Product_Image +
              ".jpg"
            }
            alt={product.Product_Name}
            //  onClick={() => quickView(product)}
            onClick={showModal}
          />
        </div>
        <h4 className="product-name">{product.Product_Name}</h4>
        <p className="product-price-old">
          {numberWithCommas(parseInt(product.Product_OldPrice) + 5000)}
        </p>
        <p className="product-price">
          {numberWithCommas(parseInt(product.Product_NewPrice))}
        </p>
        <div className="product-action">
          <button className="add-to-cart" type="button">
            Add to cart
          </button>
        </div>
      </div>

      <Modal
        title={"Thông tin món " + product.Product_Name}
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        <div className="quick-view">
          <div className="quick-view-image">
            <img
              src={process.env.PUBLIC_URL + "product/" + product.Product_Image}
              alt={product.Product_Name}
            />
          </div>
          <div className="quick-view-details">
            <span className="product-name">{product.Product_Name}</span>
            <span className="product-price">
              {" "}
              {numberWithCommas(parseInt(product.Product_NewPrice))}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
