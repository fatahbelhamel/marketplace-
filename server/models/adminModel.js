import Sequelize from "sequelize";
import db from "../database/db.js";

const Admin = db.define('admin',{
    Nom_adm:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Prenom_adm:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Email_adm:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Mdp_adm:{
    	type : Sequelize.STRING(50),
    	allowNull :false
    },
    Adress_adm:{
    	type :Sequelize.STRING(50),
    	allowNull :false
    },
    Num_tel_adm:{
    	type :Sequelize.INTEGER(20),
    	allowNull :false
    },
    Img_adm:{
        type : Sequelize.STRING(50),
        allowNull :false
    },
    Token_adm:{
        type :Sequelize.TEXT
    }
},{
    freezeTableName:true
});

export default Admin;