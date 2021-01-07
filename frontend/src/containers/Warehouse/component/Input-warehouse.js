import React, { useEffect, useState } from "react";
import { Row, Col, Table, Tag, Button } from "antd";
import axios from "axios";
import _ from "lodash";
import ModalForm from "./ModalForm";
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
    title: "Ngày lập",
    dataIndex: "Goods_ImportDate",
    align: "center",
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
    key: "Goods_ToDate",

    render: (Goods_ToDate) => (
      <>
        {Goods_ToDate.map((tag) => {
          var arr = _.split(tag, "-");
          var currentTime = new Date();
          var month = currentTime.getMonth() + 1;
          var day = currentTime.getDate();
          var year = currentTime.getFullYear();
          let color = "green";
          // if (parseInt(arr[2]) === year) {
          //   if (parseInt(arr[1]) === month) {
          //     if (Math.abs(arr[0] - day) < 25) {
          //       color = "volcano";
          //     }
          //   }
          // }
          if (parseInt(arr[2]) < year) {
            color = "volcano";
          } else {
            if (parseInt(arr[2]) === year) {
              if (parseInt(arr[1]) === month) {
                if (Math.abs(arr[0] - day) < 25) {
                  color = "gold";
                }
              }
            }
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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
    title: "Tồn Kho",
    dataIndex: "Goods_Inventory",
    align: "center",
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
            "dd-mm-yyyy"
          ),
          Goods_ToDate: [
            dateFormat(response.data[i].Goods_ToDate, "dd-mm-yyyy"),
          ],
          Goods_Inventory:
            response.data[i].Goods_Quantity - response.data[i].Used_Quantity,
        });
      }
      setDatatable(data);
    //   setListgoods(response.data);
    });
  }, []);

 

 
  return (
    <div>

      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Collection
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
