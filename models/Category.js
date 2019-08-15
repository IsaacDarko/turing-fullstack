const Sequelize = require('sequelize');
const db = require('../config/connect');



const Category = db.define('category', {
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    department_id: {
        type:Sequelize.STRING(100),
        allowNull: false
    },

    name: {
        type:Sequelize.STRING(100),
        allowNull: false
    },

    description: {
        type:Sequelize.STRING(1000)
    },

},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Category;