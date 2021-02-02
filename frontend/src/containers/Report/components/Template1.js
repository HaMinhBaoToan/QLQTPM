import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Table, Button, Typography } from "antd";

import axios from "axios";
import { formatDate, formatNumber } from "../../../utils";
import { useReactToPrint } from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

import moment from "moment";
const { Text } = Typography;
const Template1 = ({ varReport }) => {
  const componentRef = useRef();

  const [dataTableOrder, setdataTableOrder] = useState([]);
  const [summaryOrder, setsummaryOrder] = useState({ totalItem: 0, totalPrice: 0 });
  const [dataTableTopProduct, setdataTableTopProduct] = useState([]);
  const [summaryTopProduct, setsummaryTopProduct] = useState({ totalItem: 0, totalPrice: 0 });
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const columnsOrder = [
    {
      title: <strong>Mã đơn hàng</strong>,
      colSpan: 1,
      align: "center",
      children: [
        {
          title: <strong>Tổng</strong>,
          dataIndex: "Order_ID",
          key: "Order_ID",
          align: "center",

          colSpan: 2,
        },
      ],
    },
    {
      title: <strong>Khách hàng</strong>,
      colSpan: 1,
      align: "center",
      children: [
        {
          dataIndex: "Order_Name",
          key: "Order_Name",
          colSpan: 0,
          align: "center",
        },
      ],
    },
    {
      title: <strong>Số lượng mua</strong>,
      colSpan: 1,
      align: "center",
      children: [
        {
          title: (
            <Text type="danger font-weight-bold">
              {summaryOrder.totalItem} sản phẩm
            </Text>
          ),
          dataIndex: "ItemSum",
          align: "center",

          key: "ItemSum",
          colSpan: 1,
        },
      ],
    },
    {
      title: <strong>Tồng tiền</strong>,
      colSpan: 1,
      align: "center",
      children: [
        {
          title: (
            <Text type="danger font-weight-bold">
              {formatNumber(summaryOrder.totalPrice)} đ{" "}
            </Text>
          ),
          dataIndex: "Amount",
          key: "Amount",
          align: "center",

          colSpan: 1,
          render: (Amount) => <>{formatNumber(Amount) + " đ"}</>,
        },
      ],
    },
  ];

  const columnsTopProduct = [
    {
      title: <strong>Top</strong>,
      align: "center",
      dataIndex: "STT",
    },
    {
      title: <strong>Sản phẩm </strong>,
      dataIndex: "Product_Name",
      key: "Product_Name",
      align: "center",
    },
    {
      title: <strong>Số lượng</strong>,
      align: "center",
      dataIndex: "ItemSum",
    },
  ];

  useEffect(() => {
    const URL_Order = `http://localhost:4000/api/orders/details?fromDate=${formatDate(varReport.Date[0])}&toDate=${formatDate(varReport.Date[1])}`;
    const URL_Top = `http://localhost:4000/api/orders/top?fromDate=${formatDate(varReport.Date[0])}&toDate=${formatDate(varReport.Date[1])}`;

    axios
      .get(URL_Order)
      .then((result) => {
        console.log(result.data);
        var temp = result.data;
        let totalItem = 0;
        let totalPrice = 0;

        temp.forEach(({ ItemSum, Amount }) => {
          totalItem += parseInt(ItemSum);
          totalPrice += parseInt(Amount);
        });
        setdataTableOrder(result.data);
        setsummaryOrder({
          ...summaryOrder,
          totalItem: totalItem,
          totalPrice: totalPrice,
        });
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get(URL_Top)
      .then((result) => {
        console.log(result.data);
        var temp = result.data;
        let totalItem = 0;
        let totalPrice = 0;
        temp.forEach(({ ItemSum, Amount }) => {
          totalItem += parseInt(ItemSum);
          totalPrice += parseInt(Amount);
        });
        var result_temp = temp.map((item, index) => ({ ...item, STT: index+1 }));
        setdataTableTopProduct(result_temp);
        setsummaryTopProduct({
          ...summaryTopProduct,
          totalItem: totalItem,
          totalPrice: totalPrice,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [varReport]);
  return (
    <>
      <Button
        type="primary mb-5"
        onClick={handlePrint}
        icon={<PrinterOutlined />}
      >
        Xuất PDF
      </Button>
      <Row ref={componentRef}>
        <Col span={24}>
          <div className="project-name text-dark  text-left ml-5 pl-5">
            Project SmartMan
          </div>
          <p className="font-weight-bold ml-5 ">
            Công Ty TNHH MTV Azone Media Tech
          </p>
          <p className="font-weight-bold">
            Số 227, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM
          </p>
        </Col>
        <Col span={24}>
          <h2 className="text-center font-weight-bold">Báo Cáo Chi Tiết</h2>
          <p className="text-center">
            Từ ngày {moment(varReport.Date[0]).format("MM/DD/YYYY")} đến ngày{" "}
            {moment(varReport.Date[1]).format("MM/DD/YYYY")}
          </p>
        </Col>
        <Col span={24}>
          <span className="font-weight-bold float-right">
            Nhân Viên:{" "}
            <span className="font-italic font-weight-normal">
              Hà Minh Bảo Toàn
            </span>
          </span>
        </Col>
        <Col span={24}>
          <span className="font-weight-bold float-right">
            Ngày lập:{" "}
            <span className="font-italic font-weight-normal">
          {  moment().format("MM/DD/YYYY")}
            </span>
          </span>
        </Col>
        <Col span={12}>
        <h5 className="text-center my-3 font-weight-bold">Doanh thu bán hàng</h5>
          <Table
            columns={columnsOrder}
            pagination={false}
            size="small"
            dataSource={dataTableOrder}
            bordered
          />
        </Col>
        <Col span={11} offset={1}>
          <h5 className="text-center my-3 font-weight-bold">Top Sản Phẩm Bán Chạy</h5>
          <Table
            columns={columnsTopProduct}
            pagination={false}
            size="small"
            dataSource={dataTableTopProduct}
            bordered
          />
          <h5 className="text-center my-3 pt-5 font-weight-bold">Top Sản Phẩm</h5>

           <Table
            columns={columnsTopProduct}
            pagination={false}
            size="small"
            dataSource={dataTableTopProduct}
            bordered
          />
        </Col>
        <Col offset={8} span={6} style={{marginTop:"100px"}}>
          <span className="font-weight-bold float-right">
            Người lập báo cáo <br></br>
            <span className="font-italic font-weight-normal">
             {"(Ký và ghi rõ họ tên)"}
            </span>
          </span>
         
         
        </Col>
        <Col  span={6} style={{marginTop:"100px"}}>
          <span className="font-weight-bold float-right">
           Kế Toán
           <br></br>
           <span className="font-italic font-weight-normal">
             {"(Ký và ghi rõ họ tên)"}
            </span>
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Template1;
