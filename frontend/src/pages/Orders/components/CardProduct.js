import React, { useState } from "react";
import { Modal, Button } from "antd";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

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
    <div className="featured__item">
      <div>
        <div className="featured__item__pic" style={{
          backgroundImage: `url(${product.Product_Image})`,
        }}>
          {/* <img
            src={product.Product_Image}
            alt={product.Product_Name}
            onClick={showModal}
          /> */}
          <ul className="featured__item__pic__hover">
            <li className='btn-format' onClick={() => addCart(product)}>
              <FaIcons.FaShoppingCart />
            </li>
            {/* <button
              className="add-to-cart"
              type="button"
              onClick={() => addCart(product)}
            >
              Add to cart
            </button> */}
          </ul>
        </div>
        <div className="featured__item__text">

          <h5 className="product-name">{product.Product_Name}</h5>

          <h6 className="product-price">
            {numberWithCommas(parseInt(product.Product_NewPrice))}
          </h6>

          <p className="product-price-old">
            {numberWithCommas(parseInt(product.Product_OldPrice) + 5000)}
          </p>
        </div>

        {/* <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        /> */}

        {/* <div className="product-action">
          <button
            className="add-to-cart"
            type="button"
            onClick={() => addCart(product)}
          >
            Add to cart
          </button>
        </div> */}
      </div>

      <Modal
        title={"Thông tin món " + product.Product_Name}
        open={isModalVisible}
        onCancel={handleCancel}
        okText="Chọn món"
        cancelText="Huỷ"
        onOk={() => { addCart(product); handleCancel(); }}
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
