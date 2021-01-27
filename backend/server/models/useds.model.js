const db = require("../utils/db");

module.exports = {
  
  all() {
    return db("goods").select('*').innerJoin('useds', function() {
      this.on('goods.Goods_ID', '=', 'useds.Used_Goods_ID');
    })
  },
  add(useds) {
    return db("useds").insert(useds);
  },
};
