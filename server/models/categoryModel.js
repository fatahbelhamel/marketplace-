import Sequelize from "sequelize";
import db from "../database/db.js";

const Category = db.define('categories',{
    nom_categorie:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    image:{
        type :Sequelize.STRING(50),
        allowNull :false 
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Category;
