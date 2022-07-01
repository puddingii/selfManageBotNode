import accountBookModel from '../models/AccountBook';

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getList = async (req, res) => {
	const {
		params: { userId = 'gun4930' },
	} = req;

	const payload = {
		userId,
		startDate: '2022-06-01',
		endDate: '2022-06-26',
	};
	const data = await accountBookModel.findByUserId(payload);
	res.status(200).json({ myAccountList: data });
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
// export const createAccount = async (req, res) => {};
