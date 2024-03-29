const db = require("../utils/db");

module.exports = {
  getDataDashboard(fromDate, toDate) {
    return db("goods")
    .whereBetween('goods.Goods_ImportDate', [fromDate, toDate])
    .leftJoin('useds', 'useds.Used_Goods_ID', '=', 'goods.Goods_ID')
    .select(
      db.raw("sum(??)-sum(??) as ??", ["goods.Goods_Quantity", "useds.Used_Quantity","totalItems"]),
      db.raw("sum(?? * ??) as ??", [
        "Goods_Quantity",
        "Goods_UnitCost",
        "amount",
      ])
    )   
  },
  goodsUsed(fromDate, toDate) {
    return db("goods")
    .whereBetween('goods.Goods_ImportDate', [fromDate, toDate])
    
  },
  // all() {
  //   return db("goods")
  //     .select("*")
  //     .leftJoin("useds", function () {
  //       this.on("goods.Goods_ID", "=", "useds.Used_Goods_ID");
  //     })
  //     .leftJoin("suppliers", function () {
  //       this.on("goods.Goods_SupplierID", "=", "suppliers.Supplier_ID");
  //     });
  // },

  all() {
    return db.from(function () {
      this.select({
        Goods_ID: "g.Goods_ID",
      })
        .from({ u: "useds", g: "goods" })
        .whereRaw("?? = ??", ["g.Goods_ID", "u.Used_Goods_ID"])
        .groupBy("g.Goods_ID")
        .sum({ Used_Quantity: "u.Used_Quantity" })
        .as("b");
    })

    .rightJoin("goods as a", function () {
      this.on("a.Goods_ID", "=", "b.Goods_ID");
    })
    .leftJoin("suppliers as s", function () {
      this.on("a.Goods_SupplierID", "=", "s.Supplier_ID");
    });

    // .with(
    //   "b",
    //   db({ u: "useds", g: "goods" })
    //     .select({
    //       Goods_ID: "g.Goods_ID",
    //     })
    //     .whereRaw("?? = ??", ["g.Goods_ID", "u.Used_Goods_ID"])
    //     .groupBy("g.Goods_ID")
    //     .sum({ Used_Quantity: "u.Used_Quantity" })
    // )
    // .select("*")
    // .from("b")
    // .rightJoin("goods as a", function () {
    //   this.on("a.Goods_ID", "=", "b.Goods_ID");
    // })
    // .leftJoin("suppliers as s", function () {
    //   this.on("a.Goods_SupplierID", "=", "s.Supplier_ID");
    // });
  },

  add(goods) {
    return db("goods").insert(goods);
  },
  update(id, Used_Quantity) {
    return db("goods")
      .where("Goods_ID", id)
      .update({
        Good_Quantity: knex.raw(`?? - ${Used_Quantity}`, ["Good_Quantity"]),
      });
  },
};
