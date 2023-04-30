import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layouts';
import { Docs, Login, NotFound } from '@/pages';
import { zh, en } from '@/lang';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: 'zh-cn/docs',
				element: <Docs Lan={zh} />,
				loader: () => '在线简历',
			},
			{
				path: 'en-us/docs',
				element: <Docs Lan={en} />,
				loader: () => '在线简历',
			},
			{
				index: true,
				element: <Login />,
				loader: () => '请输入查看码 —— 在线简历',
			},
		],
	},
	{
		path: '*',
		loader: () => '🙅 抱歉，你来到了一个错误页面 ',
		element: <NotFound />,
	},
]);

export default router;
