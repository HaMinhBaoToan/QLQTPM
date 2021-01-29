const db = require("../utils/db");

module.exports = {
  
  all() {
    return db("categories");
  },
  add(useds) {
    return db("useds").insert(useds);
  },
};
