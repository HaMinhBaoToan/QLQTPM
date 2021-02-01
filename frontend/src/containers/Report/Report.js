import React, { useEffect, useState } from "react";
import { DatePicker, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import { formatDate, formatNumber } from "../../utils/index";

const { RangePicker } = DatePicker;
const { Option } = Select;
const Report = () => {
  const [dates, setDates] = useState({
    fromDate: moment().subtract(1, "years").startOf("year"),
    toDate: moment(),
  });

  const handleDate = (data) => {
    if (data) {
      const fromDate = moment(data[0]);
      const toDate = moment(data[1]);
      setDates({ fromDate: fromDate, toDate: toDate });
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="report">
      <h3>Báo Cáo</h3>
      <div className="w-100 mt-3">
        <div className="float-left">
          <RangePicker
            onChange={handleDate}
            defaultValue={[moment(dates.fromDate), moment(dates.toDate)]}
            format={"DD/MM/YYYY"}
          />
        </div>
        <div className="ml-3 float-left">
          <Select
            defaultValue="report"
            style={{ width: 220 }}
            onChange={handleChange}
          >
            <Option value="report">Báo Cáo Tổng</Option>
            <Option value="report1">Báo Cáo Công Nợ Thu</Option>
            <Option value="report2">Báo Cáo Công Nợ Chi</Option>
          </Select>
        </div>
        <div className="ml-3 float-left">
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Report;
