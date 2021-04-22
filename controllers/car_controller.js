const { Car, Admin } = require('../models');

module.exports = class Controller {
	static getAll(req, res) {
		Car.findAll({
			include: [{ model: Admin }],
		})
			.then((data) => {
				res.render('car_list', { data });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static getAdd(req, res) {
		res.render('car_add');
	}

	static addCar(req, res) {}

	static getEdit(req, res) {}

	static editCar(req, res) {}

	static deleteCar(req, res) {}
};
