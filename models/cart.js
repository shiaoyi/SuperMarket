module.exports = function(sequelize, DataTypes){
	var Cart = sequelize.define('Cart',{
		product: DataTypes.STRING,
		price: DataTypes.INTEGER,
        num: DataTypes.INTEGER,
	});
	return Cart;
};