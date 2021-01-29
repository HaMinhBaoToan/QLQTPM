const db = require('../utils/db');

module.exports = {
  all() {
    return db('products').leftJoin('categories', 'products.Product_CategorieID', '=', 'categories.Categorie_ID');
  },

  async single(id) {
    const product = await db('products')
      .where('Product_ID', id);
    if (product.length === 0) {
      return null;
    }

    return product[0];
  },

  add(product) {
    
    return db('products').insert(product);
  },

  delete(id) {
    return db('products')
      .where('Product_ID', id)
      .del();
  },

  update(id, product){
    return db('products').where('Product_ID', id).update(product)
  },
};
