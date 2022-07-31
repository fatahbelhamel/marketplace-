import Sequelize from "sequelize";
import db from "../database/db.js";

const Product = db.define('products',{
    nom_produit:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    description:{
        type :Sequelize.STRING(50),
    	allowNull :false
    },
    categorie:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    marque:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    prix:{
        type :Sequelize.INTEGER,
        allowNull :false
    },
    vendeur_id:{
        type :Sequelize.INTEGER,
        allowNull :false
    },
    image:{
        type :Sequelize.STRING(50),
    	allowNull :false
    },
    quantités:{
        type :Sequelize.INTEGER,
        allowNull :false
    },
    status:{
        type :Sequelize.STRING(50)
    },
    review:{
        type :Sequelize.STRING(50)
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Product;
