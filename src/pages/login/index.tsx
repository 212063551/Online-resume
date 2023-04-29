import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { throttle } from '@/utils';
import bg from '@/imgs/Authority.png';
import { password } from '@/config';
import login from './inde.scss';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const [state, setState] = useState<string>('');
	document.title = useLoaderData() as string;
	const see = throttle(() => {
		let input = document.getElementById('input') as any;
		if (input.value === '') {
			setState('很抱歉：提取码不能为空');
		} else {
			if (input.value === password) {
				sessionStorage.setItem('token', 'true');
				navigate('zh-cn/docs');
			} else {
				setState('很抱歉：提取码错误');
			}
		}
	}, 5000);
	const value = () => {
		setState('');
	};
	return (
		<>
			<div id={login.login}>
				<img src={bg} alt='' className={login.bg} />
				<span>请您先输入查看码查看详细内容</span>
				<div>
					<input
						type='password'
						id='input'
						maxLength={4}
						placeholder='请输入查看码'
						onFocus={value}
					/>
					<button onClick={see}>查看</button>
				</div>
				<p>{state}</p>
			</div>
		</>
	);
};

export default Login;
