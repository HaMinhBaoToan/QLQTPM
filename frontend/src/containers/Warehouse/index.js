import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import InputWarehouse from './components/Input/Input-warehouse';
import OutputWarehouse from './components/Output/Output-warehouse';
import WarehouseHome from './components/WarehouseHome';
import { WarehouseContext } from '../../utils/AppContext';
import { formatNumber } from '../../utils/index';

import './warehouse.scss';
var dateFormat = require('dateformat');
const { TabPane } = Tabs;
const Warehouse = () => {
  const [datatable, setDatatable] = useState([]);
  const [datatableTemp, setDatatableTemp] = useState([]);

  const APIgetAllProduct = () => {
    let url = 'http://localhost:4000/api/goods';
    axios.get(url).then((response) => {
      const data = [];
      for (let i = response.data.length - 1; i >= 0; i--) {
        data.push({
          key: i,
          Goods_ID: response.data[i].Goods_ID,
          Goods_Name: response.data[i].Goods_Name,
          Goods_Quantity: response.data[i].Goods_Quantity,
          Goods_Unit: response.data[i].Goods_Unit,
          Goods_ImportDate: dateFormat(
            response.data[i].Goods_ImportDate,
            'dd-mm-yyyy ( h:MM TT )'
          ),
          Goods_FromDate: dateFormat(
            response.data[i].Goods_FromDate,
            'dd-mm-yyyy'
          ),
          Goods_ToDate: [
            dateFormat(response.data[i].Goods_ToDate, 'dd-mm-yyyy'),
          ],
          Goods_Inventory:
            response.data[i].Goods_Quantity - response.data[i].Used_Quantity,
          Supplier_CompanyName: response.data[i].Supplier_CompanyName,
          Goods_UnitCost: `${formatNumber(response.data[i].Goods_UnitCost)} đ`,
          Goods_Amount: `${formatNumber(
            response.data[i].Goods_UnitCost * response.data[i].Goods_Quantity
          )} đ`,
        });
      }
      setDatatable(data);
      setDatatableTemp(data);
      // setdataReponse(response.data);
    });
  };
  useEffect(() => {
    APIgetAllProduct();
  }, []);
  // const onSearch = (value) => {
  //   console.log(value)
  //   // setDatatable(datatable.filter(item => item.Goods_Name.toLowerCase().includes(value.toLowerCase())))
  // };
  const txt_Changed = function (e) {
    const temp = datatable.filter((item) =>
      item.Goods_Name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDatatableTemp(temp);

    // onQueryChanged(e.target.value);
  };

  return (
    <WarehouseContext.Provider
      value={{ datatableTemp, APIgetAllProduct, datatable,txt_Changed }}
    >
      <div className="warehouse loading">
      <h3 className="mb-3">Quản lý kho</h3>

        <Tabs type="card">
          <TabPane tab="Kho" key="1">
            <WarehouseHome />
          </TabPane>
          <TabPane tab="Nhập kho" key="2">
            <InputWarehouse />
          </TabPane>

          <TabPane tab="Xuất kho" key="3">
            <OutputWarehouse />
          </TabPane>
        </Tabs>
      </div>
    </WarehouseContext.Provider>
  );
};

export default Warehouse;
