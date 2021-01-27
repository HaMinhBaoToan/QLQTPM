import React, { useContext} from "react";
import { Row, Col, Table, Tag } from "antd";
import _ from "lodash";
import {WarehouseContext} from "../../../utils/AppContext";


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
    width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Quantity - b.Goods_Quantity,
      multiple: 3,
    },
  },
  {
    title: "Tồn Kho",
    dataIndex: "Goods_Inventory",
    width: 200,
    align: "center",
    render(text) {
      return {
        props: {
          style: { color: parseInt(text) ===0 ? "red" :""}
        },
        children: <div>{text}</div>
      };
    },
    // sorter: {
    //   compare: (a, b) => a.Goods_Inventory - b.Goods_Inventory,
    //   multiple: 3,
    // },
  },
  {
    title: "Đơn vị",
    dataIndex: "Goods_Unit",
    width: 200,
    align: "center",
    sorter: {
      compare: (a, b) => a.Goods_Unit.length - b.Goods_Unit.length,
      multiple: 3,
    },
    
  },
  {
    title: "Hạn dùng từ ngày",
    dataIndex: "Goods_FromDate",
    width: 200,
    align: "center",
  },
  {
    title: "Hạn dùng đến ngày",
    dataIndex: "Goods_ToDate",
    width: 200,
    align: "center",
    key: "Goods_ToDate",

    render: (Goods_ToDate) => (
      <>
      {
          console.log(Goods_ToDate)
      }
        {Goods_ToDate.map((tag) => {
          var arr = _.split(tag, "-");
          var currentTime = new Date();
          var month = currentTime.getMonth() + 1;
          var day = currentTime.getDate();
          var year = currentTime.getFullYear();
          let color = "green";

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
];

const WarehouseHome = () => {
  const {  datatableTemp} = useContext(WarehouseContext);

  return (
    <div>
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Table
           size="small"
            columns={columns}
            dataSource={datatableTemp}
            scroll={{ x: 1680}}
            
          
          />
        </Col>
      </Row>
    </div>
  );
};

export default WarehouseHome;
