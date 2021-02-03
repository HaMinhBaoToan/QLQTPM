import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import {  formatNumber } from '../../../utils';

const Chart = ({dataTable,width,height}) => {
    const customTooltip = ({ payload, label, active }) => {
        if (active && payload?.length) {
          return (
            <div className="custom-tooltip">
            <div className="label">{label}</div>

            <p className="profit">
              {`Số sản phẩm : ${payload[0]?.payload?.ItemSum}`}
            </p>
            <p className="revenue">
              {`Lợi nhuận : ${formatNumber(payload[0]?.value)} đ`}
            </p>
          </div>
          );
        }
    
        return null;
      };
    
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart
        data={dataTable}
      
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="DATE" angle={-45} textAnchor="end" height={66} />
        <YAxis width={100} tickFormatter={(label) => label?.toLocaleString()+" đ"}/>
        <Tooltip content={customTooltip} />
        <Legend />
        <Line type="step" dataKey="Amount" stroke="#8884d8" />
      </LineChart>
      
    </ResponsiveContainer>

  );
};
export default Chart;
