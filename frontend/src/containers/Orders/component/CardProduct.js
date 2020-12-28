import React, { useEffect, useState } from "react";
import { Modal, Button, Space } from "antd";
const Product = ({ product, openModal, setAddProductToCart }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
 

  const addCart = (product) => {
    setAddProductToCart({
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

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
// console.log(product);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
          <button className="add-to-cart" type="button"    onClick={() => addCart(product)}>
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
              src={process.env.PUBLIC_URL + "product/" + product.Product_Image + ".jpg"}
              alt={product.Product_Name}
            />
          </div>
          <div className="quick-view-details">
            <span className="product-name">{product.Product_Name}</span>
            <span className="product-price">
              {numberWithCommas(parseInt(product.Product_NewPrice))}
            </span>
            <p className="product-description">
              {product.Product_Description ?product.Product_Description : "Không có mô tả"}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
