import React, { useState } from 'react';
import Poster from './components/posterSection/Poster';
import EditorLayout from './components/editorSection/EditorLayout';

const App = () => {
	const [file, setFile] = useState<string | null>(null);
	return (
		<div className='font-poppins flex justify-center align-middle gap-[32px]  m-[32px]'>
			<div className='w-[759px] h-[948px]'>
				<Poster file={file}/>
			</div>
			<div className='w-[759px] h-[948px]'>
        <EditorLayout setFile={setFile}/>
      </div>
		</div>
	);
};

export default App;
