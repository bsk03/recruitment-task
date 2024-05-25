import React, { useRef } from 'react';
import startImage from '../../../public/images/startImage.png';
import ImageArea from './ImageArea';
import TextAreaSection from './TextAreaSection';
import { exportComponentAsPNG } from 'react-component-export-image';

type ImageProps = {
	showText: boolean;
	file: string | null;
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	setShowText: React.Dispatch<React.SetStateAction<boolean>>;
	posterRef:React.RefObject<HTMLDivElement>
};

const Poster = (props: ImageProps) => {
	const containerRef = props.posterRef;

	return (
		<span>
			<div className='relative w-[759px] h-[948px] bg-Black50' ref={containerRef}>
				<img
					src={props.file ? props.file : startImage}
					alt='Poster image'
					className={`h-full w-full select-none object ${!props.file &&((props.showText || props.image) && 'hidden')}`}
				/>
				<span>
					{props.image && (
						<ImageArea
							image={props.image}
							setImage={props.setImage}
							containerRef={containerRef}
						/>
					)}
				</span>
				<span>
					{props.showText && (
						<TextAreaSection
							containerRef={containerRef}
							setShowText={props.setShowText}
						/>
					)}
				</span>
			</div>
		
		</span>
	);
};

export default Poster;
