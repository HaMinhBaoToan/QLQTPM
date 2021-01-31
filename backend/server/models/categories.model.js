const db = require("../utils/db");

module.exports = {
  
  all() {
    return db("categories").leftJoin('users', 'users.User_ID', 'categories.Categorie_UpdateUserID')
  },
  add(categorie) {
    return db("categories").insert(categorie);
  },
  update(id, categorie){
    return db('categories').where('categorie_ID', id).update(categorie)
  },
  delete(id) {
    return db('categories')
      .where('categorie_ID', id)
      .del();
  },
};
