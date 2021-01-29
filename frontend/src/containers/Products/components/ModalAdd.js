import React, { useState, useEffect } from "react";
import { Modal, Form, Input, InputNumber, Image, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;
const ModalForm = ({
  visible,
  onCreateAdd,
  onCancel,
  categories,
}) => {
  const [form] = Form.useForm();
  const [imageBase64, setimageBase64] = useState();

  return (
    <Modal
      visible={visible}
      title="Thêm Sản Phẩm"  
      okText="Thêm"
      cancelText="Huỷ"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            setimageBase64();
            onCreateAdd(values);
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
        <Form.Item name="Product_CostPrice" label="Giá : "  rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}>
          <InputNumber
            style={{ width: "-webkit-fill-available" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
        
        <Form.Item name="Product_CategorieID" label="Danh mục: "rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}>
          <Select
            showSearch
            placeholder="Chọn danh mục"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {categories.map((item, index) => (
              <Option key={index} value={item.Categorie_ID}>
                {item.Categorie_Name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="Product_Description" label="Mô tả: ">
          <TextArea showCount maxLength={100} />
        </Form.Item>
        <Image width={200} src={imageBase64} />
        <input
          className="inputFile"
          type="file"
          accept="image/jpeg"
          onChange={(e) => {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = function (event) {
              var base64Data = event.target.result;
              setimageBase64(base64Data);
              form.setFieldsValue({
                Product_ImageBase: base64Data,
              });
            };
          }}
        />
        <Form.Item name="Product_ImageBase" style={{ display: "none" }}>
          <Input type={"hidden"} />
        </Form.Item>

       
      </Form>
    </Modal>
  );
};
export default ModalForm;
