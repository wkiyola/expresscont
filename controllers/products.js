const products = require('../data/products')

const products = require('../data/products')
const list = (req, res) => {
    res.json(products)
}

module.exports = { 
    list
}