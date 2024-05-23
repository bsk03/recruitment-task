
import Poster from './components/posterSection/Poster';
import EditorLayout from './components/editorSection/EditorLayout';
import { useState } from 'react';

const App = () => {
	const [file, setFile] = useState<string | null>(null);
	const [text,setText] = useState<string | null>(null);
	const [showText, setShowText] = useState(false);
	const [image,setImage] = useState<string | null>(null);
	return (
		<div className='font-poppins flex justify-center align-middle gap-[32px]  m-[32px]'>
			<div className='w-[759px] h-[948px]'>
				<Poster file={file} text={text} image={image} setImage={setImage} showText={showText} />
			</div>
			<div className='w-[759px] h-[948px]'>
        <EditorLayout setFile={setFile} setImage={setImage} setShowText={setShowText}/>
      </div>
		</div>
	);
};

export default App;
