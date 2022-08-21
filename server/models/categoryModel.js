import Sequelize from "sequelize";
import db from "../database/db.js";

const Category = db.define('categorie',{
    Nom_cat:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Img_cat:{
        type :Sequelize.STRING(50),
        allowNull :false 
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Category;
