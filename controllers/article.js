// get connection to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);
const getAllArticles = (req, res) => {
    Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json({articles});
        })
        .catch(err => {
            return res.status(500).send(error.message)
        })
}

module.exports = {
    getAllArticles
}