import Sequelize from "sequelize";
const db = new Sequelize('marketplaceb2b','root','',{
	host:"localhost",
	dialect:"mysql"
});

export default db;