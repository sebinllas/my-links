import { LinkForm } from './components/LinkForm.js';
import { LinkList } from './components/LinkList.js';
import { SaveInfo } from './components/SaveInfo';
import { LinksPage } from './components/LinksPage.js';
import { ProfileForm } from './components/ProfileForm.js';
import React, { useState } from 'react';
import { LinksContext, PathContext, ProfileContext } from './Contexts';
import { LinksPath } from './components/LinksPath';
import { TailwindContainer } from './components/TailwindComponents';
import { Route, Routes } from 'react-router';

import { v1 as uuid } from 'uuid';
function App() {
	const [url, setUrl] = useState(uuid());
	const [profile, setProfile] = useState({
		name: '',
		description: '',
		photo: null
	});
	const [links, setLinks] = useState({});

	return (
		<ProfileContext.Provider value={[profile, setProfile]}>
			<PathContext.Provider value={[url, setUrl]}>
				<LinksContext.Provider value={[links, setLinks]}>
					<Routes>
						<Route path={'/:path'} element={<LinksPage />}></Route>
						<Route
							path={'/'}
							element={
								<div className='display flex flex-col center'>
									<h1 className='py-4 text-xl text-white text-center'>
										Crea tu lista de links
									</h1>
									<LinksPath />
									<ProfileForm />
									<LinkForm />
									<TailwindContainer className={'flex flex-col items-center'}>
										<LinkList links={links} deleteBtn={true} />
									</TailwindContainer>
									<TailwindContainer className='flex flex-col items-center justify-center'>
										<SaveInfo />
									</TailwindContainer>
								</div>
							}></Route>
					</Routes>
				</LinksContext.Provider>
			</PathContext.Provider>
		</ProfileContext.Provider>
	);
}

export default App;
