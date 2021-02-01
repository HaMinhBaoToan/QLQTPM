import React, { useEffect, useState } from "react";
import { Table, notification, Tag, Popover, Button } from "antd";
import axios from "axios";
import { formatNumber } from "../../utils/index";
import _ from "lodash";
import Icon, { IconCustom } from "../../components/Icon";
import ModalView from "./components/ModalView";
var dateFormat = require("dateformat");
const OrdersDetails = () => {
  const [datatable, setDatatable] = useState([]);
  const [datatableTemp, setDatatableTemp] = useState([]);
  const [visibleModalView, setVisibleModalView] = useState(false);
  const [orderModal, setOrderModal] = useState({});

  const columns = [
    {
      title: "ID",
      dataIndex: "Order_ID",
      width: 50,
      align: "center",
      sorter: {
        compare: (a, b) => a.Order_ID - b.Order_ID,
        multiple: 3,
      },
    },
    {
      title: "Tên khách đặt món",
      dataIndex: "Order_Name",
      width: 200,
      align: "center",
    },
    {
      title: "Tên nhân viên",
      dataIndex: "User_FullName",
      width: 200,
      align: "center",
    },
    {
      title: "Mô tả đơn hàng",
      dataIndex: "Order_Description",
      width: 200,
      align: "center",
    },
    {
      title: "Ngày đặt",
      dataIndex: "Order_OrderDate",
      width: 200,
      align: "center",
    },
    {
      title: "Tổng tiền đơn hàng",
      dataIndex: "Order_PriceAmont",
      width: 200,
      align: "center",
    },
    {
      title: "Tổng số lượng",
      dataIndex: "Order_QuantityAmount",
      width: 200,
      align: "center",
      sorter: {
        compare: (a, b) => a.Order_QuantityAmount - b.Order_QuantityAmount,
        multiple: 3,
      },
    },
    {
      title: "Tình trạng",
      dataIndex: "Order_Status",
      width: 200,
      align: "center",
      key: "Order_Status",

      render: (Order_Status, Order) => (
        <>
          {Order_Status.map((tag) => {
            var textDiv = "";
            if (tag === "Done") {
              textDiv = <Tag color="green">Đơn hàng hoàn tất</Tag>;
            }
            if (tag === "Cancel") {
              textDiv = <Tag color="red">Đơn hàng huỷ</Tag>;
            }
            if (tag === "Waiting") {
              textDiv = <Tag color="gold">Chờ xác nhận</Tag>;
            }
            return textDiv;
          })}
        </>
      ),
    },

    {
      title: "Xác Nhận",
      dataIndex: "Order_Edit",
      width: 150,
      align: "center",
      className: "actions",
      render: (Order_Details, Order) => (
        <>
          {Order.Order_Status[0] === "Waiting" ? (
            <Button
              className="my-btn-no-style my-popover-item" 
              onClick={() => {
                let url = `http://localhost:4000/api/orders/${Order.Order_ID}`;
                axios.put(url, { Order_Status: "Done" }).then((response) => {
                  setTimeout(() => {
                    APIgetAllOrders();
                  },50)
                });
              }}
            >
              <Icon component={IconCustom.abc} className="my-icon-md" />
              Xác nhận đơn hàng
            </Button>
          ) : (
            ""
          )}
        </>
      ),
    },
    {
      title: "Chi Tiết",
      dataIndex: "Order_Details",
      width: 200,
      align: "center",
      className: "actions",

      render: (Order_Details, Order) => (
        <Popover
          placement="bottomRight"
          content={
            <div className="my-popover-container">
              <Button
                className="my-btn-no-style my-popover-item"
                onClick={() => {
                  setVisibleModalView(true);
                  setOrderModal(Order);
                }}
              >
                <Icon component={IconCustom.EyeOpen} className="my-icon-md" />
                Xem chi tiết
              </Button>
            </div>
          }
          trigger="focus"
        >
          <Button className="my-btn-no-style btn-icon text-dark-gray">
            <Icon component={IconCustom.MoreHorizontal} />
          </Button>
          {/* {Order_Details === "Waiting"? <Button className="my-btn-no-style btn-icon text-dark-gray">
              <Icon component={IconCustom.MoreHorizontal} />
            </Button>:""} */}
        </Popover>
      ),
    },
  ];
  // const changeOrderStatus = (Order) => {};
  const APIgetAllOrders = () => {
    let url = "http://localhost:4000/api/orders/users";
    axios
      .get(url)
      .then((response) => {
        const data = [];
        for (let i = response.data.length - 1; i >= 0; i--) {
          data.push({
            key: i,
            Order_ID: response.data[i].Order_ID,
            Order_Name: response.data[i].Order_Name,
            User_FullName: response.data[i].User_FullName,
            Order_Description: response.data[i].Order_Description,
            Order_OrderDate: dateFormat(
              response.data[i].Order_OrderDate,
              "dd-mm-yyyy  ( HH:MM:ss ) "
            ),
            Order_PriceAmont: `${formatNumber(
              response.data[i].Order_PriceAmont
            )} đ`,
            Order_QuantityAmount: response.data[i].Order_QuantityAmount,
            Order_Status: [response.data[i].Order_Status],
          });
        }
        setDatatable(data);
        setDatatableTemp(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    APIgetAllOrders();
  }, []);
  const onCreate = (values) => {
    console.log(values);
    setVisibleModalView(false);
  };

  console.log('render', datatableTemp);
  return (
    <div className="orders-details">
      <h3 style={{ margin: "16px" }}>Đơn hàng đã bán</h3>
      <Table
        style={{ paddingTop: "30px" }}
        size="small"
        columns={columns}
        dataSource={datatableTemp}
        scroll={{ x: 768 }}
      />
      <ModalView
        visibleModalView={visibleModalView}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleModalView(false);
        }}
        orderModal={orderModal}
      />
    </div>
  );
};

export default OrdersDetails;
