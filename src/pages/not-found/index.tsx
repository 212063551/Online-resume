import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Error: React.FC = () => {
	document.title = useLoaderData() as string;
	return <h2>抱歉，页面找不到了！</h2>;
};

export default Error;
