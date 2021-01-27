import React from 'react';
import moment from 'moment';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// const data = [
//   { name: 'Tháng 1', profit: 10000, revenue: 40000 },
//   { name: 'Tháng 2', profit: 50000, revenue: 100000 },
//   { name: 'Tháng 3', profit: 100000, revenue: 250000 },
//   { name: 'Tháng 4', profit: 150000, revenue: 300000 },
//   { name: 'Tháng 5', profit: 100000, revenue: 200000 },
//   { name: 'Tháng 6', profit: 200000, revenue: 280000 },
//   { name: 'Tháng 7', profit: 300000, revenue: 420000 },
//   { name: 'Tháng 8', profit: 400000, revenue: 600000 },
//   { name: 'Tháng 9', profit: 300000, revenue: 450000 },
//   { name: 'Tháng 10', profit: 200000, revenue: 300000 },
//   { name: 'Tháng 11', profit: 300000, revenue: 600000 },
//   { name: 'Tháng 12', profit: 350000, revenue: 450000 },
// ];

const renderLineChart = ({chartData}) => {

  const customTooltip = ({ payload, label, active }) => {
    if (active && payload?.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">{moment(label).format('DD-MM-YYYY')}</div>
          {/* <p className="profit">
            <span className="dot" style={{ background: payload[0]?.color }} />
            {`Doanh thu : ${payload[0]?.value?.toLocaleString()}`}
          </p> */}
          <p className="revenue">
            <span className="dot" style={{ background: payload[0]?.color }} />
            {`Lợi nhuận : ${payload[0]?.value?.toLocaleString()}`}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Legend verticalAlign="top" height={40} />
        <Line
          name="Doanh thu"
          type="monotone"
          dataKey="revenue"
          stroke="#8BC34A"
        />
        {/* <Line
          name="Lợi nhuận"
          type="monotone"
          dataKey="profit"
          stroke="#039BE5"
        /> */}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={66} tickFormatter={(label) => moment(label).format('DD-MM-YYYY')}/>
        <YAxis tickFormatter={(label) => label?.toLocaleString()} />
        <Tooltip content={customTooltip} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default renderLineChart;
