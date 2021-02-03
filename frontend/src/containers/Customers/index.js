import React, { useCallback, useEffect, useState } from 'react';
import { Modal, Table, Popover, Button } from 'antd';
import Icon, { IconCustom } from '../../components/Icon';
import { InputSearch } from '../../components/Input';
import './styles.scss';
import axios from 'axios';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AddEditCustomer from './components/AddEdit';

const { confirm } = Modal;

const Cusomters = () => {

  const [customers, setCustomers] = useState([]);
  const [modalVisible, setModalVisible] = useState({visible: false, isCreate: true});
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [search, setSearch] = useState('');

  const getCustomers = useCallback(() => {
    let url = "http://localhost:4000/api/users";
    axios.get(url, {params: {role: 'Customer', search}}).then(({data}) => {
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
        setCustomers(result);
    });
  }, [search]);

  useEffect(() => {
    getCustomers();
  }, [search, getCustomers]);

  const changeVisibleModal = (value) => {
    setModalVisible({...modalVisible, visible: value});
  };

  const updateCustomers = (data) => {
    if(modalVisible.isCreate) {
      setCustomers([...customers, data]);
    } else {
      const filter = customers.filter((obj) => obj.User_ID !== data.User_ID);
      setCustomers([...filter, data]);
    }
    changeVisibleModal(false);
  };

  const handleDeleteEmployee = (id) => {
    const URL = `http://localhost:4000/api/users/${id}`;
    axios
      .delete(URL)
      .then(() => {
        const data = customers.filter((obj) => obj.User_ID !== id);
        setTimeout(() =>  setCustomers(data), 50);
      })
      .catch(function (error) {
        console.log('ERROR from server:', error);
      });
  };

  const showConfirmDelete = (id) => {
    confirm({
      title: 'Bạn có muốn xóa khách hàng này không ?',
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
      title: 'Tên khách hàng',
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
                    setCurrentCustomer(item)
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
    <div className="customer">
      <h3>Khách hàng</h3>
      <div className="w-100 search">
        <InputSearch
          placeholder="Mã khách hàng, tên khách hàng"
          onChange={setSearch}
        />
        <Button type="primary" onClick={() => setModalVisible({visible: true, isCreate: true})}>
          + Thêm khách hàng
        </Button>
      </div>
      <Table
        style={{ paddingTop: '30px' }}
        columns={columns}
        dataSource={customers}
        scroll={{ x: 768 }}
        rowKey="User_ID"
      />
      <AddEditCustomer
        modalVisible={modalVisible}
        handleCancel={() => changeVisibleModal(false)}
        updateCustomers={updateCustomers}
        currentCustomer={currentCustomer}
      />
    </div>
  );
};

export default Cusomters;
