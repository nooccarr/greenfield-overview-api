const bodyParser = require('./index.js');
const models = require('./models.js');

module.exports = {
  getProducts: (req, res) => {
    models.readProducts()
      .then(products => res.json(products))
      .catch(error => res.sendStatus(404));
  },
  getProduct: (req, res) => {
    let params = req.params.product_id;
    models.readProduct(params)
      .then(data => {
        let result = data[0];
        let product = {
          id: result.product_id,
          name: result.name,
          slogan: result.slogan,
          description: result.description,
          category: result.category,
          default_price: result.default_price
        };
        for (let i = 0; i < data.length; i++) {
          let result = data[i];
          if (!product.features) {
            product.features = [];
          }
          let feature = {
            feature: result.feature,
            value: result.value
          }
          product.features.push(feature);
        }
        res.json(product)
      })
      .catch(error => res.sendStatus(404));
  },
  getStyles: (req, res) => {
    models.readStyles()
      .then(styles => res.json(styles))
      .catch(error => res.sendStatus(404));
  },
  getRelated: (req, res) => {
    models.readRelated()
      .then(related => res.json(related))
      .catch(error => res.sendStatus(404));
  }
};