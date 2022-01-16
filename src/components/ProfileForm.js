import { useState, useContext } from 'react';
import {
	TailwindForm,
	TailwindInput,
	TailwindContainer,
	TailwindLoadingModal
} from './TailwindComponents';
import { Profile } from '../components/Profile';
import { ProfileContext } from '../Contexts';

export const ProfileForm = () => {
	// const handleChange = () =>{
	// }
	//const [form, setForm] = useState({ name: '', description: '', photo: '' });
	const [profile, setProfile] = useContext(ProfileContext);
	const [uploadingPhoto, setUploadingPhoto] = useState(false);
	const handleChange = e => {
		setProfile({ ...profile, [e.target.name]: e.target.value });
	};
	const handlePhotoChange = e => {
		//setprofile({ ...profile, photo: e.target.files[0] });
		let formdata = new FormData();
		formdata.append('image', e.target.files[0]);
		setUploadingPhoto(true);
		fetch(
			'https://api.imgbb.com/1/upload?key=b109455456c63ce7a682327ffa595c73',
			{
				method: 'POST',
				body: formdata,
				headers: {}
			}
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				if (data.success === true) {
					console.log(data);
					setProfile({ ...profile, photo: data.data.image.url });
					setUploadingPhoto(false);
				}
			});

		//setprofile({ nama: '', description: '', photo: '' });
		console.log(profile);
	};

	// const fetchImage = () => {

	// };

	return (
		<TailwindContainer className='relative blur-md pt-0 px-0 pb-4'>
			{uploadingPhoto ? (
				<div
					className='
						w-full
						h-full
						rounded-xl
						bg-gray-800
						bg-opacity-80
						absolute
						flex 
						items-center
						justify-center
				'>
					<TailwindLoadingModal>
						<h1 className='font-bold text-3xl flex justify-center'>
							Tu foto está siendo cargada
						</h1>
						<p>Este proceso tardará unos instantes <br /> por favor espera</p>
					</TailwindLoadingModal>
				</div>
			) : null}
			<TailwindForm>
				<TailwindInput
					className='mt-2'
					placeholder={'Tu nombre'}
					name='name'
					value={profile.name}
					required={true}
					onChange={handleChange}
					disable={uploadingPhoto.toString()}
				/>
				<TailwindInput
					name='photo'
					type='file'
					accept='image/*'
					title='Sube tú foto'
					disable={uploadingPhoto.toString()}
					onChange={handlePhotoChange}
				/>
				<TailwindInput
					name='description'
					value={profile.description}
					type='text'
					placeholder='Sobre tí'
					onChange={handleChange}
					disable={uploadingPhoto.toString()}
				/>

			</TailwindForm>
			<hr className='my-4 text-white' />
			<Profile {...profile} className='' />
		</TailwindContainer>
	);
};
