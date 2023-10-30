import React from "react";
import { Modal, Form, Input } from "antd";
const { TextArea } = Input;
const ModalForm = ({ visibleModalAdd, onCreateAdd, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visibleModalAdd}
      title="Thêm danh mục"
      okText="Thêm"
      cancelText="Huỷ"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
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
          name="Categorie_Name"
          label="Tên danh mục: "
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item name="Categorie_Description" label="Mô tả: ">
          <TextArea showCount maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalForm;
