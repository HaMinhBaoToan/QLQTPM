import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Table, Button } from "antd";
import axios from "axios";
import ModalForm from "./Modal_Output_Warehouse";

var dateFormat = require("dateformat");

const columns = [
  {
    title: "Mã",
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
    width: 0,
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

const OutputWarehouse = () => {

  const [datatableOut, setDatatableOut] = useState([]);
  const [visible, setVisible] = useState(false);
  const APIgetAllUsed = () => {
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
            "dd-mm-yyyy   ( HH:MM:ss ) "
          ),
        });
      }
      setDatatableOut(data);
    });
  };

  useEffect(() => {
    APIgetAllUsed();
  }, []);
  const onCreate = (values) => {};

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Lập phiếu xuất kho
      </Button>
      <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Table
            columns={columns}
            dataSource={datatableOut}
            scroll={{ x: 1700 }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default OutputWarehouse;
