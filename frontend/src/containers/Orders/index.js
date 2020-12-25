import React, { Component } from "react";
import axios from "axios";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Products from "./Products";
import "./scss/style.scss";

// const Orders = () => {
//   return (
//     <div>
//       <h1>Orders</h1>
//       <Link to="/">
//         <Button type="primary">Back</Button>
//       </Link>
//     </div>
//   );
// };
// export default Orders;

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url =
      "http://localhost:4000/api/products";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }
  componentWillMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="products loading">
        <Products
          productsList={this.state.products}
        />
        {/* <Link to="/">
          <Button type="primary">Back</Button>
         
        </Link> */}
      </div>
    );
  }
}
export default Orders;
