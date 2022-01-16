import React from 'react';
import { MdError } from 'react-icons/md';

const NotFoundPage = () => {
	return (
		<div>
			<h1 className='font-black text-6xl flex justify-center'>
				Error&nbsp;
				<span className='text-indigo-600'>404</span>
			</h1>

			<div className='text-center text-xl  pt-3 flex justify-center '>
				<div className='text-indigo-900 flex justify-center items-center gap-2 rounded-xl bg-white px-8 hover:bg-gray-300 transition-colors hover:animate-pulse'>
					<MdError /> Recurso no encontrado
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
