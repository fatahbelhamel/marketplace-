import Sequelize from "sequelize";
import db from "../database/db.js";

const Vendor = db.define('vendeur',{
    Nom_vend:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Prenom_vend:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Nom_boutique:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Email_vend:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Mdp_vend:{
        type : Sequelize.STRING(50),
        allowNull :false
    },
    Adress_vend:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Num_tel_vend:{
        type :Sequelize.INTEGER(20),
        allowNull :false
    },
    Img_vend:{
        type : Sequelize.STRING(50),
        allowNull :false
    },
    Token_vend:{
        type :Sequelize.TEXT
    }
},{
    freezeTableName:true
});

export default Vendor;