import express from 'express';
import morgan from 'morgan';
import path from 'path';
import accountBookApi from '../api/accountBook';

/** @param {import('express').Express} app */
export default async app => {
	app.use(morgan('dev'));
	app.use(express.static(path.join(__dirname, '../public')));

	app.use('/api/account-book', accountBookApi);
};
