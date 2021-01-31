import React, { useState, useEffect } from "react";
import { Modal, Form, Input, InputNumber, Image, Select } from "antd";

const { Option } = Select;
const { TextArea } = Input;
const ModalForm = ({
  visibleModalEdit,
  onCreateEdit,
  onCancel,
  productModal,
  categories,
}) => {
  const [form] = Form.useForm();
  const [imageBase64, setimageBase64] = useState();

  useEffect(() => {
    setimageBase64(productModal.Product_Image);
    form.setFieldsValue({
      Product_ID: productModal.Product_ID,
      Product_Name: productModal.Product_Name,
      Product_CostPrice: productModal.Product_CostPrice,
      Product_NewPrice: productModal.Product_NewPrice,
      Product_ImageBase: productModal.Product_Image,
      Product_CategorieID: [productModal.Categorie_ID],
    });
  }, [productModal,form]);
 
  return (
    <Modal
      visible={visibleModalEdit}
      title="Sửa Sản Phẩm"  
      okText="Sửa"
      cancelText="Huỷ"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreateEdit(values);
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
        <Form.Item name="Product_CategorieID" label="Danh mục: ">
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

        <Form.Item name="Product_ID" style={{ display: "none" }}>
          <Input type={"hidden"} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalForm;
