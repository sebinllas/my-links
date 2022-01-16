import { BsPersonCircle } from 'react-icons/bs';
export const Profile = ({ name, description, photo, className }) => {
	return (
		<div
			className={`${className} w-9/12 m-auto text-white mt-2 flex gap-2  flex-col items-center rounded-full`}>
			<div
				className={` 
					bg-black
					p-0 
					w-20
					h-20
					border-4
					border-indigo-600
					rounded-full 
					flex-shrink-0 
					overflow-hidden 
					flex 
					items-center 
					justify-center
				`}>
				{photo ? (
					<img src={photo} alt='profile' className='flex-grow w-full' />
				) : (
					<BsPersonCircle className='text-black' size={'100%'} color="white" />
				)}
			</div>
			{name || description ? (
				<div className=' bg-gray-700  w-full rounded-full flex flex-col justify-center items-center flex-grow p-1 '>
					<h1 className='font-bold text-xl'>{name}</h1>
					<p className='text-xs text-center p-2'>{description}</p>
				</div>
			) : null}
		</div>
	);
};
