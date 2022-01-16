import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const TailwindForm = ({ children, className, ...props }) => {
	return (
		<form
			{...props}
			className={`
        ${className}
        bg-gray-800
        rounded-xl 
        p-2 
        border-gray-200
				flex
				flex-col
        gap-2
        text-white`}>
			{children}
		</form>
	);
};

export const TailwindLink = ({ children, className }) => {
	return (
		<div
			className={`
			${className}
				text-black
				bg-gray-200
				rounded-t-3xl
				rounded-br-3xl
				border-white 
				border
				min-w-xs
				max-w-lg
				w-full
				sm:w-11/12
				min-h-[64px]
				px-2
				py-1
				mx-auto
				my-1
				flex
				gap-x-2
				group
				`}>
			{children}
		</div>
	);
};

export const TailwindContainer = ({ children, className }) => {
	return (
		<div
			className={`
				${className}		
				text-white
				bg-gray-800 
				rounded-xl
				mb-4  
				py-4
				w-full 
				xl:w-7/12 
				max-w-xl
				m-auto`}>
			{children}
		</div>
	);
};

export const TailwindInput = ({ className, ...props }) => {
	return (
		<input
			{...props}
			className={`
			${className}
			mx-auto
			p-2  
			rounded-2xl 
			bg-gray-600
			w-full 
			max-w-lg
			`}
		/>
	);
};

export const TailwindButton = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={`
					  ${className}
						mx-auto
            text-white
            bg-indigo-800
            border-white
            border-2
            p-2 rounded-2xl
            self-center
						font-bold
						min-w-min
						hover:scale-125
					`}>
			{children}
		</button>
	);
};

export const TailwindLoadingModal = ({ children, className }) => {
	return (
		<div
			className={`
		${className}
		m-auto
		p-4
		text-xl
		text-bold
		bg-gray-900 
		text-white 
		w-5/6 
		rounded-3xl
		border-2
		border-white
		text-center
		flex
		flex-col
		items-center
		justify-center
		gap-2
`}>
			{children}
			<div className='text-center text-xl  pt-3 flex justify-center '>
				<div className='text-indigo-900 flex justify-center items-center gap-2 rounded-xl bg-white px-8 hover:bg-gray-300 transition-colors hover:animate-pulse'>
					<AiOutlineLoading3Quarters className='animate-spin' /> Cargando...
				</div>
			</div>
		</div>
	);
};
