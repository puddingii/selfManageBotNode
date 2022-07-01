import expressLLoader from './express';
import mongoLoader from './mongo';

export default async ({ app }) => {
	await mongoLoader();
	console.log('✅ Mongo Initialized');

	await expressLLoader(app);
	console.log('✅ Express Initialized');
};
