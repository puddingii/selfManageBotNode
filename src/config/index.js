import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
	path: path.join(
		__dirname,
		`../../.env${process.env.ENVIRONMENT ? `.${process.env.ENVIRONMENT}` : ''}`,
	),
});

export default {
	port: process.env.PORT,
	mongoUrl: process.env.MONGO_URL,
};
