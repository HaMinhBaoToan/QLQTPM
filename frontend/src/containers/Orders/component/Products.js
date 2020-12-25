import React, { Component } from "react";
import CardProduct from "./CardProduct";
import { Row } from "antd";
import logo from "../../../assets/images/latte.png";

class Products extends Component {
  render() {
    let productsData;

    function sortByKey(array, key) {
      return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    productsData= sortByKey(this.props.productsList, "Product_Name");
    productsData = productsData.map((product) => {
      return (
        <CardProduct
          key={product.Product_ID}
          price={product.Product_NewPrice}
          name={product.Product_Name}
          image={logo}
          id={product.Product_ID}
          addToCart={this.props.addToCart}
          productQuantity={this.props.productQuantity}
          updateQuantity={this.props.updateQuantity}
          openModal={this.props.openModal}
        />
      );
    });

    // Empty and Loading States
    let view = <Row gutter={16}>{productsData}</Row>;
    return <div className="site-card-wrapper">{view}</div>;
  }
}

export default Products;
