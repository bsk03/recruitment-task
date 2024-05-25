import Poster from './components/posterSection/Poster';
import EditorLayout from './components/editorSection/EditorLayout';
import { useEffect, useRef, useState, createContext } from 'react';

type ResetContext = {
	reset: () => void;
};

export const ResetContext = createContext<ResetContext | null>(null);

const App = () => {
	const [file, setFile] = useState<string | null>(null);
	const [showText, setShowText] = useState(false);
	const [image, setImage] = useState<string | null>(null);
	const [posterReady, setPosterReady] = useState(true);

	const reset = () => {
		setFile(null);
		setShowText(false);
		setImage(null);
		setPosterReady(true);
	};

	useEffect(() => {
		if (file || showText || image) {
			setPosterReady(false);
		} else {
			setPosterReady(true);
		}
	}, [file, showText, image]);

	const posterRef = useRef<HTMLDivElement>(null);
	return (
		<ResetContext.Provider value={{ reset }}>
			<div className='font-poppins flex justify-center align-middle gap-[32px]  m-[32px]'>
				<div className='w-[759px] h-[948px]'>
					<Poster
						file={file}
						image={image}
						setImage={setImage}
						showText={showText}
						setShowText={setShowText}
						posterRef={posterRef}
					/>
				</div>
				<div className='w-[759px] h-[948px]'>
					<EditorLayout
						setFile={setFile}
						setImage={setImage}
						setShowText={setShowText}
						posterRef={posterRef}
						posterReady={posterReady}
					/>
				</div>
			</div>
		</ResetContext.Provider>
	);
};

export default App;
