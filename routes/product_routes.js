const express = require('express');
const router =  express.Router();

const productController =  require('../controller/product_controller');


router.post('/products/create' , productController.addProducts);
router.get('/products' , productController.getProducts);
router.delete('/products/:id' , productController.deleteProduct)
router.post('/products/:id/update_quantity/' , productController.updateQuantity)



module.exports = router;