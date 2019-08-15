const Sequelize = require('sequelize');
const db = require('../config/connect');



const Shopping_cart = db.define('shopping_cart', {
    item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },

    cart_id: {
        type: Sequelize.STRING(32),
        allowNull: false
    },

    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    attributes: {
        type:Sequelize.STRING(1000),
        allowNull: false
    },

    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    buy_now: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },

    added_on: {
        type: Sequelize.DATE,
        allowNull: false
    }

},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Shopping_cart;