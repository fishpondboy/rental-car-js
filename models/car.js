'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Car.belongsTo(models.Admin, { foreignKey: 'AdminId' });
		}
	}
	Car.init(
		{
			type: DataTypes.STRING,
			image: DataTypes.STRING,
			detail: DataTypes.STRING,
			price: DataTypes.FLOAT,
			status: DataTypes.STRING,
		},
		{
			hooks: {
				beforeCreate: (instance, options) => {
					instance.status = 'Belum Disewakan';
				},
			},
			sequelize,
			modelName: 'Car',
		}
	);
	return Car;
};
