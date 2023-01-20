const Product = require('../models/product.model');

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
            .then (product => res.json (
                {message: "Successfully created new product", product:product})
                )
            .catch((err) => 
                res.json({
                    message: "Something went wrong with Product.create()",
                    error: err
                })
            );
    },

    getAllProducts: (req, res) => {
        Product.find({})
            .then((products) => {
                console.log(products);
                res.json(products)
            })
            .catch((err) => 
                res.json({
                    message: "Something went wrong with Product.find()",
                    error: err
                })
            );
    }

};