import React, { useEffect, useState } from "react";
import { Row, Col, Table, Tag, Button } from "antd";
import axios from "axios";
import _ from "lodash";
var dateFormat = require("dateformat");

const columns = [
  {
    title: "Mã Phiếu Nhập Kho",
    dataIndex: "Used_ID",
    width: 250,
    align: "center",
    sorter: {
      compare: (a, b) => a.Used_ID - b.Used_ID,
      multiple: 3,
    },
  },
  {
    title: "Tên Hàng",
    dataIndex: "Goods_Name",
    width: 250,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Name.length - b.Goods_Name.length,
      multiple: 3,
    },
  },
  
  {
    title: "Số lượng",
    dataIndex: "Used_Quantity",
    width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Used_Quantity - b.Used_Quantity,
      multiple: 3,
    },
  },
  {
    title: "Đơn vị",
    dataIndex: "Goods_Unit",
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Unit.length - b.Goods_Unit.length,
      multiple: 3,
    },
  },
  {
    title: "Ngày lập",
    dataIndex: "Used_Date",
    align: "center",
  },
];

function onChange(pagination, filters, sorter, extra) {
  // console.log('params', pagination, filters, sorter, extra);
}
const InputWarehouse = () => {
  const [datatable, setDatatable] = useState([]);
//   const [listgoods, setListgoods] = useState({});

const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  useEffect(() => {
    let url = "http://localhost:4000/api/useds";
    axios.get(url).then((response) => {
      const data = [];
      for (let i = 0; i < response.data.length; i++) {
        data.push({
          key: i,
          Used_ID: response.data[i].Used_ID,
          Goods_Name: response.data[i].Goods_Name,
          Used_Quantity: response.data[i].Used_Quantity,
          Goods_Unit: response.data[i].Goods_Unit,
          Used_Date: dateFormat(
            response.data[i].Used_Date,
            "dd-mm-yyyy"
          ),
        });
      }
      setDatatable(data);
    //   setListgoods(response.data);
    });
  }, []);

 
console.log(datatable);
 
  return (
    <div>

      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Table
            columns={columns}
            dataSource={datatable}
            onChange={onChange}
            scroll={{ x: 1700 }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default InputWarehouse;
