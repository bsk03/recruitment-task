import React from 'react';

import Button from '../Button';
import EditHeader from './EditHeader';
import EditMain from './EditMain';

type SetFileProps = {
	setFile:React.Dispatch<React.SetStateAction<string | null>>
	setImage:React.Dispatch<React.SetStateAction<string | null>>
	setShowText: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditorLayout = (props:SetFileProps) => {
	return (
		<div className='w-[749px] h-[948px] flex flex-col relative'>
			<EditHeader />
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='w-full h-[75px] bg-white97 py-[24px] px-[16px] mb-[32px] rounded-[10px]'>
				<h2 className='font-bold text-[18px] text-Black100'>Add content</h2>
			</div>
			<EditMain setFile={props.setFile} setImage={props.setImage} setShowText={props.setShowText}/>
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='absolute bottom-0 right-0'>
				<Button value={'Export to PNG'} />
			</div>
		</div>
	);
};

export default EditorLayout;
