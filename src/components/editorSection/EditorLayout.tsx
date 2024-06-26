import React, { MouseEventHandler } from 'react';
import EditHeader from './EditHeader';
import EditMain from './EditMain';

import { toPng } from 'html-to-image';
import Button from '../Button';

type SetFileProps = {
	setFile: React.Dispatch<React.SetStateAction<string | null>>;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	setShowText: React.Dispatch<React.SetStateAction<boolean>>;
	posterRef: React.RefObject<HTMLDivElement>;
	posterReady: boolean;
	openPopup: MouseEventHandler<HTMLButtonElement>;
};

const EditorLayout = (props: SetFileProps) => {
	const componentToPrint = props.posterRef;

	const exportToPng = () => {
		if (componentToPrint.current === null) {
			return;
		}

		const scale = 1080 / componentToPrint.current.offsetWidth;

		toPng(componentToPrint.current, {
			width: 1080,
			height: 1350,
			style: {
				transform: `scale(${scale})`,
				transformOrigin: 'top left',
				width: `${componentToPrint.current.offsetWidth}px`,
				height: `${componentToPrint.current.offsetHeight}px`,
			},
		})
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'poster.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className='w-[759px] h-[948px] flex flex-col relative'>
			<EditHeader openPopup={props.openPopup} />
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='w-full h-[75px] bg-white97 py-[24px] px-[16px] rounded-[10px]'>
				<h2 className='font-bold text-[18px] text-Black100'>Add content</h2>
			</div>
			<EditMain
				setFile={props.setFile}
				setImage={props.setImage}
				setShowText={props.setShowText}
			/>
			<div className='border-[1px] border-white98 my-[32px]' />
			<div className='absolute bottom-0 right-0'>
				<Button
					value={'Export As PNG'}
					whenDisabled={props.posterReady}
					functionOnClick={exportToPng}
				/>
			
			</div>
		</div>
	);
};

export default EditorLayout;
