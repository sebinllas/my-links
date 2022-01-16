import React, { useContext } from 'react';
import { BiLink } from 'react-icons/bi';
import { LinksContext } from '../Contexts';
import { TailwindLink } from './TailwindComponents';

export const Link = ({
	id,
	url,
	title,
	description,
	img,
	className = '',
	deleteBtn
}) => {
	const [links, setLinks] = useContext(LinksContext);

	const handleAnchorClick = e => {
		e.preventDefault();
		url.match(/https?:\/\//)
			? window.open(url, 'blank')
			: window.open('http://' + url, 'blank');
	};

	const handleDeleteClick = () => {
		const { [id]: removed, ...rest } = links;
		setLinks(rest);
	};

	return (
		<TailwindLink className={className}>
			<div
				className={`
				bg-white 
					rounded-full
					flex
					justify-center
					items-center
					col-end-3
					row-span-2
					w-48px
					h-48px
					justify-self-start
					self-center
					flex-shrink-0`}>
				{img ? (
					<img
						src={img}
						alt='website logo'
						className='rounded-full flex-shrink-0'
					/>
				) : (
					<BiLink />
				)}
			</div>
			<a
				href={url}
				target='blank'
				rel='external'
				className='w-10/12 '
				onClick={handleAnchorClick}>
				<h2 className='font-bold  col-start-2	col-span-6 text-lg text justify-self-start'>
					{title}
				</h2>
				<p className='col-span-6 justify-self-start text-xs'>{description}</p>
			</a>
			{deleteBtn ? (
				<button
					className='
							bg-indigo-800 
							rounded-full 
							w-6 
							h-6 
							my-auto 
							text-white 
							opacity-0 
							group-hover:opacity-100 
							ease-in 
							duration-300
							delay-300 '
					onClick={handleDeleteClick}>
					✕
				</button>
			) : undefined}
		</TailwindLink>
	);
};
