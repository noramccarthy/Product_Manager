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
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch((err) =>
            res.json({
                message: "Something went wrong with Product.findOne()",
                error: err
            })
        );
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err))
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => res.json(err))
    }

};