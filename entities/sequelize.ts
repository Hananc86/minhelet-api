import Sequelize from "sequelize";
import config from '../config';
const { db: { host, password } } = config;

const sequelize = new Sequelize(
	"rq0uyw0z4jn9cx47",
	"zyrflbvmsy008hkw",
	password,
	{
		dialect: "mysql",
		logging: console.log,
		host,
		pool: {
			max: 10,
			min: 0,
			idle: 30000
		},
	}
);
export default sequelize;
