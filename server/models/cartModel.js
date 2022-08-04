import Sequelize from "sequelize";
import db from "../database/db.js";

const Cart = db.define('carts',{
    client_id:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    nom_produit:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    image_produit:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    quantités:{
        type :Sequelize.INTEGER(10),
        allowNull :false
    },
    prix:{
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