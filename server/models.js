const db = require('../db-postgres/index.js');

module.exports = {
  readProducts: (params) => {
    let queryStr = 'select * from products where id between $1 and $2';
    return db.many(queryStr, params)
      .catch(err => console.log('Error: ', err));
  },
  readProduct: (params) => {
    let queryStr = 'select products.*, features.feature, features.value from products join features on products.id = features.product_id and products.id = $1';
    // product 1 row, features multiple rows
    return db.many(queryStr, params)
      .catch(err => console.log('Error: ', err));
  },
  readStyles: (params) => {
    let queryStr = 'select styles.*, photos.url, photos.thumbnail_url, skus.size, skus.quantity from styles left outer join skus on styles.id = skus.style_id left outer join photos on styles.id = photos.style_id where styles.product_id = $1';
    // consider db.multi (has too many duplicate rows!!)
    return db.many(queryStr, params)
      .catch(err => console.log('Error: ', err));
  },
  readRelated: (params) => {
    let queryStr = 'select related_product_id from related where product_id = $1';
    return db.many(queryStr, params)
      .catch(err => console.log('Error: ', err));
  }
};

// Future Enhancement for readProduct & readStyles:
// mix subQueries and join
// subQueries: single row
// join: multiple rows