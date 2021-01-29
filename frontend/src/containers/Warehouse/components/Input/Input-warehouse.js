import React, {  useState ,useContext} from "react";
import { Row, Col, Table, Tag, Button, notification } from "antd";
import axios from "axios";
import _ from "lodash";
import ModalForm from "./Modal_Input_Warehouse";
import {WarehouseContext} from "../../../../utils/AppContext";
var dateFormat = require("dateformat");

const columns = [
  {
    title: "ID",
    dataIndex: "Goods_ID",
    width: 50,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_ID - b.Goods_ID,
      multiple: 3,
    },
  },
  {
    title: "Tên Hàng",
    dataIndex: "Goods_Name",
    width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Name.length - b.Goods_Name.length,
      multiple: 3,
    },
  },
  {
    title: "Số lượng",
    dataIndex: "Goods_Quantity",
    // width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Quantity - b.Goods_Quantity,
      multiple: 3,
    },
  },
  {
    title: "Đơn giá",
    dataIndex: "Goods_UnitCost",
    align: "center",
  },
  {
    title: "Tổng",
    dataIndex: "Goods_Amount",
    align: "center",
  },
  // {
  //   title: "Tồn Kho",
  //   dataIndex: "Goods_Inventory",
  //   align: "center",
  // },
  {
    title: "Đơn vị",
    dataIndex: "Goods_Unit",
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Unit.length - b.Goods_Unit.length,
      multiple: 3,
    },
  },
  {
    title: "Nhà Cung Cấp",
    dataIndex: "Supplier_CompanyName",
    align: "center",
  },
  {
    title: "Hạn dùng từ ngày",
    dataIndex: "Goods_FromDate",
    align: "center",
  },
  {
    title: "Hạn dùng đến ngày",
    dataIndex: "Goods_ToDate",
    align: "center",
    key: "Goods_ToDate",

    render: (Goods_ToDate) => (
      <>
        {Goods_ToDate.map((tag) => {
          var arr = _.split(tag, "-");
          var currentTime = new Date();
          var month = currentTime.getMonth() + 1;
          var day = currentTime.getDate();
          var year = currentTime.getFullYear();
          let color = "green";
          // if (parseInt(arr[2]) === year) {
          //   if (parseInt(arr[1]) === month) {
          //     if (Math.abs(arr[0] - day) < 25) {
          //       color = "volcano";
          //     }
          //   }
          // }
          if (parseInt(arr[2]) < year) {
            color = "volcano";
          } else {
            if (parseInt(arr[2]) === year) {
              if (parseInt(arr[1]) === month) {
                if (arr[0] < day) {
                  color = "volcano";
                } else if (Math.abs(arr[0] - day) < 15) {
                  color = "gold";
                }
              }
            }
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Ngày lập",
    dataIndex: "Goods_ImportDate",
    align: "center",
  },
];

// function onChange() {
//   // console.log('params', pagination, filters, sorter, extra);
// }
const InputWarehouse = () => {
  const {  datatableTemp,APIgetAllProduct,datatable} = useContext(WarehouseContext);

  // const [datatable, setDatatable] = useState([]);

  const [visible, setVisible] = useState(false);
  // setListgoods()

  const openNotificationWithIcon = (type, idDonHang) => {
    notification[type]({
      message: "Hoàn Tất",
      description: `Bạn vừa nhập kho thành công đơn hàng ${idDonHang}`,
    });
  };
  const onCreate = (values) => {
    values.Goods_FromDate = values.Goods_Date[0].format("YYYY-MM-DD");
    values.Goods_ToDate = values.Goods_Date[1].format("YYYY-MM-DD");
    values.Goods_ImportDate = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    delete values.Goods_Date;
    delete values.Goods_ID;

    // console.log(values);

    // console.log("Received values of form: ");
    setVisible(false);
    axios
      .post("http://localhost:4000/api/goods", values)
      .then((response) => {
        openNotificationWithIcon("success", response.data.Goods_ID);
        APIgetAllProduct();
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
  };


  return (
    <div>
      <Button
   
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Thêm phiếu nhập kho
      </Button>
      <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        idNextGoods={datatable[0].Goods_ID+1}
      />
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Table
           size="small"
            columns={columns}
            dataSource={datatableTemp}
            // onChange={onChange}
            scroll={{ x: 1700 }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default InputWarehouse;
