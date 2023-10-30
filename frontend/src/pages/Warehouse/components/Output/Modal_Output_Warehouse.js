import React, { useContext, useState } from "react";
import { Modal, Form, Input, InputNumber,  Select } from "antd";
import { WarehouseContext } from "../../../../utils/AppContext";

// const { RangePicker } = DatePicker;
const { Option } = Select;

const ModalForm = ({ visible, onCreate, onCancel }) => {
  const { datatable } = useContext(WarehouseContext);
  // console.log(datatable);
  const [goods, setgoods] = useState({});
  const [form] = Form.useForm();

  const onChange = (value) => {
    // console.log("changed", value);
    const temp = datatable.find(function (idx) {
      return idx.Goods_ID === value;
    });
    setgoods(temp);
    form.setFieldsValue({
      Goods_ID: temp.Goods_ID,
      Goods_Inventory: temp.Goods_Inventory,
      Goods_Unit: temp.Goods_Unit,
    });
  };
  // const onChangeQuantity = (value) => {
  //   console.log("changed", value);
  //   if(value <= )
  // };

  // console.log(goods);

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
        <Form.Item
          name="Goods_Name"
          label="Tên Sản Phẩm: "
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Select
            showSearch
            // style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {datatable.map((item, index) => {
              return (
                <Option key={index} value={item.Goods_ID}>
                  {item.Goods_Name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name="Goods_ID" label="Mã hàng: ">
          <Input type="text" disabled={true} />
        </Form.Item>

        <Form.Item name="Goods_Inventory" label="Số lượng tồn: ">
          <InputNumber
            style={{ width: "-webkit-fill-available" }}
            disabled={true}
          />
        </Form.Item>
        <Form.Item
          name="Used_Quantity"
          label="Số lượng xuất: "
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <InputNumber
            min={1}
            max={goods.Goods_Inventory}
            style={{ width: "-webkit-fill-available" }}
            />
        </Form.Item>

        <Form.Item name="Goods_Unit" label="Đơn vị: ">
          <Input disabled={true} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalForm;
