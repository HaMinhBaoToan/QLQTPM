const db = require('../utils/db');

module.exports = {
    getDataDashboard() {
        return db('goods').select(
            db.raw('sum(??) as ??', ['Goods_Quantity', 'totalItems']),
            db.raw('sum(?? * ??) as ??', ['Goods_Quantity', 'Goods_UnitCost', 'amount'])
          )
    }
};
