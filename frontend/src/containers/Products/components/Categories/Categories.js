import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Table, Button, notification } from "antd";
import {
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

var dateFormat = require("dateformat");

const columns = [
  {
    title: "Mã danh mục",
    dataIndex: "Categorie_ID",
    width: 250,
    align: "center",
    sorter: {
      compare: (a, b) => a.Categorie_ID - b.Categorie_ID,
      multiple: 3,
    },
  },
  {
    title: "Tên danh mục",
    dataIndex: "Categorie_Name",
    width: 250,
    align: "center",
    sorter: {
      compare: (a, b) => a.Categorie_Name.length - b.Categorie_Name.length,
      multiple: 3,
    },
  },

  {
    title: "Ẩn/Hiện danh mục",
    dataIndex: "Categorie_IsActive",
    width: 200,
    align: "center",
    render: (Categorie_IsActive, Product) => (
      <>
        {Categorie_IsActive ? (
          <Button
            type="primary"
            shape="circle"
            //   onClick={() => handleProduct(Product, false, true, false)}
            icon={<EyeOutlined />}
          />
        ) : (
          <Button
            type="dashed"
            shape="circle"
            //   onClick={() => handleProduct(Product, true, false, false)}
            icon={<EyeInvisibleOutlined />}
          />
        )}
      </>
    ),
  },

  {
    title: "Cập nhật lần cuối",
    dataIndex: "Categorie_UpdateDate",
    align: "center",
  },
  {
    title: "Cập nhật bởi",
    dataIndex: "User_Name",
    align: "center",
  },
];

const Categories = () => {
  //   const { APIgetAllProduct } = useContext(WarehouseContext);

  const [datatableOut, setDatatableOut] = useState([]);
  const [visible, setVisible] = useState(false);
  const APIgetAllUsed = () => {
    let url = "http://localhost:4000/api/categories";
    axios.get(url).then((response) => {
      const data = [];
      for (let i = response.data.length - 1; i >= 0; i--) {
        data.push({
          key: i,
          Categorie_ID: response.data[i].Categorie_ID,
          Categorie_Name: `${response.data[i].Categorie_Name}`,
          Categorie_IsActive: response.data[i].Categorie_IsActive,
          Categorie_UpdateDate: dateFormat(
            response.data[i].Categorie_UpdateDate,
            "dd-mm-yyyy   ( HH:MM:ss ) "
          ),
          User_Name: response.data[i].User_Name,
        });
      }
      setDatatableOut(data);
    });
  };

  useEffect(() => {
    APIgetAllUsed();
  }, []);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Hoàn Tất",
      description: `Bạn vừa xuất kho thành công đơn hàng`,
    });
  };
  const onCreate = (values) => {
    // console.log(values);
    const used = {
      Used_Goods_ID: values.Goods_ID,
      Used_Quantity: values.Used_Quantity,
      Used_CreateDate: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    };

    axios
      .post(`http://localhost:4000/api/useds/`, used)
      .then((response) => {
        // APIgetAllProduct();
        openNotificationWithIcon("success");
        APIgetAllUsed();
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
    setVisible(false);
  };

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
      {/* <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      /> */}
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Table
            size="small"
            columns={columns}
            dataSource={datatableOut}
            scroll={{ x: 1700 }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default Categories;
