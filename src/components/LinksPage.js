import React, { useEffect, useState } from 'react';
import { LinkList } from './LinkList';
import NotFoundPage from './NotFoundPage';
import { TailwindContainer, TailwindLink } from './TailwindComponents';
import { MdWifiTetheringErrorRounded } from 'react-icons/md';
import { AiOutlineReload } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { Profile } from './Profile';

export const LinksPage = () => {
	const [data, setData] = useState({ profile: '', links: {} });
	const [loading, setLoading] = useState(true);
	const [status, setStatus] = useState(0);
	const { path } = useParams();
	//const [error, setError] = useState(false);
	const fetchLinks = () => {
		setLoading(true);
		fetch(`https://my-links-back.herokuapp.com/my-links/${path}`, {
			method: 'GET',
			headers: { 'Access-Control-Allow-Origin': '*' }
		})
			.then(function (resp) {
				//const resp = JSON.parse(response);
				console.log(resp);
				setStatus(resp.status);
				return resp.json();
			})
			.then(function (data) {
				console.log(data);
				status === 200 ? setData(data) : setData({});
				setLoading(false);
				return;
			})
			.catch(error => {
				console.log(error);
				console.log({ status });
				setLoading(false);
			});
	};
	// eslint-disable-next-line
	useEffect(fetchLinks, [status]);
	return (
		<>
			{status === 0 && !loading ? (
				<TailwindContainer className='flex flex-col gap-3 items-center my-4'>
					<div className='text-indigo-900 flex justify-center items-center gap-2 rounded-xl bg-white px-8 hover:bg-gray-300 w-max mx-auto'>
						<MdWifiTetheringErrorRounded className='text-indigo-700 inline' />
						<span className='text-xl'>Tuvimos problemas con la conexión</span>
					</div>
					<button
						className='
						text-center 
						bg-indigo-800 
						text-white 
						flex 
						justify-center 
						items-center 
						gap-2 
						px-2  
						py-1 
						rounded-full 
						hover:bg-indigo-600
					'
						onClick={fetchLinks}>
						Reintentar <AiOutlineReload />
					</button>
				</TailwindContainer>
			) : loading ? (
				<>
					<TailwindContainer className={'mt-4'}>
						<div
							className={`w-9/12 m-auto text-white mt-2 flex gap-2  flex-col items-center rounded-full`}>
							<div
								className={` 
									p-0 bg-gray-600
									w-20 h-20 rounded-full flex-shrink-0 overflow-hidden 
									flex items-center justify-center animate-pulse`}></div>
							<div className=' bg-gray-600 h-16 w-full rounded-full flex flex-col justify-center items-center flex-grow p-1 animate-pulse '></div>
						</div>
					</TailwindContainer>
					<TailwindContainer>
						<div className='px-4'>
							<TailwindLink
								className={'animate-pulse bg-gray-600 h-16 border-none my-2'}
							/>
							<TailwindLink
								className={'animate-pulse bg-gray-600 h-16 border-none my-2'}
							/>
							<TailwindLink
								className={'animate-pulse bg-gray-600 h-16 border-none my-2'}
							/>
						</div>
					</TailwindContainer>
				</>
			) : (
				<>
					{status === 404 ? (
						<TailwindContainer>
							<NotFoundPage />
						</TailwindContainer>
					) : (
						<>
							<TailwindContainer className={'mt-4'}>
								<Profile {...data.profile} />
							</TailwindContainer>
							<TailwindContainer>
								<LinkList links={data.links} />
							</TailwindContainer>
						</>
					)}
				</>
			)}
		</>
	);
};
