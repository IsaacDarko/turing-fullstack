const Sequelize = require('sequelize');
const db = require('../config/connect');



const Review = db.define('review', {
    review_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },

    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    review: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    rating: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },

    created_on: {
        type: Sequelize.DATE,
        allowNull: false
    }

},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Review;