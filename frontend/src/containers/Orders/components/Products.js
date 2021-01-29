import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Row } from "antd";
import axios from "axios";


const Products = ({handleAdd}) => {
  const [products, setProducts] = useState([]);
  // const [addProductToCart, setAddProductToCart] = useState([]);
  
  useEffect(() => {
    let url = "http://localhost:4000/api/products";
    axios.get(url).then((response) => {
      // setProducts(response.data);
      console.log(response.data)
      setProducts(sortByKey(response.data, "Product_Name"));
    });
  }, []);
  const sortByKey = (array, key) => {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  return (
      <Row>
      {
      products.map((product) => (
          <CardProduct
          key={product.Product_ID}
          product={product} 
          handleAdd={handleAdd}/>
        ))
      }
      </Row>
  );
};

export default Products;
