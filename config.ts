interface Config {
	db: {
		password: string;
		host: string;
	}
}

const config: { [x: string]: Config } = {
	development: {
		db: {
			password: "p142ir4xqmc98upb",
			host: "h7xe2knj2qb6kxal.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
		}
	}
};

config.test = config.development;

const env = process.env.NODE_ENV || "development";

export default config[env];
