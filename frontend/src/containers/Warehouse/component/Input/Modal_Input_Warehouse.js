import React from "react";
import { Modal, Form, Input, InputNumber, DatePicker, Select } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const ModalForm = ({ visible, onCreate, onCancel, idNextGoods }) => {
  const [form] = Form.useForm();

  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  function onChange(value) {
    // console.log("changed", value);
  }

  function onBlur() {}

  function onFocus() {}

  function onSearch(val) {}

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
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
        <Form.Item label="Mã phiếu: ">
          <Input type="text" disabled={true} value={idNextGoods} />
        </Form.Item>
        <Form.Item
          name="Goods_Name"
          label="Tên sản phẩm:"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Goods_Quantity" label="Số lượng: ">
          <InputNumber
            min={1}
            style={{ width: "-webkit-fill-available" }}
            max={100000}
            // defaultValue={1}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item name="Goods_Unit" label="Đơn vị: ">
          <Input />
        </Form.Item>
        <Form.Item name="Goods_SupplierID" label="Nhà cung cấp: ">
          <Select
            showSearch
            // style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value={1004}>Nhà Cung Cấp Mai Anh</Option>
            <Option value={1005}>Nhà Cung Cấp Chín Hưng</Option>
            <Option value={1006}>Nhà Cung Cấp Tạp hóa Mười</Option>
          </Select>
        </Form.Item>
        <Form.Item name="Goods_UnitCost" label="Giá 1 đơn vị: ">
          <InputNumber
            style={{ width: "-webkit-fill-available" }}
            // defaultValue={1000}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        <Form.Item name="Goods_Date" label="RangePicker" {...rangeConfig}>
          <RangePicker style={{ width: "-webkit-fill-available" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalForm;
