import React from 'react';
import { Link } from './Link';
export const LinkList = ({links={}, deleteBtn}) => {
	return (
		<div className='flex flex-col px-4 w-full'>
			{Object.keys(links).map((id) => (
				<Link key={id} id={id} {...links[id]} deleteBtn={deleteBtn} className='hover:bg-indigo-200' />
			))}
		</div>
	);
};
