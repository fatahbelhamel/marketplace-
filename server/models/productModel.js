import Sequelize from "sequelize";
import db from "../database/db.js";

const Product = db.define('produit',{
    Nom_prod:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Desc_prod:{
        type :Sequelize.STRING(100),
    	allowNull :false
    },
    Cat_prod:{
        type :Sequelize.STRING(10),
        allowNull :false
    },
    Marq_prod:{
        type :Sequelize.STRING(10),
        allowNull :false
    },
    Prix:{
        type :Sequelize.INTEGER(10),
        allowNull :false
    },
    Img_prod:{
        type :Sequelize.STRING(50),
    	allowNull :false
    },
    Quant_prod:{
        type :Sequelize.INTEGER(10),
        allowNull :false
    },
    Id_vend:{
        type :Sequelize.INTEGER(11),
        allowNull :false
    },
    Nom_boutique:{
        type :Sequelize.STRING(20),
        allowNull :false
    },
    Stat_prod:{
        type :Sequelize.STRING(10)
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Product;
