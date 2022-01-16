import { TailwindButton } from './TailwindComponents';
import { useContext, useState } from 'react';
import { LinksContext, PathContext, ProfileContext } from '../Contexts';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdWifiTetheringErrorRounded } from 'react-icons/md';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const SaveInfo = () => {
	const [links, setLinks] = useContext(LinksContext);
	const [profile, setProfile] = useContext(ProfileContext);
	const [url] = useContext(PathContext);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(false);

	const saveLinks = () => {
		console.log(JSON.stringify({ path: url, links: links }));
		fetch('https://my-links-back.herokuapp.com/', {
		//fetch('http://127.0.0.1:8000/', {
			method: 'POST',
			body: JSON.stringify({ path: url, profile: profile, links: links }),
			headers: { 'Content-Type': 'application/json' }
		})
			.catch(err => {
				console.log('hubo un error:', err);
				setError(true);
			})
			.then(function (response) {
				return response.text();
			})
			.then(function (data) {
				console.log(data);
				setLinks({});
				setProfile({ name: '', desciption: '', photo: '' });
				setSaved(true);
			})
			.catch(err => {
				console.log('hubo un error:', err);
				setError(true);
			});
	};

	return (
		<>
			{error && !saved ? (
				<div className='flex flex-col gap-3 items-center'>
					<div className='text-indigo-900 flex justify-center items-center gap-2 rounded-xl bg-white px-8 hover:bg-gray-300 w-max mx-auto'>
						<MdWifiTetheringErrorRounded className='text-indigo-700 inline' />
						<span className='text-xl'>Tuvimos problemas con la conexión</span>
					</div>
				</div>
			) : null}
			{saved ? (
				<div className='flex flex-col gap-3 items-center'>
					<div className='text-indigo-900 flex justify-center items-center gap-2 rounded-xl bg-white px-8 hover:bg-gray-300 w-max mx-auto'>
						<BsCheckCircleFill className='text-green-600 inline' />
						<span className='text-xl'>Guardado exitoso</span>
					</div>

					<div className='text-center'>
						Puedes compartir tu link mediate el sigueinte enlace:
						<br />
						<Link className='underline text-green-600' to={'/' + url}>
							my-links.com/{url}
						</Link>
					</div>
				</div>
			) : (
				<TailwindButton
					className={
						' min-w-max mt-4 w-4/12 m-auto  flex justify-center items-center gap-1'
					}
					onClick={saveLinks}>
					{error ? (
						<>
							Reintentar <AiOutlineReload />
						</>
					) : (
						<>Listo</>
					)}
				</TailwindButton>
			)}
		</>
	);
};
