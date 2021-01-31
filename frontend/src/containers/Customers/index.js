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
    title: 'Nhóm khách hàng',
    key: 'type',
    dataIndex: 'type',
    align: 'center',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag === 'Khách mới' ? 'geekblue' : 'green';
          if (tag === 'VIP') {
            color = 'volcano';
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
    type: ['Khách mới'],
  },
  {
    id: '2',
    name: 'Jim Green',
    phone: '0123456788',
    type: ['Khách quen'],
  },
  {
    id: '3',
    name: 'Joe Black',
    phone: '0123456788',
    type: ['VIP'],
  },
  {
    id: '4',
    name: 'Disabled User',
    phone: '0123456788',
    type: ['VIP'],
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
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    };
  },
};

const Cusomters = () => {
  return (
    <div className="customer">
      <h3>Khách hàng</h3>
      <div className="w-100 search">
        <InputSearch
          placeholder="Mã khách hàng, tên khách hành"
          onChange={() => {}}
        />
      </div>
      <Table
        style={{ paddingTop: '30px' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="name"
      />
    </div>
  );
};

export default Cusomters;
