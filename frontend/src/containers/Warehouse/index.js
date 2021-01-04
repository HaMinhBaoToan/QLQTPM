import React, { useEffect, useState,useRef } from "react";
import { Row, Col, Table, Button } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import axios from "axios";
import _ from "lodash";
import ModalForm from "./component/ModalForm";
import "./warehouse.scss";
var dateFormat = require("dateformat");

const columns = [
  {
    title: "Mã Phiếu Nhập Kho",
    dataIndex: "Goods_ID",
    width: 250,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_ID - b.Goods_ID,
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
    dataIndex: "Goods_Quantity",
    width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Quantity - b.Goods_Quantity,
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
    dataIndex: "Goods_ImportDate",
  },
  {
    title: "Hạn dùng từ ngày",
    dataIndex: "Goods_FromDate",
    align: "center",
  },
  {
    title: "Hạn dùng đến ngày",
    dataIndex: "Goods_ToDate",
    align: "center",
  },
];

function onChange(pagination, filters, sorter, extra) {
  // console.log('params', pagination, filters, sorter, extra);
}

const Warehouse = () => {
  const refContainer = useRef(null);
  const [listgoods, setListgoods] = useState({});
  const [datatable, setDatatable] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let url = "http://localhost:4000/api/goods";
    axios.get(url).then((response) => {
      const data = [];
      for (let i = 0; i < response.data.length; i++) {
        data.push({
          key: i,
          Goods_ID: response.data[i].Goods_ID,
          Goods_Name: response.data[i].Goods_Name,
          Goods_Quantity: response.data[i].Goods_Quantity,
          Goods_Unit: response.data[i].Goods_Unit,
          Goods_ImportDate: dateFormat(
            response.data[i].Goods_ImportDate,
            "dd-mm-yyyy  ( HH:MM:ss ) "
          ),
          Goods_FromDate: dateFormat(
            response.data[i].Goods_FromDate,
            "dd-mm-yyyy  ( HH:MM:ss ) "
          ),
          Goods_ToDate: dateFormat(
            response.data[i].Goods_ToDate,
            "dd-mm-yyyy  ( HH:MM:ss ) "
          ),
        });
      }
      setDatatable(data);
      // setListgoods(response.data);
    });
  }, []);
  console.log(listgoods);
  console.log(datatable);

  const handleCreate = () => {
    console.log("It won't work");
    const { form } = refContainer.current;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      setVisible(false);
    });
  };

  const saveFormRef = formRef => {
    refContainer.current = formRef;
  };
  return (
    <div className="products loading">
      <Col>
        <Button type="primary" icon={<PlusOutlined />} size="large"   onClick={() => setVisible(true)}>
          Lập phiếu nhập kho
        </Button>

    
      </Col>
      <ModalForm
        visible={visible}
        onCancel={() => setVisible(false)}
        onCreate={() => handleCreate()}
      />
      {/* <Col span={3}>
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Primary Button
        </Button>
      </Col>
      <Col >
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Primary Button
        </Button>
      </Col> */}
      
      <Row style={{paddingTop: "30px"}}>
        <Col>
          <Table
            columns={columns}
            dataSource={datatable}
            onChange={onChange}
            scroll={{ x: 1500 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Warehouse;
