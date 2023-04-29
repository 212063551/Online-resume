export const throttle = (func: any, delay: any) => {
	let start = 0;
	let timer: string | number | NodeJS.Timeout | null | undefined = null;
	return function (...args: any) {
		let now = +new Date();
		if (now - start < delay) {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				start = now;
				func.apply(args);
			}, delay);
		} else {
			start = now;
			func.apply(args);
		}
	};
};
