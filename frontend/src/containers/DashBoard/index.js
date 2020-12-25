import React from "react";
import {
  Link,
} from "react-router-dom";
import { Button } from 'antd';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <Link to="/orders">
        <Button type="primary">Order</Button>
      </Link>
    </div>
  );
};

export default Dashboard;