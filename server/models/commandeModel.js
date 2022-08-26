import Sequelize from "sequelize";
import db from "../database/db.js";

const Commande = db.define('commande',{
    Id_clt:{
        type :Sequelize.INTEGER(11),
        allowNull :false
    },
    Id_vend:{
        type :Sequelize.INTEGER(11),
        allowNull :false
    },
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
    Adress_clt:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Pays:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    City:{
        type :Sequelize.STRING(50),
        allowNull :false
    },
    Code_postal:{
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
    },
    Stat_cmds:{
        type :Sequelize.STRING(50)
    },
    Paie_meth:{
        type :Sequelize.STRING(50)
    },
    Date_cmds:{
        type :Sequelize.DATE
    }
},{
    freezeTableName:true
});

export default Commande;