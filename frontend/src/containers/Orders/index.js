import React from "react";
import { Button } from "antd";

import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div>
      <h1>Orders</h1>
      <Link to="/">
        <Button type="primary">Back</Button>
      </Link>
    </div>
  );
};

export default Orders;
