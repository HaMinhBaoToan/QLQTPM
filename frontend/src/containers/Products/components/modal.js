import React, { useContext, useState } from "react";
import { Modal, Form, Input, InputNumber, DatePicker, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;
const ModalForm = ({ visible, onCreate, onCancel, productModal }) => {
  const [form] = Form.useForm();
  console.log(productModal);
  form.setFieldsValue({
    Product_Name: productModal.Product_Name,
    Product_CostPrice: productModal.Product_CostPrice,
    Product_NewPrice: productModal.Product_NewPrice,
  });
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Sửa"
      cancelText="Huỷ"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="Product_Name"
          label="Tên Sản Phẩm: "
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item name="Product_CostPrice" label="Giá gốc: ">
          <InputNumber
            disabled={true}
            style={{ width: "-webkit-fill-available" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Form.Item
          name="Product_NewPrice"
          label="Giá mới: "
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <InputNumber
            style={{ width: "-webkit-fill-available" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Form.Item name="Product_Description" label="Mô tả: ">
          <TextArea showCount maxLength={100} />
        </Form.Item>
        Product_Image
      </Form>
    </Modal>
  );
};
export default ModalForm;
