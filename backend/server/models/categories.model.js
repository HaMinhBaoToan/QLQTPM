const db = require("../utils/db");

module.exports = {
  
  all() {
    return db("categories").leftJoin('users', 'users.User_ID', 'categories.Categorie_UpdateUserID')
  },
  add(categori) {
    return db("categories").insert(categori);
  },
};
