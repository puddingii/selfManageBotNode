import mongoose from 'mongoose';
import User from './User';

const AccountBook = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	amount: {
		type: Number,
		required: true,
	},
	isFixed: {
		type: Boolean,
		required: true,
	},
	category: {
		type: String,
	},
	content: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	accountId: {
		type: Number,
	},
	fixedDuration: {
		type: String,
		default: '1m',
	},
});

/**
 * user에 해당하는 리스트 추출
 * @this import('mongoose').Model
 */
AccountBook.statics.findByUserId = async function findByUser(payload) {
	try {
		const user = await User.findOne({ userId: payload.userId });
		const accountList = await this.find({ user });

		return accountList;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export default mongoose.model('AccountBook', AccountBook);
