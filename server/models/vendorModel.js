import Sequelize from "sequelize";
import db from "../database/db.js";

const Vendor = db.define('vendors',{
    nom:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    prenom:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    email:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    password:{
    	type : Sequelize.STRING(50),
    	allowNull :false
    },
    nom_boutique:{
        type : Sequelize.STRING(50),
    	allowNull :false
    },
    adress:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    numero:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    refresh_token:{
        type :Sequelize.TEXT
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Vendor;