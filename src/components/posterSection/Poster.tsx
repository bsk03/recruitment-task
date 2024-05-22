import React from 'react';
import startImage from '../../../public/images/startImage.png';

type ImageProps = {
	file: string | null;
};

const Poster = (props: ImageProps) => {
	return (
		<div>
			<img
				src={props.file ? props.file : startImage}
				alt='Start image'
				className='w-[759px] h-[948px]'
			/>
		</div>
	);
};

export default Poster;
