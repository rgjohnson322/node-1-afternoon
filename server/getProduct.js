const products = require('../products.json');


const getProduct =  (request, respond) => {
    const item = product.find(val => val.id === parseInt(req.params.id));
    if (!item) {
        return respond.status(500).send("Item not in list");
        
    }
    respond.status(200).send(item);
}

module.exports = getProduct