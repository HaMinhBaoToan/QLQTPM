const express = require('express');
const ordersModel = require('../models/orders.model');
const goodsModel = require('../models/goods.model');
const { groupBy } = require('lodash');
const router = express.Router();

router.get('/', async function (req, res) {
  const { fromDate, toDate } = req.query || {};

  const inforOrders = await ordersModel.getDataOverview(fromDate, toDate);
  const inforGoods = await goodsModel.getDataDashboard();
  const topItems = await ordersModel.getTopItems(fromDate, toDate);
  const chartData = await ordersModel.getChartData(fromDate, toDate);

  const amountInforOrders = inforOrders.reduce(
    (acc, cur) => ({ amount: parseInt(acc.amount) + parseInt(cur.amount) }),
    { amount: 0 }
  );

  const groupByChart = groupBy(chartData, 'date');
  const newData = Object.keys(groupByChart).map((item) => {
    const data = groupByChart[item].reduce(
      (acc, cur) => ({
        amount: parseInt(acc.amount || 0) + parseInt(cur.amount || 0),
      }),
      { amount: 0 }
    );
    return { name: groupByChart[item][0].date, revenue: data.amount };
  });

  const list = {
    infor: [
      { totalItems: inforOrders.length, amount: amountInforOrders.amount },
      { ...inforGoods[0] },
    ],
    topItemsData: topItems,
    chartData: newData,
  };

  res.json(list);
});

module.exports = router;
