import Sequelize from "sequelize";
import db from "../database/db.js";

const Cart = db.define('panier',{
    Id_clt:{
        type :Sequelize.INTEGER(11),
        allowNull :false
    },
    Nom_prod:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Img_prod:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Quantités:{
        type :Sequelize.INTEGER(20),
        allowNull :false
    },
    Prix:{
        type :Sequelize.INTEGER(20),
        allowNull :false
    }
},{
    freezeTableName:true
});

export default Cart;