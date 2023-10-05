const product = require('../models/products');
const Product = require('../models/products');

module.exports.addProducts = async function (req, res) {
    try {
        const { product } = req.body
        const { name, quantity } = product;
        const newProducts = new Product({ name, quantity })
        await newProducts.save()
        res.status(200).json({
            data: {
                product: {
                    name: newProducts.name,
                    quantity: newProducts.quantity,
                },
            },
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.getProducts = async function (req, res) {
    try {

        const products = await Product.find({}).lean();
        const formattedData = products.map((product) => {
            return {
                id: product._id,
                name: product.name,
                quantity: product.quantity
            }
        })

        res.status(200).json({
            data: {
                products: formattedData
            }
        })

    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.deleteProduct = async function (req, res) {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id)

        res.status(200).json({
            data: {
                message: "product deleted"
            }
        })
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports.updateQuantity = async function (req, res) {
    try {
        const { id } = req.params;
        const { number } = req.query;
        const newQuantity = parseInt(number)

        if (isNaN(newQuantity) || newQuantity <= 0) {
            return res.status(400).json({ error: 'Invalid quantity value' });
        }

        const updateProduct = await Product.findByIdAndUpdate(id, { $set: { quantity: newQuantity } },
            { new: true }
        )

        if(!updateProduct){
            return res.status(404).json({
                error : "Product not found"
            })
        }

        res.status(200).json({
            data : {
                product :{
                    id: updateProduct._id,
                    name: updateProduct.name,
                    quantity: updateProduct.quantity,
                }
            }
        })

    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}