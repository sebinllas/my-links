import React, { useContext } from 'react';
import { TailwindInput, TailwindContainer } from './TailwindComponents';
import { PathContext } from '../Contexts';

export const LinksPath = () => {
	const [path, setPath] = useContext(PathContext);
	return (
		<TailwindContainer className={'p-5'}>
			<h1 className='text-center'>Dirección de tu página:</h1>
			<div className='flex justify-center items-center'>
				<span className='flex-shrink-0'>my-links.com/</span>
				<TailwindInput
					className={' inline px-1'}
					value={path}
					onChange={e => {
						setPath(e.target.value);
					}}
				/>
			</div>
		</TailwindContainer>
	);
};
