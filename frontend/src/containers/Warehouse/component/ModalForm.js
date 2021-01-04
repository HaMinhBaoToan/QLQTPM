import React from "react";
import { Modal, Form, Input, Radio } from "antd";

const ModalForm = ({ visible, onCancel, onCreate, form }) => {
  return (
    <Modal
      visible={visible}
      title="Form within a Modal"
      okText="Submit"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <Form.Item label="Title">
    
        </Form.Item>
        <Form.Item label="Description">
        </Form.Item>
        <Form.Item className="collection-create-form_last-form-item">
         
        </Form.Item>
      </Form>
    </Modal>
  );
};



export default ModalForm;
