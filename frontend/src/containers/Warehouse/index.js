import React from "react";
import { Tabs } from "antd";
// import axios from "axios";
// import _ from "lodash";
import InputWarehouse from './component/Input-warehouse';
import UsedsWarehouse from './component/Used-warehouse';

import "./warehouse.scss";
// var dateFormat = require("dateformat");
const { TabPane } = Tabs;


const Warehouse = () => {
 
  return (
    <div className="products loading">
      <Tabs type="card">
        <TabPane tab="Nhập kho" key="1">
          <InputWarehouse />
        </TabPane>
    
       <TabPane tab="Dùng Nguyên Liệu" key="2">
          <UsedsWarehouse/>
        </TabPane>
        <TabPane tab="Tab Title 3" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Warehouse;
