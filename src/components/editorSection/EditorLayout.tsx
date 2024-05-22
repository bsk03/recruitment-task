import React from 'react';
import EditHeader from './editComponents/header/EditHeader';
import EditMain from './editComponents/main/EditMain';
import Button from '../Button';

type SetFileProps = {
	setFile:React.Dispatch<React.SetStateAction<string | null>>
}

const EditorLayout = (props:SetFileProps) => {
	return (
		<div className='w-[749px] h-[948px] flex flex-col relative'>
			<EditHeader />
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='w-full h-[75px] bg-white97 py-[24px] px-[16px] mb-[32px] rounded-[10px]'>
				<h2 className='font-bold text-[18px] text-Black100'>Add content</h2>
			</div>
			<EditMain setFile={props.setFile}/>
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='absolute bottom-0 right-0'>
				<Button value={'Export to PNG'} />
			</div>
		</div>
	);
};

export default EditorLayout;
