import React, { useEffect, useState } from 'react';
import { Modal, Table, Tag, Popover, Button } from 'antd';
import Icon, { IconCustom } from '../../components/Icon';
import { InputSearch } from '../../components/Input';
import axios from 'axios';
import './styles.scss';
import AddEmployee from './components/AddEdit';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const ROLES = {
  1: 'Owner',
  2: 'Manager',
  3: 'Employee',
  4: 'Customer',
  5: 'Accountant',
};

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
      User_ID: record.User_ID,
    };
  },
};

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [modalVisible, setModalVisible] = useState({visible: false, isCreate: true});
  const [currentEmployee, setCurrentEmployee] = useState({});

  const getEmployees = () => {
    let url = 'http://localhost:4000/api/users';
    axios
      .get(url, {
        params: {
          role: ['Owner', 'Manager', 'Employee', 'Accountant'].join(','),
        },
      })
      .then(({ data }) => {
        const result = [];
        data.forEach((element) => {
          result.push({
            User_ID: element.User_ID,
            User_FullName: element.User_FullName,
            User_Email: element.User_Email,
            User_Mobile: element.User_Mobile,
            User_Role: element.User_Role,
            User_Name: element.User_Name
          });
        });
        setEmployees(result);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const changeVisibleModal = (value) => {
    setModalVisible({...modalVisible, visible: value});
  };

  const updateEmployees = (data) => {
    if(modalVisible.isCreate) {
      setEmployees([...employees, data]);
    } else {
      const filter = employees.filter((obj) => obj.User_ID !== data.User_ID);
      setEmployees([...filter, data]);
    }
    changeVisibleModal(false);
  };

  const handleDeleteEmployee = (id) => {
    const URL = `http://localhost:4000/api/users/${id}`;
    axios
      .delete(URL)
      .then(() => {
        const data = employees.filter((obj) => obj.User_ID !== id);
        setTimeout(() =>  setEmployees(data), 50);
      })
      .catch(function (error) {
        console.log('ERROR from server:', error);
      });
  };

  const showConfirmDelete = (id) => {
    confirm({
      title: 'Bạn có muốn xóa nhân viên này không ?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk() {
        handleDeleteEmployee(id);
      }
    });
  }

  const columns = [
    {
      title: 'Mã NV',
      dataIndex: 'User_ID',
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'User_FullName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'User_Mobile',
    },
    {
      title: 'Email',
      dataIndex: 'User_Email',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'User_Role',
      align: 'center',
      render: (value) => {
        const tag = ROLES[value] || '';
        let color = '';
        switch (tag) {
          case 'Owner':
            color = 'red';
            break;
          case 'Manager':
            color = 'geekblue';
            break;
          case 'Accountant':
            color = 'orange';
            break;
          case 'Customer':
            color = 'pink';
            break;
          default:
            color = 'green';
            break;
        }
        return (
          <span>
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          </span>
        );
      },
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
                  onClick={() => {
                    setModalVisible({visible: true, isCreate: false});
                    setCurrentEmployee(item)
                  }}
                >
                  <Icon component={IconCustom.Edit} className="my-icon-md" />
                  Edit
                </Button>
                <Button
                  className="my-btn-no-style my-popover-item"
                  onClick={() => showConfirmDelete(item.User_ID)}
                >
                  <Icon component={IconCustom.Trash} className="my-icon-md" />
                  Remove
                </Button>
              </div>
            }
            trigger="focus"
          >
            <Button className="my-btn-no-style btn-icon text-dark-gray">
              <Icon component={IconCustom.MoreHorizontal} />
            </Button>
          </Popover>
        </>
      ),
    },
  ];

  return (
    <div className="employees">
      <h3>Nhân viên</h3>
      <div className="w-100 search">
        <InputSearch
          placeholder="Mã nhân viên, tên nhân viên"
          onChange={() => {}}
        />
        <Button type="primary" onClick={() => setModalVisible({visible: true, isCreate: true})}>
          + Thêm nhân viên
        </Button>
      </div>
      <Table
        style={{ paddingTop: '30px' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={employees}
        rowKey="User_ID"
        scroll={{ x: 768 }}
      />
      <AddEmployee
        modalVisible={modalVisible}
        handleCancel={() => changeVisibleModal(false)}
        updateEmployees={updateEmployees}
        currentEmployee={currentEmployee}
      />
    </div>
  );
};

export default Employees;
