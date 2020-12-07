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
          id: result.id,
          name: result.name,
          slogan: result.slogan,
          description: result.description,
          category: result.category,
          default_price: result.default_price,
          features: []
        };
        for (let i = 0; i < data.length; i++) {
          let result = data[i];
          if (result.value) {
            let feature = {
              feature: result.feature,
              value: result.value
            }
            product.features.push(feature);
          }
        }
        res.json(product);
      })
      .catch(error => res.sendStatus(404));
  },
  getStyles: (req, res) => {
    let params = req.params.product_id;
    models.readStyles(params)
      .then(data => {
        // res.json(data)
        let result = data[0];
        let productStyles = {
          product_id: result.product_id,
          results: []
        };
        let currentId = data[0].id;
        let photos = [];
        let skus = {};
        for (let i = 0; i < data.length; i++) {
          let result = data[i];
          if (result.url) {
            let unique = true;
            for (let j = 0; j < photos.length; j++) {
              if (photos[j].url === result.url) {
                unique = false;
              }
            }
            if (unique) {
              let photo = {
                thumbnail_url: result.thumbnail_url,
                url: result.url
              };
              photos.push(photo);
            }
          }
          if (result.size || result.quantity) {
            skus[result.size] = result.quantity;
          }
          if (data[i + 1] === undefined || currentId !== data[i + 1].id) {
            let style = {
              style_id: result.id,
              name: result.name,
              original_price: result.original_price,
              sale_price: result.sale_price,
              'default?': result['default?'],
              photos: photos,
              skus: skus
            };
            if (!style.photos.length) {
              photos.push({ thumbnail_url: null, url: null });
            }
            productStyles.results.push(style);
            if (data[i + 1]) {
              currentId = data[i + 1].id;
            }
            photos = [],
            skus = {}
          }
        }
        if (!productStyles.results.length) {
          let style = {
            photos: [{ thumbnail_url: null, url: null }]
          };
          productStyles.results.push(style);
        }
        res.json(productStyles);
      })
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
        res.json(result);
      })
      .catch(error => res.sendStatus(404));
  }
};