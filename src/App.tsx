import React from 'react';
import Poster from './components/posterSection/Poster';
import EditorLayout from './components/editorSection/EditorLayout';

const App = () => {
	return (
		<div className='font-poppins flex justify-center align-middle gap-[32px]  m-[32px]'>
			<div className='w-[759px] h-[948px]'>
				<Poster />
			</div>
			<div className='w-[759px] h-[948px]'>
        <EditorLayout/>
      </div>
		</div>
	);
};

export default App;
