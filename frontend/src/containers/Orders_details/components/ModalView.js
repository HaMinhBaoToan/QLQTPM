import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Table } from "antd";
import axios from "axios";
import { formatNumber } from "../../../utils/index";
import _ from "lodash";
const ModalForm = ({ visibleModalView, onCreate, onCancel, orderModal }) => {
  const [form] = Form.useForm();
  const [datatable, setDatatable] = useState([]);

  useEffect(() => {
    let url = `http://localhost:4000/api/orders/${orderModal.Order_ID}/details`;
    axios.get(url).then((response) => {
      var temp = response.data;
      if (Array.isArray(temp)) {
        var result = temp.map((item, index) => ({ ...item, key: index }));
        console.log(result);
        setDatatable(result);
      }
    });
  }, [orderModal]);
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "Product_Image",
      width: 250,
      align: "center",
      render: (Product_Image) => (
        <div key={Product_Image}>
          <img style={{ height: "50px" }} src={Product_Image} alt={""} />
        </div>
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "Product_Name",
      width: 150,
      align: "center",
      sorter: {
        compare: (a, b) => a.Product_Name - b.Product_Name,
        multiple: 3,
      },
    },
    {
      title: "Số lượng",
      dataIndex: "Quantity",
      width: 250,
      align: "center",
    },
    {
      title: "Giá / Đơn vị",
      dataIndex: "Product_NewPrice",
      width: 250,
      align: "center",
      sorter: {
        compare: (a, b) => a.Order_ID - b.Order_ID,
        multiple: 3,
      },
      render: (Product_NewPrice) => (
        <>{formatNumber(Product_NewPrice) + " đ"}</>
      ),
    },
    {
      title: "Giá",
      dataIndex: "Product_Price",
      width: 250,
      align: "center",
      sorter: {
        compare: (a, b) => a.Order_ID - b.Order_ID,
        multiple: 3,
      },
      render: (Product_Price, Order) => (
        <>{formatNumber(Order.Quantity * Order.Product_NewPrice) + " đ"}</>
      ),
    },
    {
      title: " ",
    },
  ];
  return (
    <Modal
      visible={visibleModalView}
      title="Xem chi tiết đơn hàng"
      okText="Sửa"
      cancelText="Huỷ"
      onCancel={onCancel}
      width={1000}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Table
        size="small"
        columns={columns}
        dataSource={datatable}
        scroll={{ x: 768 }}
      />
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      ></Form>
    </Modal>
  );
};
export default ModalForm;
