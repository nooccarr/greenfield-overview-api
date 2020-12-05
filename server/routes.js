const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/products/list', controllers.getProducts);
router.get('/products/:product_id', controllers.getProduct);
router.get('/products/:product_id/styles', controllers.getStyles);
router.get('/products/:product_id/related', controllers.getRelated);

module.exports = router;

// POSTMAN
// SAMPLE product_id: 5
// getProduct:     8-31 ms (good!)
// getProduct:  401-768 ms -> 8-38ms (good!) added index to product_id
// getStyles:     22440 ms (very bad)
// getRelated: 732-1183 ms -> 7-41ms (good!) added index to product_id

// create index styles_idx on styles (product_id) not significant
// create index skus_idx on skus (style_id)       9898 ms
// create index photos_idx on photos (style_id)   26-46 ms (good!)

// EXPLAIN ANALYZE / LAST 10%

// getProduct: ROW NO. 987944-987953
//  Planning Time:  3.702 ms
//  Execution Time: 1.439 ms
//  Planning Time:  0.201 ms
//  Execution Time: 0.053 ms
//  Planning Time:  0.244 ms
//  Execution Time: 0.056 ms
//  Planning Time:  0.272 ms
//  Execution Time: 0.099 ms

// getProduct: ROW NO. 987944
//  Planning Time:  0.227 ms
//  Execution Time: 2.066 ms
//  Planning Time:  0.556 ms
//  Execution Time: 0.242 ms
//  Planning Time:  0.439 ms
//  Execution Time: 0.976 ms
//  Planning Time:  0.201 ms
//  Execution Time: 0.092 ms

// getStyles: ROW NO. 987944
//  Planning Time:  0.787 ms
//  Execution Time: 6.789 ms
//  Planning Time:  1.218 ms
//  Execution Time: 0.604 ms
//  Planning Time:  0.896 ms
//  Execution Time: 0.463 ms
//  Planning Time:  0.785 ms
//  Execution Time: 0.488 ms

// getRelated: ROW NO. 987944
//  Planning Time:  0.144 ms
//  Execution Time: 1.918 ms
//  Planning Time:  0.112 ms
//  Execution Time: 0.077 ms
//  Planning Time:  0.154 ms
//  Execution Time: 0.086 ms
//  Planning Time:  0.147 ms
//  Execution Time: 0.077 ms