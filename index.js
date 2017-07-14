module.exports = function(orm) {
	var mysql2 = require('./mysql2').Driver;
	orm.addAdapter('mysql2', mysql2);
};