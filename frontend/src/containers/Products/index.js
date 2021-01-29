import React, { useEffect, useState } from "react";
import {
  Tabs,
  Input,
  Row,
  Col,
  Table,
  Button,
  notification,
  Modal,
} from "antd";
import {
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { formatNumber } from "../../utils/index";
import ModalEdit from "./components/ModalEdit";
import ModalAdd from "./components/ModalAdd";
var dateFormat = require("dateformat");

// var dateFormat = require("dateformat");

const { TabPane } = Tabs;
const { Search } = Input;
const { confirm } = Modal;
const Products = () => {
  const [datatable, setDatatable] = useState([]);
  const [datatableTemp, setDatatableTemp] = useState([]);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalAdd, setVisibleModalAdd] = useState(false);

  const [productModal, setProductModal] = useState({});
  const [categories, setCategories] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "Product_ID",
      width: 100,
      align: "center",
      sorter: {
        compare: (a, b) => a.Product_ID - b.Product_ID,
        multiple: 3,
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "Product_Image",
      width: 200,
      align: "center",

      render: (Product_Image) => (
        <div key={Product_Image}>
          <img style={{ height: "49px" }} src={Product_Image} alt={""} />
        </div>
      ),
    },
    {
      title: "Tên Hàng",
      dataIndex: "Product_Name",
      width: 200,
      align: "center",
      sorter: {
        compare: (a, b) => a.Product_Name.length - b.Product_Name.length,
        multiple: 3,
      },
    },
    {
      title: "Giá gốc",
      dataIndex: "Product_CostPriceString",
      width: 100,
      align: "center",
    },
    {
      title: "Giá mới",
      dataIndex: "Product_NewPriceString",
      width: 100,
      align: "center",
    },
    {
      title: "Danh mục",
      dataIndex: "Categorie_Name",
      width: 100,
      align: "center",
      sorter: {
        compare: (a, b) => a.Categorie_Name.length - b.Categorie_Name.length,
        multiple: 3,
      },
    },
    {
      title: "Ẩn/Hiện",
      dataIndex: "Product_IsActive",
      width: 200,
      align: "center",
      key: "Product_IsActive",

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
      title: "Sửa",
      dataIndex: "Product_Edit",
      align: "center",
      key: "Product_Edit",
      width: 100,

      render: (Product_Edit, Product) => (
        <Button
          style={{ background: "#faad14", fontWeight: "bold" }}
          onClick={() => {
            setVisibleModalEdit(true);
            setProductModal(Product);
          }}
          icon={<EditOutlined />}
        />
      ),
    },
    {
      title: "Xoá",
      dataIndex: "Product_Delete",
      align: "center",
      width: 100,

      render: (Product_Delete, Product) => (
        <Button
          style={{ background: "#ff4d4f", fontWeight: "bold" }}
          onClick={() => showDeleteConfirm(Product)}
          icon={<DeleteOutlined />}
        />
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
          console.log("ERROR from server:", error);
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
          console.log("ERROR from server:", error);
        });
    }
    if (upDateProduct === true) {
      // console.log(upDateProduct,Product.Product_CategorieID[0])
      // Product_CategorieID: Product.Product_CategorieID[0],
      var Product_CategorieID_temp = 0;
      if (Product.Product_CategorieID[0]) {
        Product_CategorieID_temp = Product.Product_CategorieID[0];
      } else {
        Product_CategorieID_temp = Product.Product_CategorieID;
      }
      axios
        .put(URL, {
          ...Product,
          Product_Name: Product.Product_Name,
          Product_Image: Product.Product_ImageBase,
          Product_Description: Product.Product_Description,
          Product_NewPrice: Product.Product_NewPrice,
          Product_CategorieID: Product_CategorieID_temp,
        })
        .then((response) => {
          APIgetAllProduct();
          openNotificationWithIcon("success", `Bạn sửa thành công`);
          console.log(response);
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }

    // setDatatableTemp(
    //   datatableTemp.map((item) =>
    //     item.Product_ID === Product.Product_ID
    //       ? { ...item, Product_IsActive: 1 }
    //       : item
    //   )
    // );
  };
  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: "Hoàn Tất",
      description: message,
    });
  };
  useEffect(() => {
    APIgetAllProduct();
    let url = "http://localhost:4000/api/categories";
    axios.get(url).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const APIgetAllProduct = () => {
    let url = "http://localhost:4000/api/products";
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
          Categorie_Name: response.data[i].Categorie_Name,
          Categorie_ID: response.data[i].Categorie_ID,
        });
      }
      //   console.log(response.data);
      setDatatable(data);
      setDatatableTemp(data);
    });
  };
  function showDeleteConfirm(product) {
    console.log(product);
    confirm({
      title: `Bạn có chắc muốn xoá món ${product.Product_Name} ?`,
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        const URL = `http://localhost:4000/api/products/${product.Product_ID}`;
        axios
          .delete(URL)
          .then((response) => {
            APIgetAllProduct();
            openNotificationWithIcon("success", "bạn đã xoá thành công");
            console.log(response);
          })
          .catch(function (error) {
            console.log("ERROR from server:", error);
          });
        console.log("OK");
      },
      onCancel() {},
    });
  }

  const onCreateEdit = (values) => {
    handleProduct(values, false, false, true);
    setVisibleModalEdit(false);
  };
  const onCreateAdd = (values) => {
    values.Product_CreatedDate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    values.Product_CreatedByUserID = 1;
    values.Product_NewPrice = values.Product_OldPrice=values.Product_CostPrice;
    values.Product_Image =  values.Product_ImageBase ;
delete values.Product_ImageBase;
    console.log(values)
    const URL = `http://localhost:4000/api/products/`;
    axios
      .post(URL,values)
      .then((response) => {
        APIgetAllProduct();
        openNotificationWithIcon("success", "bạn thêm thành công");
    setVisibleModalAdd(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
  };
  const txt_Changed = function (e) {
    const temp = datatable.filter((item) =>
      item.Product_Name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDatatableTemp(temp);
  };
  return (
    <>
      <Tabs type="card">
        <TabPane tab="Sản Phẩm" key="1">
          <div className="w-100 ">
            <div className="w-50 m-auto">
              <Search
                placeholder="input search text"
                onChange={txt_Changed}
                enterButton
                allowClear
              />
            </div>
          </div>
          <Button
            className="mt-4"
            type="primary"
            onClick={() => {
              setVisibleModalAdd(true);
            }}
          >
            + Thêm món ăn
          </Button>
          <ModalAdd
            visible={visibleModalAdd}
            onCreateAdd={onCreateAdd}
            onCancel={() => {
              setVisibleModalAdd(false);
            }}
            categories={categories}
          />
          <Row style={{ paddingTop: "30px" }}>
            <Col>
              <Table
                size="small"
                columns={columns}
                dataSource={datatableTemp}
                scroll={{ x: 1680 }}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Nhập kho" key="2">
          qeqeewqqwe123123
        </TabPane>
      </Tabs>
      <ModalEdit
        visibleModalEdit={visibleModalEdit}
        onCreateEdit={onCreateEdit}
        onCancel={() => {
          setVisibleModalEdit(false);
        }}
        productModal={productModal}
        categories={categories}
      />
    </>
  );
};

export default Products;
