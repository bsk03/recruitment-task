import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import Button from '../Button';
import EditHeader from './EditHeader';
import EditMain from './EditMain';

type SetFileProps = {
	setFile: React.Dispatch<React.SetStateAction<string | null>>;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	setShowText: React.Dispatch<React.SetStateAction<boolean>>;
	posterRef: React.RefObject<HTMLDivElement>;
	posterReady: boolean
};

const EditorLayout = (props: SetFileProps) => {
	return (
		<div className='w-[749px] h-[948px] flex flex-col relative'>
			<EditHeader />
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='w-full h-[75px] bg-white97 py-[24px] px-[16px] mb-[32px] rounded-[10px]'>
				<h2 className='font-bold text-[18px] text-Black100'>Add content</h2>
			</div>
			<EditMain
				setFile={props.setFile}
				setImage={props.setImage}
				setShowText={props.setShowText}
			/>
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='absolute bottom-0 right-0'>
				
				<button onClick={() => exportComponentAsPNG(props.posterRef,{fileName:'poster'})} className='px-[30px] py-[6px] rounded-[5px] bg-Primary text-white text-[15px] font-semibold hover:bg-[#550788] focus:outline-none focus:ring-2 focus:ring-[#7209B7] focus:ring-opacity-50 disabled:bg-[#CDCDCD] transition-[0.4s]' disabled={props.posterReady}>
					Export As PNG
				</button>
			</div>
		</div>
	);
};

export default EditorLayout;
