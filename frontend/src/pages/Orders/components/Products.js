import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Row } from "antd";
import axios from "axios";
import { InputSearch } from "../../../components/Input";

const Products = ({ handleAdd }) => {
  const [products, setProducts] = useState([]);
  const [productsTemp, setproductsTemp] = useState([]);

  // const [addProductToCart, setAddProductToCart] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4000/api/products/where";
    axios.get(url).then((response) => {
      // setProducts(response.data);
      setProducts(sortByKey(response.data, "Product_Name"));
      setproductsTemp(sortByKey(response.data, "Product_Name"));
    });
  }, []);
  const sortByKey = (array, key) => {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const txt_Changed = function (e) {
    const temp = products.filter((item) =>
      item.Product_Name.toLowerCase().includes(e.toLowerCase())
    );
    setproductsTemp(temp);
  };
  return (
    <Row>
      <div className="w-100 search" style={{margin:"16px"}}>
        <InputSearch
          placeholder="Mã sản phẩm, tên sản phẩm"
          onChange={(e) => txt_Changed(e)}
        />
      </div>
      {productsTemp.map((product) => (
        <CardProduct
          key={product.Product_ID}
          product={product}
          handleAdd={handleAdd}
        />
      ))}
    </Row>
  );
};

export default Products;
