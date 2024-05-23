import React, { useRef } from 'react';
import startImage from '../../../public/images/startImage.png';
import ImageArea from './ImageArea';
import TextAreaSection from './TextAreaSection';

type ImageProps = {
	showText: boolean;
	file: string | null;
	text: string | null;
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
};

const Poster = (props: ImageProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className='relative' ref={containerRef}>
			<img
				src={props.file ? props.file : startImage}
				alt='Start image'
				className='w-[759px] h-[948px]'
			/>
			{props.image && (
				<ImageArea image={props.image} setImage={props.setImage} containerRef={containerRef} />
			)}
			{props.showText && <TextAreaSection />}
		</div>
	);
};

export default Poster;
