import React from 'react';

import LogoIcon from '../../../public/icons/LogoIcon';
import ResetIcon from '../../../public/icons/ResetIcon';

const EditHeader = () => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex'>
				<LogoIcon height={'48'} width={'48'} color={'#7209B7'}/>
				<h1 className='text-Black75 text-[32px] h-[48px]'>CanvasEditor</h1>
			</div>
			<div className='flex h-[32px] w-[90px] text-[#CB0000] border-b-[1px] border-[#CB0000] gap-[8px] items-center'>
				<p className='text-[18px] h-[27px]'>Reset</p>
                <ResetIcon height={'22'} width={'24'} color={'#CB0000'} />
			</div>
		</div>
	);
};

export default EditHeader;
