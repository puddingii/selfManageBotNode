import express from 'express';
import config from './config';
import loaders from './loaders';

const startServer = async () => {
	const app = express();

	await loaders({ app });

	app.listen(config.port, () => {
		console.log(`✅ Listening: http://localhost:${config.port}`);
	});
};

startServer();
