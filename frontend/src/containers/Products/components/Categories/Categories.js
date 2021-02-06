import React, { useEffect, useState } from "react";
import { Table, Button, notification, Modal } from "antd";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import ModalEdit from "./ModalEdit";
import ModalAdd from "./ModalAdd";
import axios from "axios";

var dateFormat = require("dateformat");
const { confirm } = Modal;

const Categories = () => {
  const [datatableOut, setDatatableOut] = useState([]);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalAdd, setVisibleModalAdd] = useState(false);

  const columns = [
    {
      title: "Mã danh mục",
      dataIndex: "Categorie_ID",
      width: 200,
      align: "center",
      sorter: {
        compare: (a, b) => a.Categorie_ID - b.Categorie_ID,
        multiple: 3,
      },
    },
    {
      title: "Tên danh mục",
      dataIndex: "Categorie_Name",
      width: 200,
      align: "center",
      sorter: {
        compare: (a, b) => a.Categorie_Name.length - b.Categorie_Name.length,
        multiple: 3,
      },
    },
    {
      title: "Cập nhật lần cuối",
      dataIndex: "Categorie_UpdateDate",
      width: 200,
      align: "center",
    },
    {
      title: "Cập nhật bởi",
      dataIndex: "User_FullName",
      align: "center",
      width: 100,
    },
    {
      title: "Ẩn/Hiện danh mục",
      dataIndex: "Categorie_IsActive",
      width: 100,
      align: "center",
      render: (Categorie_IsActive, Categories) => (
        <>
          {Categorie_IsActive ? (
            <Button
              type="primary"
              shape="circle"
              onClick={() => handleCategories(Categories, false, true, false)}
              icon={<EyeOutlined />}
            />
          ) : (
            <Button
              type="dashed"
              shape="circle"
              onClick={() => handleCategories(Categories, true, false, false)}
              icon={<EyeInvisibleOutlined />}
            />
          )}
        </>
      ),
    },

    {
      title: "Xoá",
      width: 100,
      dataIndex: "Categorie_Delete",
      align: "center",
      render: (Categorie_Delete, Categories) => (
        <Button
          style={{ background: "#ff4d4f", fontWeight: "bold" }}
          onClick={() => showDeleteConfirm(Categories)}
          icon={<DeleteOutlined />}
        />
      ),
    },
  ];
  const APIgetAllCategories = () => {
    let url = "http://localhost:4000/api/categories";
    axios.get(url).then((response) => {
      const data = [];
      for (let i = response.data.length - 1; i >= 0; i--) {
        data.push({
          key: i,
          Categorie_ID: response.data[i].Categorie_ID,
          Categorie_Name: `${response.data[i].Categorie_Name}`,
          Categorie_IsActive: response.data[i].Categorie_IsActive.data[0],
          Categorie_UpdateDate: dateFormat(
            response.data[i].Categorie_UpdateDate,
            "dd-mm-yyyy ( h:MM TT )"
          ),
          User_FullName: response.data[i].User_FullName,
        });
      }
      setDatatableOut(data);
    });
  };

  useEffect(() => {
    APIgetAllCategories();
  }, []);

  const handleCategories = (
    Categories,
    setEnable,
    setDisable,
    upDateProduct
  ) => {
    const URL = `http://localhost:4000/api/categories/${Categories.Categorie_ID}`;
    if (setEnable === true) {
      axios
        .put(URL, {
          ...Categories,
          Categorie_IsActive: 1,
        })
        .then((response) => {
          APIgetAllCategories();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (setDisable === true) {
      axios
        .put(URL, {
          ...Categories,
          Categorie_IsActive: 0,
        })
        .then((response) => {
          APIgetAllCategories();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (upDateProduct === true) {
    }
  };
  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
      // description: message,
    });
  };
  const onCreateAdd = (values) => {
    values.Categorie_IsActive = 1;
    values.Categorie_CreateUserID = 1;
    values.Categorie_UpdateUserID = 1;
    const URL = `http://localhost:4000/api/categories/`;
    axios
      .post(URL, values)
      .then((response) => {
        APIgetAllCategories();

        openNotificationWithIcon("success", "thêm thành công");
        setVisibleModalAdd(false);
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
  };

  function showDeleteConfirm(Categories) {
    confirm({
      title: `Bạn có chắc muốn xoá món ${Categories.Categorie_Name} ?`,
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        const URL = `http://localhost:4000/api/categories/${Categories.Categorie_ID}`;
        axios
          .delete(URL)
          .then((response) => {
            APIgetAllCategories();
            openNotificationWithIcon("success", "bạn đã xoá thành công");
          })
          .catch(function (error) {
            openNotificationWithIcon(
              "error",
              "bạn không thể xoá danh mục có sản phẩm"
            );

            console.log("ERROR from server:", error);
          });
      },
      onCancel() {},
    });
  }

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisibleModalAdd(true);
        }}
      >
        + Thêm danh mục
      </Button>

      <ModalAdd
        visibleModalAdd={visibleModalAdd}
        onCreateAdd={onCreateAdd}
        onCancel={() => {
          setVisibleModalAdd(false);
        }}
      />
      <Table
        style={{ paddingTop: "30px" }}
        size="small"
        columns={columns}
        dataSource={datatableOut}
        scroll={{ x: 768 }}
      />
    </>
  );
};
export default Categories;
