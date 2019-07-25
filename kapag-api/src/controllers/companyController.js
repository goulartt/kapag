var mongoose = require('mongoose')

exports.post = (req, res, next) => {
    //mongoose.connect('mongodb://goulartt:96501306JvGa@ds355357.mlab.com:55357/pagak');
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
