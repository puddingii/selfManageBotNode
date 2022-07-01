// getting-started.js
import mongoose from 'mongoose';
import config from '../config';

export default async () => {
	try {
		const dbConnctionURL = config.mongoUrl;
		await mongoose.connect(dbConnctionURL);
	} catch (err) {
		console.log(err);
	}
};
