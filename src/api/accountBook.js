import express from 'express';
import { getList } from '../services/accountBook';

const router = express.Router();

router.route('/list').get(getList);
// router.route('');

export default router;
