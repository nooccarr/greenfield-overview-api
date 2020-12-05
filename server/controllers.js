const bodyParser = require('./index.js');
const models = require('./models.js');

module.exports = {
  getProducts: (req, res) => {
    let page = Number(req.query.page) || 1;
    let count = Number(req.query.count) || 5;
    if (page !== 1) {
      temp = page;
      page = page * count - count + 1;
      count = temp * count;
    }
    let params = [page, count];
    models.readProducts(params)
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
    let params = req.params.product_id;
    models.readStyles(params)
      .then(styles => res.json(styles))
      .catch(error => res.sendStatus(404));
  },
  getRelated: (req, res) => {
    let params = req.params.product_id;
    models.readRelated(params)
      .then(related => {
        let result = [];
        for (let i = 0; i < related.length; i++) {
          result.push(related[i].related_product_id);
        }
        res.json(result)
      })
      .catch(error => res.sendStatus(404));
  }
};