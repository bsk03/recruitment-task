import LogoIcon from '../../../public/icons/LogoIcon';
import ResetIcon from '../../../public/icons/ResetIcon';

import { MouseEventHandler, useContext } from 'react';
import { ResetContext } from '../../App';

type EditHeaderProps={
	openPopup: MouseEventHandler<HTMLButtonElement>;
}

const EditHeader = (props:EditHeaderProps) => {
	const reset = useContext(ResetContext);

	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center'>
				<LogoIcon height={'64'} width={'64'} color={'#7209B7'} />
				<h1 className='text-Black75 text-[32px] h-[48px]'>CanvasEditor</h1>
			</div>
			<button className='flex h-[32px] w-[90px] text-[#CB0000] border-b-[1px] border-[#CB0000] gap-[8px] items-center' onClick={props.openPopup}>
				<p className='text-[18px]'>Reset</p>
				<ResetIcon height={'32'} width={'32'} color={'#CB0000'} />
			</button>
		</div>
	);
};

export default EditHeader;
