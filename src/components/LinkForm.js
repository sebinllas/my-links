import React, { useContext, useState, useEffect, useCallback } from 'react';
import { LinksContext } from '../Contexts';
import {
	TailwindInput,
	TailwindForm,
	TailwindButton,
	TailwindContainer
} from './TailwindComponents';
import { Link } from './Link';
import { v1 as uuid } from 'uuid';
import '../index.css';

const linkRegEx =
	/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
export const LinkForm = () => {
	const headers = new Headers();
	headers.append('x-api-key', 'm2xWoP1pHv9tfsjHoPH3q4x9GDfaxUyg9iFpxNSS');
	headers.append('Content-Type', 'application/json');

	const [form, setForm] = useState({ url: '', title: '', description: '' });
	const [links, setLinks] = useContext(LinksContext);
	const [fetchedImg, setFetchedImg] = useState('');

	//saves the form info as a new link
	const addLink = e => {
		e.preventDefault();
		setLinks({ ...links, [uuid()]: { ...form } });
		setForm({ url: '', title: '', description: '' });
		console.log('save click: ', { links });
	};

	// update state value by typing on inputs
	const handleChange = useCallback(e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}, [form]);

	const fetchLogo = url => {
		const requestOptions = {
			method: 'POST',
			headers: headers,
			redirect: 'follow',
			body: JSON.stringify({ domain: url })
		};
		return fetch('https://api.brandfetch.io/v1/logo', requestOptions);
	};

	useEffect(() => {
		let img = '';
		const delayDebounceFn = setTimeout(() => {
			if (form.url.match(linkRegEx)) {
				fetchLogo(form.url)
					.then(response => {
						return response.json();
					})
					.then(result => {
						if (result.statusCode === 200) {
							img = result.response.icon
								? result.response.icon.image
								: result.response.logo.image;
							setFetchedImg(img);
						}
					});
			} else {
			}
		}, 1000);
		return () => clearTimeout(delayDebounceFn);
		// eslint-disable-next-line
	}, [form.url]);

	useEffect(() => {
		setForm(form => {
			return { ...form, img: fetchedImg };
		});
	}, [fetchedImg]);

	return (
		<TailwindContainer>
			<TailwindForm onSubmit={addLink}>
				<TailwindInput
					value={form.url}
					name='url'
					required={true}
					placeholder='Url'
					onChange={e => {
						const newForm = form;
						delete newForm.img;
						setForm(newForm);
						handleChange(e);
					}}
				/>
				<TailwindInput
					name='title'
					value={form.title}
					type='text'
					required={true}
					placeholder='Título'
					onChange={handleChange}
				/>
				<TailwindInput
					name='description'
					value={form.description}
					type='text'
					placeholder='Descripción'
					onChange={handleChange}
				/>
				<TailwindButton className={'w-2/6'}>Agregar ➕</TailwindButton>
			</TailwindForm>
			<hr className='my-4 text-white' />
			<div className='px-2'>
				<p className='mx-auto text-white text-center font-semibold'>
					Vista previa:
				</p>
				<Link {...form} className='hover:bg-indigo-200' />
			</div>
		</TailwindContainer>
	);
};
