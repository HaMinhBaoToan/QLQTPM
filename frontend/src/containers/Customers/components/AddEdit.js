/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import axios from 'axios';

export const ROLES = {
  1: 'Khách mới',
  2: 'Khách thân thiết',
  3: 'Khách VIP',
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddEditCustomer = ({
  modalVisible,
  handleCancel,
  updateCustomers,
  currentCustomer,
}) => {
  const { visible, isCreate } = modalVisible;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(currentCustomer);
  }, [form, currentCustomer]);

  const onFinish = (values) => {
    const rs = {...values, User_Role: 4};
    const body = { ...rs, User_ID: currentCustomer.User_ID };

    let url = 'http://localhost:4000/api/users';
    const axiosMethod = isCreate
      ? axios.post(url, rs)
      : axios.put(url, body);
    axiosMethod.then(({ data }) => {
      updateCustomers(data);
    });
  };

  return (
    <Modal
      title={`${isCreate ? 'Thêm' : 'Cập nhật'} khách hàng`}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        preserve={false}
        form={form}
      >
        <Form.Item
          name="User_FullName"
          label="Họ và tên:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="User_Mobile"
          label="Số điện thoại:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="User_Name"
          label="Tên đăng nhập"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="User_Email"
          label="Email"
          rules={[
            {
              type: 'email',
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="default" htmlType="submit" style={{ marginRight: 16 }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {isCreate ? 'Tạo mới' : 'Cập nhật'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditCustomer;
