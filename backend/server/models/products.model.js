const db = require('../utils/db');

module.exports = {
  all() {
    return db('products');
  },

  async single(id) {
    const product = await db('products')
      .where('product_id', id);
    if (product.length === 0) {
      return null;
    }

    return product[0];
  },

  add(product) {
    return db('products').insert(product);
  },

  del(id) {
    return db('products')
      .where('product_id', id)
      .del();
  }
};
