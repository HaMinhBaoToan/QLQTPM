import React from 'react';
import { Table, Tag, Popover, Button } from 'antd';
import Icon, { IconCustom } from '../../components/Icon';
import { InputSearch } from '../../components/Input';
import './styles.scss';

const columns = [
  {
    title: 'Mã KH',
    dataIndex: 'id',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Chức vụ',
    key: 'type',
    dataIndex: 'type',
    align: 'center',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = '';
          switch (tag) {
            case 'Chủ':
              color = 'red';
              break;
            case 'Quản lý':
              color = 'geekblue';
              break;
            case 'Kế toán':
              color = 'orange';
              break;
            default:
              color = 'green';
              break;
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Actions',
    key: 'action',
    align: 'center',
    className: 'actions',
    render: (text, item) => (
      <>
        <Popover
          placement="bottomRight"
          content={
            <div className="my-popover-container">
              <Button
                className="my-btn-no-style my-popover-item"
                onClick={() => {}}
              >
                <Icon component={IconCustom.Edit} className="my-icon-md" />
                Edit
              </Button>
              <Button
                className="my-btn-no-style my-popover-item"
                onClick={() => {}}
              >
                <Icon component={IconCustom.Trash} className="my-icon-md" />
                Remove
              </Button>
            </div>
          }
          trigger="click"
        >
          <Button className="my-btn-no-style btn-icon text-dark-gray">
            <Icon component={IconCustom.MoreHorizontal} />
          </Button>
        </Popover>
      </>
    ),
  },
];
const data = [
  {
    id: '1',
    name: 'John Brown',
    phone: '0123456788',
    email: 'email.com',
    type: ['Chủ'],
  },
  {
    id: '2',
    name: 'Jim Green',
    phone: '0123456788',
    email: 'email.com',
    type: ['Quản lý'],
  },
  {
    id: '3',
    name: 'Joe Black',
    phone: '0123456788',
    email: 'email.com',
    type: ['Kế toán'],
  },
  {
    id: '4',
    name: 'Abc',
    phone: '0123456788',
    email: 'email.com',
    type: ['Nhân viên'],
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => {
    return {
      name: record.name,
    };
  },
};

const Employees = () => {
  return (
    <div className="employees">
      <h3>Nhân viên</h3>
      <div className="w-100 search">
        <InputSearch
          placeholder="Mã nhân viên, tên nhân viên"
          onChange={() => {}}
        />
        <Button type="primary" onClick={() => {}}>
          + Thêm nhân viên
        </Button>
      </div>
      <Table
        style={{ paddingTop: '30px' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="name"
        scroll={{ x: 768 }}
      />
    </div>
  );
};

export default Employees;
