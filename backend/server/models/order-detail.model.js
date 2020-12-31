const db = require("../utils/db");

module.exports = {
  all() {
    return db("orders_details");
  },

  async single(id) {
    const product = await db("orders_details").where("ID", id);
    if (product.length === 0) {
      return null;
    }
    return product[0];
  },

  add(product) {
    return db("orders_details").insert(product);
  },

  del(id) {
    return db("orders_details").where("ID", id).del();
  },

  update(id, product) {
    return db("orders_details").where("ID", id).update(product);
  },
};
