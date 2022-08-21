import Sequelize from "sequelize";
import db from "../database/db.js";

const Client = db.define('client',{
    Nom_clt:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Prenom_clt:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Email_clt:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Mdp_clt:{
        type : Sequelize.STRING(50),
        allowNull :false
    },
    Adress_clt:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Num_tel_clt:{
        type :Sequelize.INTEGER(20),
        allowNull :false
    },
    Img_clt:{
        type : Sequelize.STRING(50),
        allowNull :false
    },
    Token_clt:{
        type :Sequelize.TEXT
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    
},{
    freezeTableName:true
});

export default Client;
