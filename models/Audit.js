const Sequelize = require('sequelize');
const db = require('../config/connect');
const Order = require('./Order');



const Audit = db.define('audit', {
    audit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            
            key: 'order_id'
        }
    },

    created_on: {
        type:Sequelize.DATE,
        allowNull: false
    },

    message: {
        type:Sequelize.TEXT,
        allowNull: false
    },

    code: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Audit;