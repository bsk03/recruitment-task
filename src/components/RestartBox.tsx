import React, { useContext, MouseEventHandler, useRef, useEffect } from 'react';
import { AlertIcon,CloseIcon } from './icons';
import { ResetContext } from '../App';
import Button from './Button';

type RestartBoxProps = {
	closePopup: MouseEventHandler<HTMLButtonElement>;
};

const RestartBox: React.FC<RestartBoxProps> = ({ closePopup }) => {
	const boxRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
			closePopup(e as unknown as React.MouseEvent<HTMLButtonElement>);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const reset = useContext(ResetContext);

	return (
		<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div
				ref={boxRef}
				className='bg-white p-5 rounded-lg shadow-lg flex justify-evenly align-middle flex-col h-[584px] w-[643px]  items-center absolute'
			>
				<div className='flex flex-col justify-center items-center  w-[387px]'>
					<div className='flex justify-center items-center'>
						<AlertIcon height={'290'} width={'290'} color={'#CB0000'} />
					</div>
					<div className='gap-[8px]'>
						<h1 className='text-center text-[32px] font-bold text-Black100'>
							WARNING
						</h1>
						<p className='text-center text-Black75'>
							You’re about to reset whole process. Are you sure you want to do
							it?
						</p>
					</div>
				</div>
				<div className='w-[387px] flex justify-center gap-[32px] '>
					<button onClick={closePopup} className='text-[18px]'>
						Close
					</button>
					<Button
						value={'Confirm'}
						whenDisabled={false}
						functionOnClick={() => reset?.reset()}
					/>
				</div>
				<button
					className='absolute top-[36px] right-[36px]'
					onClick={closePopup}
				>
					<CloseIcon height={'32'} width={'32'} color={'#000000'} />
				</button>
			</div>
		</div>
	);
};

export default RestartBox;
