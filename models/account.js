"use strict";

module.exports = function(sequelize, DataTypes){
	var Account = sequelize.define('Account',{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});
	return Account;
};