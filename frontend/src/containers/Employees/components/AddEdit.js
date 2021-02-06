/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

export const ROLES = {
  2: 'Manager',
  3: 'Employee',
  5: 'Accountant',
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

const AddEditEmployee = ({ modalVisible, handleCancel, updateEmployees, currentEmployee }) => {
  const {visible, isCreate} = modalVisible;
  const [form] = Form.useForm(null);

  useEffect(() => {
  console.log('vo day ne', currentEmployee);

    form.setFieldsValue(currentEmployee);
  }, [form, currentEmployee]);

  const onChangeRole = (value) => {
    form.setFieldsValue({
      User_Role: value,
    });
  };

  const onFinish = (values) => {
    const body = {...values, User_ID: currentEmployee.User_ID}

    let url = 'http://localhost:4000/api/users';
    const axiosMethod = isCreate
      ? axios.post(url, values)
      : axios.put(url, body);
    axiosMethod.then(({ data }) => {
      updateEmployees(data);
    });
  };

  return (
    <Modal
      title={`${isCreate ? 'Thêm': 'Cập nhật'} nhân viên`}
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
          name='User_FullName'
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
          name='User_Mobile'
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
          name='User_Name'
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
          name='User_Role'
          label="Chức vụ"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            value="3"
            style={{ width: 160 }}
            onChange={onChangeRole}
          >
            {Object.keys(ROLES).map((i) => (
              <Option key={i} value={i}>{ROLES[i]}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name='User_Email'
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
          <Button type="default" htmlType="submit" style={{marginRight: 16}}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {isCreate ? 'Tạo mới': 'Cập nhật'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEditEmployee;
