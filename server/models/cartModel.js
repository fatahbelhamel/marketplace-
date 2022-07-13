import Sequelize from "sequelize";
import db from "../database/db.js";

const Cart = db.define('carts',{
    user:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    product_name:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    product_vendor:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    product_image:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    price:{
        type :Sequelize.INTEGER(10),
        allowNull :false
    },
    quantity:{
        type :Sequelize.INTEGER(10),
        allowNull :false
    },
    total:{
        type :Sequelize.INTEGER(20),
        allowNull :false
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Cart;