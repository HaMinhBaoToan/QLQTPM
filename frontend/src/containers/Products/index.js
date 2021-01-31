import React, { useEffect, useState } from 'react';
import { Tabs, Table, Button, Popover } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { formatNumber } from '../../utils/index';
import ModalForm from './components/modal';
import { InputSearch } from '../../components/Input';
import './styles.scss';
import Icon, { IconCustom } from '../../components/Icon';

const { TabPane } = Tabs;

const Products = () => {
  const [datatable, setDatatable] = useState([]);
  const [datatableTemp, setDatatableTemp] = useState([]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'Product_ID',
      width: 100,
      align: 'center',
      sorter: {
        compare: (a, b) => a.Product_ID - b.Product_ID,
        multiple: 3,
      },
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'Product_Image',
      width: 200,
      align: 'center',

      render: (Product_Image) => (
        <div key={Product_Image}>
          <img
            style={{ height: '49px' }}
            src={`${process.env.PUBLIC_URL}product/${Product_Image}.jpg`}
            alt={Product_Image}
          />
        </div>
      ),
    },
    {
      title: 'Tên Hàng',
      dataIndex: 'Product_Name',
      width: 200,
      align: 'center',
      sorter: {
        compare: (a, b) => a.Product_Name.length - b.Product_Name.length,
        multiple: 3,
      },
    },
    {
      title: 'Ẩn/Hiện',
      dataIndex: 'Product_IsActive',
      width: 200,
      align: 'center',
      key: 'Product_IsActive',

      render: (Product_IsActive, Product) => (
        <>
          {Product_IsActive ? (
            <Button
              type="primary"
              shape="circle"
              onClick={() => handleProduct(Product, false, true, false)}
              icon={<EyeOutlined />}
            />
          ) : (
            <Button
              type="dashed"
              shape="circle"
              onClick={() => handleProduct(Product, true, false, false)}
              icon={<EyeInvisibleOutlined />}
            />
          )}
        </>
      ),
    },

    {
      title: 'Giá gốc',
      dataIndex: 'Product_CostPriceString',
      align: 'center',
    },
    {
      title: 'Giá mới',
      dataIndex: 'Product_NewPriceString',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'Product_Edit',
      align: 'center',
      key: 'Product_Edit',
      className: 'actions',
      render: (Product_Edit, Product) => (
        <>
          <Popover
            placement="bottomRight"
            content={
              <div className="my-popover-container">
                <Button
                  className="my-btn-no-style my-popover-item"
                  onClick={() => {
                    setVisible(true);
                    setProductModal(Product);
                  }}
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

  const handleProduct = (Product, setEnable, setDisable, upDateProduct) => {
    const URL = `http://localhost:4000/api/products/${Product.Product_ID}`;
    if (setEnable === true) {
      axios
        .put(URL, {
          ...Product,
          Product_IsActive: 1,
        })
        .then((response) => {
          APIgetAllProduct();
        })
        .catch(function (error) {
          console.log('ERROR from server:', error);
        });
    }
    if (setDisable === true) {
      axios
        .put(URL, {
          ...Product,
          Product_IsActive: 0,
        })
        .then((response) => {
          APIgetAllProduct();
        })
        .catch(function (error) {
          console.log('ERROR from server:', error);
        });
    }
    if (upDateProduct === true) {
      // axios
      //   .put(URL, {
      //     ...Product,
      //     Product_Name: 0,
      //   })
      //   .then((response) => {
      //     APIgetAllProduct();
      //   })
      //   .catch(function (error) {
      //     console.log("ERROR from server:", error);
      //   });
    }

    // setDatatableTemp(
    //   datatableTemp.map((item) =>
    //     item.Product_ID === Product.Product_ID
    //       ? { ...item, Product_IsActive: 1 }
    //       : item
    //   )
    // );
  };

  useEffect(() => {
    APIgetAllProduct();
  }, []);
  //  useEffect(() => {

  //   }, [datatableTemp]);
  const APIgetAllProduct = () => {
    let url = 'http://localhost:4000/api/products';
    axios.get(url).then((response) => {
      const data = [];

      for (let i = response.data.length - 1; i >= 0; i--) {
        data.push({
          key: i,
          Product_ID: response.data[i].Product_ID,
          Product_Name: response.data[i].Product_Name,
          Product_Image: response.data[i].Product_Image,
          Product_IsActive: response.data[i].Product_IsActive.data[0],
          Product_CostPrice: response.data[i].Product_CostPrice,
          Product_NewPrice: response.data[i].Product_NewPrice,
          Product_CostPriceString: `${formatNumber(
            response.data[i].Product_CostPrice
          )} đ`,
          Product_NewPriceString: `${formatNumber(
            response.data[i].Product_NewPrice
          )} đ`,
          Product_Description: response.data[i].Product_Description,
          Product_CreatedDate: response.data[i].Product_CreatedDate,
        });
      }
      //   console.log(response.data);
      setDatatable(data);
      setDatatableTemp(data);
    });
  };
  const [visible, setVisible] = useState(false);
  const [productModal, setProductModal] = useState({});

  const onCreate = (values) => {};
  return (
    <div className="product-container">
      <Tabs type="card">
        <TabPane tab="Sản Phẩm" key="1">
          <div className="w-100 search">
            <InputSearch
              placeholder="Mã sản phẩm, tên sản phẩm"
              onChange={() => {}}
            />
          </div>
          <Table
            style={{ paddingTop: '30px' }}
            size="small"
            columns={columns}
            dataSource={datatableTemp}
            scroll={{ x: 768 }}
          />
        </TabPane>
        <TabPane tab="Nhập kho" key="2">
          qeqeewqqwe123123
        </TabPane>
      </Tabs>
      <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        productModal={productModal}
      />
    </div>
  );
};

export default Products;
