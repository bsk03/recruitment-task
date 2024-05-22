import React from 'react';
import startImage from '../../../public/images/startImage.png';

import ImageArea from './ImageArea';
type ImageProps = {
	file: string | null;
	text: string | null;
	image: string | null;
  setImage:React.Dispatch<React.SetStateAction<string | null>>
};

const Poster = (props: ImageProps) => {
	return (
		<div className='relative'>
			<img
				src={props.file ? props.file : startImage}
				alt='Start image'
				className='w-[759px] h-[948px]'
			/>
			{props.image && <ImageArea image={props.image} setImage={props.setImage}/>}
		</div>
	);
};

export default Poster;
