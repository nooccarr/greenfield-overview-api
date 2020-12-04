const db = require('../db-postgres/index.js');

module.exports = {
  readProducts: () => {},
  readProduct: (params) => {
    let queryStr = 'select * from products join features on products.id = features.product_id and products.id = $1';
    return db.many(queryStr, params)
      .catch(err => console.log('Error:', err));
  },
  readStyles: () => {},
  readRelated: () => {}
};

////////////////////////////////////////////////////////////
// FOR STRESS TEST
// db.many('select * from products where id = 11')
//   .then(products => {
//     let product = products[0];
//     db.many('select * from features where product_id = 11')
//       .then(features => {
//         let cleanedFeatures = [];
//         for (let i = 0; i < features.length; i++) {
//           let feature = features[i];
//           delete feature.id;
//           delete feature.product_id;
//           cleanedFeatures.push(feature);
//         }
//         product.features = cleanedFeatures;
//         console.log('PRODUCT: ', product);
//       })
//       .catch(error => console.log('ERROR:', error));
//   })
//   .catch(error => console.log('ERROR:', error));
////////////////////////////////////////////////////////////