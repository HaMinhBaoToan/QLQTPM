import React, { useState } from "react";
import { Modal } from "antd";
const Product = ({ product, openModal, handleAdd }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const addCart = (product) => {
    handleAdd(product);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="product">
      <div>
        <div className="product-image">
          <img
            src={product.Product_Image}
            alt={product.Product_Name}
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
        {/* <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        /> */}
        <div className="product-action">
          <button
            className="add-to-cart"
            type="button"
            onClick={() => addCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>

      <Modal
        title={"Thông tin món " + product.Product_Name}
        visible={isModalVisible}
        onCancel={handleCancel}
        okText="Chọn món"
        cancelText="Huỷ"
        onOk={() => {addCart(product);handleCancel();}}
        cancelButtonProps={{ disabled: true }}
      >
        <div className="quick-view">
          <div className="quick-view-image">
            <img
              src={product.Product_Image}
              alt={product.Product_Name}
            />
          </div>
          <div className="quick-view-details">
            <span className="product-name">{product.Product_Name}</span>
            <span className="product-price">
              {numberWithCommas(parseInt(product.Product_NewPrice))}
            </span>
            <p className="product-description">
              {product.Product_Description
                ? product.Product_Description
                : "Không có mô tả"}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
